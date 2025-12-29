import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="text-cyan-400 text-lg font-mono mb-4 block animate-slide-down">
              Hi, my name is
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-slide-up">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Prince Kahar
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 animate-slide-up animation-delay-200">
            MERN Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            Aspiring Software Engineer | Building Scalable Web Applications
          </p>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto animate-slide-up animation-delay-600">
            B.Tech IT Student passionate about creating intelligent, scalable, and responsive web applications.
          </p>
          
          <div className="flex items-center justify-center gap-6 pt-8 animate-slide-up animation-delay-800">
            <a
              href="https://github.com/PrinceLogic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-black" />
            </a>
            <a
              href="https://linkedin.com/in/prince-kahar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-black" />
            </a>
            <a
              href="mailto:kaharprince2006@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-black" />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-8 animate-slide-up animation-delay-1000">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black rounded-lg hover:from-cyan-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-200 font-semibold shadow-lg hover:shadow-cyan-500/50"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;