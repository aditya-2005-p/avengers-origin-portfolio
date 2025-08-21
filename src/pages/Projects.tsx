import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Shield, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stark Industries Dashboard",
      description: "A comprehensive admin dashboard with real-time analytics, built with React and TypeScript. Features advanced data visualization and responsive design.",
      tech: ["React", "TypeScript", "D3.js", "Node.js"],
      hero: "Iron Man",
      color: "from-primary to-warning",
      icon: Zap,
      status: "Deployed",
      featured: true
    },
    {
      id: 2,
      title: "S.H.I.E.L.D. Security Platform", 
      description: "Enterprise-grade security management system with authentication, authorization, and threat detection capabilities.",
      tech: ["Next.js", "PostgreSQL", "JWT", "Redis"],
      hero: "Nick Fury",
      color: "from-secondary to-primary",
      icon: Shield,
      status: "In Development"
    },
    {
      id: 3,
      title: "Avengers Communication Hub",
      description: "Real-time messaging platform for team coordination, featuring end-to-end encryption and global scalability.",
      tech: ["Socket.io", "MongoDB", "Express", "React"],
      hero: "Captain America",
      color: "from-success to-accent",
      icon: Heart,
      status: "Deployed",
      featured: true
    },
    {
      id: 4,
      title: "Wakanda Tech Showcase",
      description: "Portfolio website showcasing cutting-edge web technologies with immersive 3D experiences and animations.",
      tech: ["Three.js", "WebGL", "GSAP", "Vite"],
      hero: "Black Panther",
      color: "from-accent to-secondary",
      icon: Zap,
      status: "Deployed"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-black hero-text mb-4">
            MISSION ARCHIVES
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A collection of heroic projects that showcase the power of great code.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={project.id} className="hologram rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-accent font-medium">Inspired by {project.hero}</span>
                      <div className={`inline-block ml-2 px-2 py-1 rounded text-xs font-bold ${project.status === 'Deployed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-orbitron font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="stark" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="hologram" size="sm">
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className={`aspect-video bg-gradient-to-br ${project.color} rounded-xl opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <project.icon className="w-24 h-24 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div key={project.id} className="hologram rounded-xl p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-accent font-medium">Inspired by {project.hero}</span>
                  <div className={`inline-block ml-2 px-2 py-1 rounded text-xs font-bold ${project.status === 'Deployed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                    {project.status}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-accent/20 text-accent rounded text-xs">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-foreground/50 text-xs">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <ExternalLink className="w-3 h-3" />
                  Demo
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 text-xs">
                  <Github className="w-3 h-3" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="hologram rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4">Ready for Your Next Mission?</h3>
            <p className="text-foreground/70 mb-6">
              Let's assemble and create something extraordinary together.
            </p>
            <Button variant="hero" size="lg" className="font-orbitron font-bold">
              Start New Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
