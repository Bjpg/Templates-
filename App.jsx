import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import { 
  Code, 
  Palette, 
  Smartphone,
  Database,
  Globe
} from 'lucide-react';

const App = () => {
  const skills = [
    { name: 'React', level: 95, icon: Code },
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'UI/UX Design', level: 85, icon: Palette },
    { name: 'Node.js', level: 80, icon: Database },
    { name: 'Mobile Dev', level: 75, icon: Smartphone },
    { name: 'Web Design', level: 88, icon: Globe }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React, Node.js e MongoDB. Interface moderna e responsiva.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Modern e-commerce platform with shopping cart and payment integration',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com drag & drop, notificações e colaboração em tempo real.',
      tech: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      image: 'Task management dashboard with kanban board and team collaboration',
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Site de portfólio responsivo com animações suaves e design moderno para um cliente.',
      tech: ['React', 'Framer Motion', 'TailwindCSS'],
      image: 'Creative portfolio website with smooth animations and modern design',
      github: '#',
      live: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 scroll-smooth">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;