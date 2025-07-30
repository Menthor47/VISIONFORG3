import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ScrollingLink from "@/components/ScrollingLink";
import { ExternalLink, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Branding", "Web Development", "UX/UI Design", "E-commerce"];

  const projects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      category: "Branding",
      client: "Green Energy Startup",
      description: "Complete brand identity and website design for a sustainable technology company.",
      fullDescription: "EcoTech Solutions needed a modern brand identity that would communicate their commitment to sustainable technology. We created a comprehensive brand system including logo design, color palette, typography, and brand guidelines. The project also included a responsive website design that showcases their innovative products and environmental impact.",
      tags: ["Logo Design", "Brand Guidelines", "Website"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      results: ["40% increase in brand recognition", "60% more qualified leads", "95% client satisfaction"],
      url: "#"
    },
    {
      id: 2,
      title: "FinanceFlow App",
      category: "UX/UI Design",
      client: "Financial Services",
      description: "Mobile app design for a personal finance management platform.",
      fullDescription: "FinanceFlow required a user-friendly mobile application that would simplify personal finance management. Through extensive user research and iterative design, we created an intuitive interface that makes complex financial data accessible and actionable for everyday users.",
      tags: ["Mobile Design", "User Research", "Prototyping"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      results: ["4.8/5 app store rating", "250k+ downloads in 6 months", "30% reduction in support tickets"],
      url: "#"
    },
    {
      id: 3,
      title: "Urban Threads",
      category: "E-commerce",
      client: "Fashion Retailer",
      description: "Complete e-commerce platform for a contemporary fashion brand.",
      fullDescription: "Urban Threads needed a modern e-commerce platform that would reflect their contemporary fashion aesthetic while providing a seamless shopping experience. We built a custom Shopify solution with advanced filtering, wishlist functionality, and integrated inventory management.",
      tags: ["E-commerce", "Shopify", "Custom Development"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: ["150% increase in online sales", "45% higher conversion rate", "65% mobile traffic improvement"],
      url: "#"
    },
    {
      id: 4,
      title: "TechCorp Website",
      category: "Web Development",
      client: "Technology Company",
      description: "Corporate website redesign with advanced features and CMS integration.",
      fullDescription: "TechCorp needed a complete website overhaul that would position them as industry leaders. We developed a modern, responsive website with custom animations, integrated blog, career portal, and advanced contact forms. The site was built with performance and SEO optimization in mind.",
      tags: ["React", "CMS", "SEO Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: ["200% increase in organic traffic", "85% faster page load times", "50% more contact form submissions"],
      url: "#"
    },
    {
      id: 5,
      title: "Wellness Co. Rebrand",
      category: "Branding",
      client: "Health & Wellness",
      description: "Brand refresh and digital strategy for a wellness company.",
      fullDescription: "Wellness Co. sought to modernize their brand to appeal to a younger, health-conscious demographic. We developed a fresh visual identity, updated their messaging strategy, and created a comprehensive digital presence across web and social media platforms.",
      tags: ["Rebranding", "Social Media", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      results: ["300% social media engagement increase", "120% website traffic growth", "80% brand recall improvement"],
      url: "#"
    },
    {
      id: 6,
      title: "RestaurantPro Dashboard",
      category: "UX/UI Design",
      client: "Restaurant Chain",
      description: "Management dashboard for restaurant operations and analytics.",
      fullDescription: "RestaurantPro needed a comprehensive dashboard that would give restaurant managers real-time insights into their operations. We designed an intuitive interface that displays key metrics, inventory levels, staff scheduling, and customer feedback in an easy-to-understand format.",
      tags: ["Dashboard Design", "Data Visualization", "Web App"],
      image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=800&h=600&fit=crop",
      results: ["35% reduction in management time", "90% user adoption rate", "25% operational efficiency increase"],
      url: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white neon-glow mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-in-left">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "secondary" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-smooth"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-smooth">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="font-heading text-2xl">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-heading text-lg font-semibold mb-2">Project Overview</h3>
                              <p className="text-muted-foreground mb-4">{project.fullDescription}</p>
                              
                              <div className="mb-4">
                                <h4 className="font-heading font-semibold mb-2">Client:</h4>
                                <p className="text-muted-foreground">{project.client}</p>
                              </div>
                              
                              <div>
                                <h4 className="font-heading font-semibold mb-2">Services:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary">{tag}</Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-heading text-lg font-semibold mb-2">Results</h3>
                              <ul className="space-y-2">
                                {project.results.map((result, index) => (
                                  <li key={index} className="flex items-center text-muted-foreground">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    {result}
                                  </li>
                                ))}
                              </ul>
                              
                              <Button variant="accent" className="mt-6 w-full" asChild>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Visit Project
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.client}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your next project.
          </p>
          <Button variant="hero" size="xl" asChild>
            <ScrollingLink to="/contact">Start Your Project</ScrollingLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;