import React from 'react';
import { Code2, Rocket, Cloud } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Experience in developing complete applications using MongoDB, Express, React, and Node.js'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Applications',
      description: 'Building intelligent, scalable, and responsive web applications with modern architecture'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Deployment',
      description: 'Learning and implementing deployment and scaling strategies on cloud platforms'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm <span className="text-cyan-400 font-semibold">Prince Kahar</span>, a passionate B.Tech IT student at Uka Tarsadia University with a stellar CGPA of 9.00. Currently pursuing my degree from 2024 to 2028.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                My journey in technology is driven by a deep interest in developing intelligent, scalable, and responsive web applications. I thrive on the challenge of integrating seamless User Interfaces built with React.js with robust backend systems powered by Node.js.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm constantly exploring new technologies and best practices in cloud deployment and application scaling, always eager to learn and grow as a developer.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg text-black">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;