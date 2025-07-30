import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import cyberTeamOffice from "@/assets/cyber-team-office.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Mission-Driven",
      description: "We turn innovative ideas into digital experiences that drive real business results."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-lasting partnerships with every client."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-secondary" />,
      title: "Innovation First",
      description: "We stay ahead of trends to deliver cutting-edge solutions for tomorrow's challenges."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Quality Assured",
      description: "Every project meets our rigorous standards for excellence and performance."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "With 8+ years in digital design, Sarah leads our creative vision and ensures every project tells a compelling story.",
      skills: ["Brand Strategy", "UX Design", "Creative Leadership"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      bio: "Marcus transforms designs into powerful web experiences using the latest technologies and best practices.",
      skills: ["React", "Node.js", "Cloud Architecture"]
    },
    {
      name: "Elena Kowalski",
      role: "Marketing Strategist",
      bio: "Elena drives digital growth through data-driven marketing strategies that connect brands with their audiences.",
      skills: ["SEO", "Analytics", "Content Strategy"]
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded NextLevelDesign with a vision to transform digital experiences" },
    { year: "2020", event: "Launched our first major e-commerce platform, reaching 10M+ users" },
    { year: "2021", event: "Expanded to serve Fortune 500 companies and international clients" },
    { year: "2022", event: "Won 'Digital Agency of the Year' award for innovative design solutions" },
    { year: "2023", event: "Achieved 98% client satisfaction rate and 150+ successful projects" },
    { year: "2024", event: "Pioneering AI-powered design tools and sustainable web practices" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 gradient-cyber overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in neon-glow">
            About NextLevelDesign
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto animate-slide-in-left">
            We're a team of passionate designers, developers, and strategists dedicated to creating digital experiences that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 neon-glow">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future of digital experiences through innovation, collaboration, and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-neon transition-cyber glass-card">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 neon-glow">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our diverse team brings together expertise from design, development, and digital marketing to create exceptional results for our clients.
              </p>
              <Button variant="glass" size="lg">
                Join Our Team
              </Button>
            </div>
            <div className="relative">
              <img 
                src={cyberTeamOffice}
                alt="NextLevelDesign team at work" 
                className="rounded-lg shadow-neon w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-neon transition-cyber glass-card">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-1 text-primary neon-glow">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 neon-glow">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startup to industry leader, here's how we've grown and evolved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0 group">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="font-heading font-bold text-secondary text-lg group-hover:neon-glow">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 mr-8 group-hover:animate-neon-pulse shadow-neon"></div>
                <div className="flex-1">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;