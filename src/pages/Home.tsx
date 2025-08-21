import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background tech grid */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Hero scanning effect */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-tech-scan opacity-50"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero logo/emblem */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center relative animate-hero-float">
              <Shield className="w-16 h-16 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-glow-pulse"></div>
            </div>
          </div>

          {/* Main hero text */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4">
              <span className="hero-text">AVENGERS</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground/90 mb-2">
              ASSEMBLE
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Earth's Mightiest Portfolio. Showcasing heroic projects, legendary skills, 
              and the power to save your next development mission.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in">
            <Button asChild variant="hero" size="lg" className="font-orbitron font-bold">
              <Link to="/projects" className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                View Missions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="hologram" size="lg" className="font-orbitron font-bold">
              <Link to="/about" className="flex items-center gap-2">
                Learn Origin Story
              </Link>
            </Button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            {[
              { label: "Missions Completed", value: "50+", icon: "🎯" },
              { label: "Cities Saved", value: "12", icon: "🌆" },
              { label: "Team Members", value: "∞", icon: "👥" }
            ].map((stat, index) => (
              <div key={index} className="hologram rounded-xl p-6 group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-orbitron font-bold hero-text mb-1">{stat.value}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Home;