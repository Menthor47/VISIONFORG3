<?php
// public/contact-admin.php
// Minimal admin page to browse stored submissions. Protect this with HTTP auth at the server level.

$STORAGE_DIR = __DIR__ . '/contact-storage';
$LOG_FILE = $STORAGE_DIR . '/submissions.log';

function read_last_lines($file, $max = 200) {
  if (!is_file($file)) return [];
  $lines = @file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  if (!$lines) return [];
  $total = count($lines);
  $start = max(0, $total - $max);
  $subset = array_slice($lines, $start);
  $out = [];
  foreach ($subset as $ln) {
    $j = json_decode($ln, true);
    if (is_array($j)) $out[] = $j;
  }
  return array_reverse($out); // newest first
}

$items = read_last_lines($LOG_FILE, 500);

?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact Submissions | NextLevelDesign</title>
  <link rel="icon" href="/favicon.ico" />
  <style>
    :root{color-scheme:dark}
    body{background:#0f172a;color:#e5e7eb;font-family:ui-sans-serif,system-ui;margin:0}
    .wrap{max-width:1200px;margin:2rem auto;padding:0 1rem}
    h1{font-size:1.5rem;margin:0 0 1rem;background:linear-gradient(90deg,#22d3ee,#a855f7);-webkit-background-clip:text;background-clip:text;color:transparent}
    .card{background:rgba(30,41,59,.6);border:1px solid rgba(34,211,238,.2);border-radius:12px;padding:1rem;margin-bottom:1rem}
    .meta{font-size:.85rem;color:#94a3b8}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .row{display:grid;grid-template-columns:160px 1fr;gap:.75rem;margin:.25rem 0}
    .label{color:#7dd3fc}
    .msg{white-space:pre-wrap;background:#02061733;border:1px solid #22d3ee33;padding:.75rem;border-radius:8px}
    .topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}
    a.button{color:#0b1220;background:#22d3ee;border:none;padding:.5rem .75rem;border-radius:8px;text-decoration:none}
    .empty{color:#94a3b8}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="topbar">
      <h1>Contact Submissions</h1>
      <div>
        <a class="button" href="/contact-standalone.html">Open form</a>
        <a class="button" href="/contact-storage/submissions.log" download>Download log</a>
      </div>
    </div>

    <?php if (!$items): ?>
      <p class="empty">No submissions found.</p>
    <?php else: ?>
      <?php foreach ($items as $i): ?>
        <div class="card">
          <div class="grid">
            <div>
              <div class="row"><div class="label">Name</div><div><?= htmlspecialchars($i['name'] ?? '') ?></div></div>
              <div class="row"><div class="label">Email</div><div><?= htmlspecialchars($i['email'] ?? '') ?></div></div>
              <div class="row"><div class="label">Phone</div><div><?= htmlspecialchars($i['phone'] ?? '') ?></div></div>
              <div class="row"><div class="label">Company</div><div><?= htmlspecialchars($i['company'] ?? '') ?></div></div>
              <div class="row"><div class="label">Budget</div><div><?= htmlspecialchars($i['budget'] ?? '') ?></div></div>
            </div>
            <div>
              <div class="row"><div class="label">Time (UTC)</div><div><?= htmlspecialchars($i['timestamp'] ?? '') ?></div></div>
              <div class="row"><div class="label">IP</div><div><?= htmlspecialchars($i['ip'] ?? '') ?></div></div>
              <div class="row"><div class="label">Origin</div><div><?= htmlspecialchars($i['origin'] ?? '') ?></div></div>
              <div class="row"><div class="label">User-Agent</div><div class="meta"><?= htmlspecialchars($i['ua'] ?? '') ?></div></div>
            </div>
          </div>
          <div class="row" style="grid-template-columns:160px 1fr;margin-top:.5rem">
            <div class="label">Message</div>
            <div class="msg"><?= htmlspecialchars($i['message'] ?? '') ?></div>
          </div>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>

    <p class="meta">Tip: protect this page with HTTP basic auth or IP allowlist at the server level.</p>
  </div>
</body>
</html>

