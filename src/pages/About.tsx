import { Shield, Code, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-black hero-text mb-4">
            ORIGIN STORY
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Every hero has a beginning. This is mine.
          </p>
        </div>

        {/* Origin story sections */}
        <div className="space-y-16">
          {/* The Beginning */}
          <div className="hologram rounded-2xl p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-primary">The Beginning</h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Like Tony Stark in his cave, my journey began with curiosity and determination. 
              From building my first "Hello World" to architecting complex systems, 
              every line of code has been a step toward becoming the developer I am today.
            </p>
          </div>

          {/* Powers & Abilities */}
          <div className="hologram rounded-2xl p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-success to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-success">Powers & Abilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-warning mb-3">Frontend Mastery</h3>
                <p className="text-foreground/80">
                  Like Spider-Man's web-slinging, I craft seamless user experiences 
                  with React, TypeScript, and modern CSS frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-3">Backend Strength</h3>
                <p className="text-foreground/80">
                  With the reliability of Captain America's shield, I build robust 
                  APIs and database systems that never fail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">Problem Solving</h3>
                <p className="text-foreground/80">
                  Like Doctor Strange manipulating reality, I bend complex problems 
                  to my will with creative solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Team Leadership</h3>
                <p className="text-foreground/80">
                  Leading teams like Nick Fury assembles the Avengers, bringing 
                  together diverse talents for epic results.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="hologram rounded-2xl p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-warning to-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-orbitron font-bold text-warning">Mission Statement</h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              "With great power comes great responsibility." My mission is to use technology 
              as a force for good, creating digital solutions that make the world a better place. 
              Whether it's building accessible applications, mentoring junior developers, or 
              contributing to open source, I believe in using my abilities to help others.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {[
              {
                title: "Innovation",
                description: "Always pushing boundaries like Tony Stark",
                color: "from-primary to-warning"
              },
              {
                title: "Integrity", 
                description: "Standing for what's right like Captain America",
                color: "from-secondary to-primary"
              },
              {
                title: "Growth",
                description: "Constantly evolving like the Hulk's strength",
                color: "from-success to-accent"
              }
            ].map((value, index) => (
              <div key={index} className="hologram rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;