import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ScrollingLink from "@/components/ScrollingLink";
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
      description: "Create memorable brand experiences that resonate with your audience and set you apart from competitors.",
      fullDescription: "Transform your business with a comprehensive brand identity that tells your story and connects with your target audience. Our branding process includes extensive market research, competitor analysis, and strategic positioning to ensure your brand stands out in today's competitive landscape.",
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
        "Increased brand recognition by up to 80%",
        "Higher customer trust and loyalty",
        "Professional market presence",
        "Consistent brand experience across all touchpoints"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      price: "Starting at $2,500",
      timeline: "2-4 weeks"
    },
    {
      id: 2,
      icon: <Code className="h-12 w-12 text-secondary" />,
      title: "Web Development",
      description: "Build high-performance websites and web applications using modern technologies and best practices.",
      fullDescription: "Create powerful, scalable web solutions that drive business growth. Our development team uses cutting-edge technologies like React, Next.js, and modern backend frameworks to build fast, secure, and user-friendly websites and applications that perform exceptionally across all devices.",
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
        "Up to 200% increase in website performance",
        "Mobile-first responsive design",
        "SEO-optimized for better search rankings",
        "Scalable architecture for future growth"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      price: "Starting at $5,000",
      timeline: "4-8 weeks"
    },
    {
      id: 3,
      icon: <Smartphone className="h-12 w-12 text-secondary" />,
      title: "UX/UI Design",
      description: "Design intuitive user experiences that convert visitors into customers and drive business growth.",
      fullDescription: "Create user-centered designs that not only look beautiful but also provide exceptional user experiences. Through extensive user research, wireframing, and prototyping, we design interfaces that are intuitive, accessible, and optimized for conversions.",
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
        "Up to 150% improvement in user engagement",
        "Higher conversion rates and user satisfaction",
        "Reduced development time with clear specifications",
        "Future-proof design systems"
      ],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
      price: "Starting at $3,500",
      timeline: "3-6 weeks"
    },
    {
      id: 4,
      icon: <TrendingUp className="h-12 w-12 text-secondary" />,
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing strategies that deliver measurable results.",
      fullDescription: "Accelerate your business growth with comprehensive digital marketing strategies. From social media management to PPC campaigns, we create data-driven marketing solutions that increase brand awareness, drive qualified traffic, and generate leads that convert into customers.",
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
        "Average 300% increase in qualified leads",
        "Improved brand visibility and awareness",
        "Higher ROI on marketing investments",
        "Data-driven insights for continuous improvement"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      price: "Starting at $2,000/month",
      timeline: "Ongoing"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising quality."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Team",
      description: "Our team consists of industry experts with proven track records."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive quality assurance."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Award Winning",
      description: "Recognized by industry leaders for our innovative solutions."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Cutting Edge",
      description: "We use the latest technologies and industry best practices."
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "SEO Optimized",
      description: "All our solutions are built with search engine optimization in mind."
    }
  ];

  return (
    <div className="min-h-screen">
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
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive digital solutions to elevate your brand and drive unprecedented growth in the digital realm.
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