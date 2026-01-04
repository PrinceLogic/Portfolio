import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ecofinds E-Commerce Platform',
      description: 'A full-stack MERN e-commerce application with payment integration, user authentication, and admin dashboard. Features include product management, cart functionality, and order tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      gradient: 'from-cyan-500 to-blue-600',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Things I've built along my journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-colors group/icon"
                    >
                      <Github className="w-5 h-5 text-gray-300 group-hover/icon:text-black" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-lg hover:bg-cyan-500 transition-colors group/icon"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-300 group-hover/icon:text-black" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`h-2 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;