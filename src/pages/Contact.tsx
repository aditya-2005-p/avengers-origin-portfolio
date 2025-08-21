import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { 
  Shield, Mail, Phone, MapPin, Send, 
  Github, Linkedin, Twitter, ExternalLink 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Transmitted!",
      description: "Your message has been received by S.H.I.E.L.D. We'll respond within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Secure Email",
      value: "hero@avengers.com",
      description: "Encrypted communication channel"
    },
    {
      icon: Phone,
      label: "Emergency Hotline",
      value: "+1 (555) AVENGERS",
      description: "24/7 response team"
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Avengers Compound, NY",
      description: "Where heroes assemble"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "hover:text-secondary" },
    { icon: Twitter, label: "Twitter", url: "#", color: "hover:text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-orbitron font-black hero-text mb-4">
            S.H.I.E.L.D. COMMUNICATION HUB
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Secure communication for mission briefings, collaborations, and emergency alerts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="hologram border-none p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-orbitron font-bold mb-2">
                  <span className="hero-text">CLASSIFIED</span> MESSAGE
                </h2>
                <p className="text-foreground/70">
                  Send a secure transmission to initiate contact
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-accent font-medium">
                      Agent Name
                    </Label>
                    <Input 
                      id="name"
                      placeholder="Your codename..."
                      required
                      className="bg-background/50 border-accent/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-accent font-medium">
                      Secure Channel
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@domain.com"
                      required
                      className="bg-background/50 border-accent/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-accent font-medium">
                    Mission Type
                  </Label>
                  <Input 
                    id="subject"
                    placeholder="Project collaboration, hiring, or emergency?"
                    required
                    className="bg-background/50 border-accent/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-accent font-medium">
                    Mission Briefing
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder="Provide details about your mission, project requirements, or how we can save the world together..."
                    rows={6}
                    required
                    className="bg-background/50 border-accent/30 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="stark" 
                  size="lg" 
                  className="w-full font-orbitron font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Transmitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Transmission
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Methods */}
            <Card className="hologram border-none p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-secondary">
                COMMUNICATION CHANNELS
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{method.label}</h4>
                      <p className="text-accent font-medium mb-1">{method.value}</p>
                      <p className="text-sm text-foreground/70">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="hologram border-none p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-success">
                SOCIAL NETWORKS
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Response Time */}
            <Card className="hologram border-none p-8">
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-warning">
                RESPONSE PROTOCOL
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm">Emergency missions: Immediate response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                  <span className="text-sm">Project inquiries: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm">General questions: Within 48 hours</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="hologram rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4">Ready to Assemble?</h3>
            <p className="text-foreground/70 mb-6">
              Whether you need a hero for your next project or want to join the team, 
              let's create something extraordinary together.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="hero" className="font-orbitron font-bold">
                <ExternalLink className="w-4 h-4" />
                Schedule a Call
              </Button>
              <Button variant="hologram" className="font-orbitron font-bold">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;