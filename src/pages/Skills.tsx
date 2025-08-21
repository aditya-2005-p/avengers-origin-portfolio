import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, Shield, Hammer, Gem, Brain, Heart,
  Code, Database, Palette, Wrench, Globe, Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Iron Man's Arsenal",
      subtitle: "Frontend Technologies",
      icon: Zap,
      color: "from-primary to-warning",
      skills: [
        { name: "React/Next.js", level: 95, description: "Building dynamic UIs with precision" },
        { name: "TypeScript", level: 90, description: "Type-safe development excellence" },
        { name: "Tailwind CSS", level: 88, description: "Crafting beautiful, responsive designs" },
        { name: "Three.js/WebGL", level: 75, description: "Creating immersive 3D experiences" }
      ]
    },
    {
      title: "Captain's Shield",
      subtitle: "Backend & Infrastructure", 
      icon: Shield,
      color: "from-secondary to-primary",
      skills: [
        { name: "Node.js/Express", level: 85, description: "Reliable server-side architecture" },
        { name: "PostgreSQL/MongoDB", level: 82, description: "Robust data management" },
        { name: "AWS/Docker", level: 78, description: "Scalable cloud deployment" },
        { name: "GraphQL/REST APIs", level: 88, description: "Efficient data communication" }
      ]
    },
    {
      title: "Hulk's Strength",
      subtitle: "Development Tools",
      icon: Hammer,
      color: "from-success to-accent",
      skills: [
        { name: "Git/GitHub", level: 92, description: "Version control mastery" },
        { name: "Webpack/Vite", level: 80, description: "Build optimization expertise" },
        { name: "Jest/Cypress", level: 85, description: "Comprehensive testing strategies" },
        { name: "CI/CD Pipelines", level: 75, description: "Automated deployment workflows" }
      ]
    },
    {
      title: "Doctor Strange's Wisdom",
      subtitle: "Problem Solving & Architecture",
      icon: Gem,
      color: "from-accent to-secondary",
      skills: [
        { name: "System Design", level: 88, description: "Architecting scalable solutions" },
        { name: "Algorithm Design", level: 82, description: "Optimal problem-solving approaches" },
        { name: "Performance Optimization", level: 85, description: "Making applications lightning fast" },
        { name: "Security Best Practices", level: 80, description: "Protecting against vulnerabilities" }
      ]
    }
  ];

  const superPowers = [
    { name: "Leadership", icon: Users, color: "text-primary" },
    { name: "Innovation", icon: Brain, color: "text-secondary" },
    { name: "Adaptability", icon: Heart, color: "text-success" },
    { name: "Communication", icon: Globe, color: "text-warning" },
    { name: "Problem Solving", icon: Gem, color: "text-accent" },
    { name: "Continuous Learning", icon: Zap, color: "text-primary" }
  ];

  const tools = [
    "VSCode", "Figma", "Notion", "Slack", "Jira", "Postman",
    "Chrome DevTools", "GitHub Actions", "Vercel", "Netlify"
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-black hero-text mb-4">
            POWERS & ARSENAL
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Every hero needs their unique abilities and trusted tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="hologram rounded-2xl p-8 animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-orbitron font-bold mb-1">{category.title}</h2>
                  <p className="text-foreground/70">{category.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-sm font-bold text-accent">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-muted/50" 
                    />
                    <p className="text-sm text-foreground/70">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Super Powers (Soft Skills) */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-8 hero-text">
            SUPER POWERS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {superPowers.map((power, index) => (
              <div key={index} className="hologram rounded-xl p-4 text-center group hover:scale-105 transition-all duration-300">
                <power.icon className={`w-8 h-8 mx-auto mb-2 ${power.color}`} />
                <span className="text-sm font-medium">{power.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-8 hero-text">
            TOOLS OF THE TRADE
          </h2>
          <div className="hologram rounded-2xl p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Power Level Indicator */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="hologram rounded-xl p-8 max-w-md mx-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center animate-glow-pulse">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold mb-2 hero-text">POWER LEVEL</h3>
            <div className="text-4xl font-black text-warning mb-2">OVER 9000!</div>
            <p className="text-sm text-foreground/70">And constantly growing stronger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;