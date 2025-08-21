import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Home, User, Folder, Zap, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Assemble', icon: Shield },
    { path: '/about', label: 'Origin', icon: User },
    { path: '/projects', label: 'Missions', icon: Folder },
    { path: '/skills', label: 'Powers', icon: Zap },
    { path: '/contact', label: 'S.H.I.E.L.D.', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-accent/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="font-orbitron font-bold text-xl hero-text">AVENGERS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/20 text-primary glow-border'
                      : 'text-foreground/70 hover:text-foreground hover:bg-accent/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-accent/20 text-foreground">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;