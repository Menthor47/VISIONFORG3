import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Phone, Mail, CheckCircle, Star } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().min(2, { message: 'Company name is required' }),
  projectBudget: z.string().min(1, { message: 'Please select a budget range' }),
  message: z.string().min(20, { message: 'Please describe your project (min 20 characters)' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectBudget: '',
      message: '',
    },
  });

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append('_origin', 'react');
      params.append('csrf', 'nl-design-static-token');
      params.append('website', ''); // honeypot left empty
      params.append('name', values.name);
      params.append('email', values.email);
      params.append('phone', (values as any).phone || '');
      params.append('company', values.company);
      params.append('projectBudget', values.projectBudget);
      params.append('message', values.message);

      const resp = await fetch('/contact-submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString(),
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => '');
        throw new Error(text || `Submission failed with ${resp.status}`);
      }

      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was a problem sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <Helmet>
          <title>Message Sent | Contact Us - NextLevelDesign</title>
          <link rel="canonical" href="https://nextleveldesign.live/contact/" />
        </Helmet>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="sr-only">Message Sent Successfully</h1>
          <CheckCircle className="h-20 w-20 text-green-400 mx-auto" />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Thank You!
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            We've received your request and will get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setSubmitSuccess(false)}
            className="bg-gradient-to-r from-cyan-500 to-purple-500"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us | NextLevelDesign</title>
        <link rel="canonical" href="https://nextleveldesign.live/contact/" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <h1 className="sr-only">Contact Us</h1>
          <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Let's Transform Your Vision
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your digital presence? Get a free consultation with our experts.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">150+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">98% Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">24h Response</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Start Your Project Today
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tell us about your vision and we'll create a custom strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cyan-400">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field}
                                className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cyan-400">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                type="email"
                                {...field}
                                className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cyan-400">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                {...field}
                                className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-cyan-400">Company Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company name" 
                                {...field}
                                className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectBudget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-cyan-400">Project Budget *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-700/50 border-cyan-500/30 text-white">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5k-15k">$5k - $15k</SelectItem>
                              <SelectItem value="15k-30k">$15k - $30k</SelectItem>
                              <SelectItem value="30k-50k">$30k - $50k</SelectItem>
                              <SelectItem value="50k+">$50k+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-cyan-400">Project Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                              rows={5}
                              {...field}
                              className="bg-slate-700/50 border-cyan-500/30 text-white placeholder:text-gray-400"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Your Free Strategy Session'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <a href="tel:+1-555-123-4567" className="text-gray-400 hover:text-cyan-400">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:hello@nextlevel.com" className="text-gray-400 hover:text-cyan-400">
                      hello@nextlevel.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30">
              <CardContent className="pt-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">24-Hour Response Guarantee</h3>
                <p className="text-gray-300 text-sm">
                  We guarantee to respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
