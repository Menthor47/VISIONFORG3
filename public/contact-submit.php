<?php
// public/contact-submit.php
// Handles contact form submissions: validates, stores to file, and emails the details.

// ====== CONFIG ======
$RECIPIENT = 'contact@nextleveldesign.art';
$STORAGE_DIR = __DIR__ . '/contact-storage';
$LOG_FILE = $STORAGE_DIR . '/submissions.log';
$ALLOWED_ORIGINS = ['standalone', 'react']; // Adjust if reusing from other pages
$CSRF_TOKEN = 'nl-design-static-token'; // Replace with env/secret if possible
// =====================

function http_response($code, $message, $extraHeaders = []) {
  http_response_code($code);
  foreach ($extraHeaders as $h) header($h);
  echo $message;
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response(405, 'Method Not Allowed');
}

// Basic rate-limiting by IP (very simple, best effort)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateKey = $STORAGE_DIR . '/rate_' . preg_replace('/[^A-Za-z0-9_.-]/', '_', $ip);
$now = time();
if (file_exists($rateKey) && ($now - filemtime($rateKey)) < 10) { // 1 submission per 10s
  http_response(429, 'Too Many Requests');
}
@touch($rateKey);

// Create storage directory if not exists
if (!is_dir($STORAGE_DIR)) {
  @mkdir($STORAGE_DIR, 0700, true);
}

// Honeypot
$honeypot = $_POST['website'] ?? '';
if (!empty($honeypot)) {
  // Pretend success to bots
  http_response(200, render_thank_you());
}

// CSRF check (best effort for static form)
$csrf = $_POST['csrf'] ?? '';
if ($csrf !== $CSRF_TOKEN) {
  http_response(400, 'Invalid submission (CSRF)');
}

// Origin tag
$origin = $_POST['_origin'] ?? '';
if (!in_array($origin, $ALLOWED_ORIGINS, true)) {
  http_response(400, 'Invalid origin');
}

// Collect and validate fields
function sanitize_text($s) {
  $s = trim($s ?? '');
  $s = preg_replace("/(\r|\n)/", ' ', $s); // prevent header injection
  return $s;
}

$name = sanitize_text($_POST['name'] ?? '');
$email = sanitize_text($_POST['email'] ?? '');
$phone = sanitize_text($_POST['phone'] ?? '');
$company = sanitize_text($_POST['company'] ?? '');
$budget = sanitize_text($_POST['projectBudget'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $company === '' || $budget === '' || $message === '') {
  http_response(400, 'Please complete all required fields.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response(400, 'Please provide a valid email.');
}

// Build record
$timestamp = gmdate('c');
$record = [
  'timestamp' => $timestamp,
  'ip' => $ip,
  'origin' => $origin,
  'name' => $name,
  'email' => $email,
  'phone' => $phone,
  'company' => $company,
  'budget' => $budget,
  'message' => $message,
  'ua' => $_SERVER['HTTP_USER_AGENT'] ?? ''
];

// Append to log file (JSONL)
$fh = @fopen($LOG_FILE, 'ab');
if ($fh) {
  if (flock($fh, LOCK_EX)) {
    fwrite($fh, json_encode($record, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
    fflush($fh);
    flock($fh, LOCK_UN);
  }
  fclose($fh);
}

// Send email
$subject = 'New Contact Request - ' . $name . ' (' . $company . ') - Budget: ' . ($budget ?: 'N/A');
$bodyLines = [
  'A new contact form submission was received:',
  '',
  'Name: ' . $name,
  'Email: ' . $email,
  'Phone: ' . ($phone ?: 'N/A'),
  'Company: ' . $company,
  'Budget: ' . $budget,
  '',
  'Message:',
  $message,
  '',
  'Meta:',
  'Time (UTC): ' . $timestamp,
  'IP: ' . $ip,
  'User-Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown'),
];
$body = implode("\r\n", $bodyLines);

$headers = [];
$headers[] = 'From: NextLevelDesign Contact <no-reply@nextleveldesign.art>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Origin: ' . $origin;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

@mail($RECIPIENT, $subject, $body, implode("\r\n", $headers));

// Respond with a friendly page
http_response(200, render_thank_you());

function render_thank_you() {
  return '<!doctype html>'
    . '<html lang="en">'
    . '<head><meta charset="utf-8" />'
    . '<meta name="viewport" content="width=device-width, initial-scale=1" />'
    . '<title>Message Sent | NextLevelDesign</title>'
    . '<link rel="icon" href="/favicon.ico" />'
    . '<style>body{background:#0f172a;color:#e5e7eb;font-family:ui-sans-serif,system-ui;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem} .card{background:rgba(30,41,59,.6);border:1px solid rgba(34,211,238,.2);border-radius:1rem;padding:2rem;max-width:36rem;text-align:center} h1{font-size:1.875rem;margin:0 0 .5rem;background:linear-gradient(90deg,#22d3ee,#a855f7);-webkit-background-clip:text;background-clip:text;color:transparent} p{color:#cbd5e1}</style>'
    . '</head><body>'
    . '<div class="card">'
    . '<h1>Thank you!</h1>'
    . '<p>We\'ve received your message and will get back to you within 24 hours.</p>'
    . '<p style="margin-top:1rem"><a href="/contact-standalone.html" style="color:#22d3ee;text-decoration:underline">Send another message</a></p>'
    . '</div>'
    . '</body></html>';
}
?>

