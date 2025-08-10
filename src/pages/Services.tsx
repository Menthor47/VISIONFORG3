import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ScrollingLink from "@/components/ScrollingLink";
import { Helmet } from "react-helmet-async";
import { 
  Palette, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Search, 
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Palette className="h-12 w-12 text-secondary" />,
      title: "Branding & Identity",
      description: "Create a clear, consistent brand that’s easy to recognize and use across your channels.",
      fullDescription: "We help you define how your brand looks and sounds so it’s easy to use across web, print, and social. The result is a practical set of tools you and your team can rely on.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      detailedFeatures: [
        "Custom logo design with multiple concepts",
        "Comprehensive brand guidelines document",
        "Color palette and typography selection",
        "Business card and stationery design",
        "Brand voice and messaging strategy",
        "Social media brand kit"
      ],
      benefits: [
        "Clear, consistent brand across channels",
        "Professional assets you can reuse",
        "Guidelines that make future design easier",
        "Messaging that fits your customers"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      price: "Starting at $2,500",
      timeline: "2-4 weeks"
    },
    {
      id: 2,
      icon: <Code className="h-12 w-12 text-secondary" />,
      title: "Web Development",
      description: "Build dependable websites with clean code, solid performance, and room to grow.",
      fullDescription: "We focus on reliable, maintainable code and sensible architecture. Your site will be fast, accessible, and straightforward to update.",
      features: ["Custom Development", "E-commerce", "CMS Integration", "API Development"],
      detailedFeatures: [
        "Responsive web design for all devices",
        "Custom e-commerce solutions",
        "Content Management System integration",
        "Third-party API integrations",
        "Performance optimization and SEO",
        "Security implementation and SSL"
      ],
      benefits: [
        "Fast, reliable performance",
        "Works well on phones and desktops",
        "Search-friendly basics in place",
        "Built to grow without rewrites"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      price: "Starting at $5,000",
      timeline: "4-8 weeks"
    },
    {
      id: 3,
      icon: <Smartphone className="h-12 w-12 text-secondary" />,
      title: "UX/UI Design",
      description: "Design interfaces that are simple to understand and easy to use.",
      fullDescription: "We use research, wireframes, and prototypes to find simple solutions. The goal is to reduce friction and make tasks clearer for real users.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      detailedFeatures: [
        "User persona development and journey mapping",
        "Information architecture and wireframing",
        "Interactive prototypes and mockups",
        "Usability testing and iteration",
        "Accessibility compliance (WCAG 2.1)",
        "Design system creation"
      ],
      benefits: [
        "Interfaces that are easy to learn",
        "Fewer friction points in key flows",
        "Reusable design system components",
        "Clear handoff for development"
      ],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
      price: "Starting at $3,500",
      timeline: "3-6 weeks"
    },
    {
      id: 4,
      icon: <TrendingUp className="h-12 w-12 text-secondary" />,
      title: "Digital Marketing",
      description: "Plan and run practical marketing you can measure and improve.",
      fullDescription: "We focus on steady, sustainable growth using content, paid channels, and analytics. You’ll get clear reporting and small, regular improvements.",
      features: ["Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
      detailedFeatures: [
        "Social media strategy and management",
        "Content creation and marketing campaigns",
        "Google Ads and Facebook advertising",
        "Email marketing automation",
        "SEO and content optimization",
        "Analytics and performance reporting"
      ],
      benefits: [
        "Plans based on data you can see",
        "Clear reporting and next steps",
        "Sustainable growth over shortcuts",
        "Adjustments based on what’s working"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      price: "Starting at $2,000/month",
      timeline: "Ongoing"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Reliable timelines",
      description: "We set clear milestones and stick to them."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Small, senior team",
      description: "You’ll work directly with the people doing the work."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality you can verify",
      description: "Reviews, tests, and previews before launch."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Practical over flashy",
      description: "We choose what works, not what’s trendy."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Modern, not experimental",
      description: "We use well-supported tools."
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "Search-friendly by default",
      description: "Clean markup, performance, and metadata."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Digital Services | NextLevelDesign</title>
        <link rel="canonical" href="https://nextleveldesign.live/services/" />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/cyber-services-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-slow-spin" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-secondary/30 animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/10 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="sr-only">Our Digital Services</h1>
            <Badge variant="outline" className="mb-6 text-sm font-medium glass-card border-primary/30 text-primary">
              What We Offer
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Straightforward design and development services to help your business look good, work smoothly, and stay easy to maintain.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="cyber" size="lg" asChild>
                <ScrollingLink to="/contact">Get Started</ScrollingLink>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <ScrollingLink to="/portfolio">View Our Work</ScrollingLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-smooth border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-heading text-2xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-3">What's Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline">{feature}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-secondary">
                      {service.price}
                    </span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary">Learn More</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-2xl text-primary flex items-center gap-3">
                            {service.icon}
                            {service.title}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-heading text-lg font-semibold mb-2">Service Overview</h3>
                              <p className="text-muted-foreground mb-4">{service.fullDescription}</p>
                              
                              <div className="mb-4">
                                <h4 className="font-heading font-semibold mb-2">What's Included:</h4>
                                <ul className="space-y-2">
                                  {service.detailedFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center text-muted-foreground">
                                      <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-heading text-lg font-semibold mb-2">Key Benefits</h3>
                              <ul className="space-y-2 mb-6">
                                {service.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-center text-muted-foreground">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                                <div className="flex justify-between items-center">
                                  <span className="font-heading font-semibold">Investment:</span>
                                  <span className="font-bold text-secondary">{service.price}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="font-heading font-semibold">Timeline:</span>
                                  <span className="text-muted-foreground">{service.timeline}</span>
                                </div>
                              </div>
                              
                              <Button variant="accent" className="mt-6 w-full" asChild>
                                <ScrollingLink to="/contact">
                                  Get Started Today
                                </ScrollingLink>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose NextLevelDesign?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-background shadow-elegant hover:shadow-hover transition-smooth">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Dark background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-slow-spin" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-secondary/30 animate-pulse" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground neon-glow mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="xl" asChild>
              <ScrollingLink to="/contact">Get a Quote</ScrollingLink>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <ScrollingLink to="/contact">Book Consultation</ScrollingLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;