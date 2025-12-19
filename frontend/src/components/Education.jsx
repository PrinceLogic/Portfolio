import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-emerald-500 hidden md:block" />

            {/* Education Card */}
            <div className="relative mb-8">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">Bachelor of Technology</h3>
                        <p className="text-gray-400">Information Technology</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold">Uka Tarsadia University</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <span>2024 - 2028</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-cyan-400" />
                        <span className="font-bold">CGPA: 9.00 / 10.00</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Focus Areas:</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Full Stack Web Development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Data Structures & Algorithms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Database Management Systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Cloud Computing & Deployment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full border-4 border-black animate-pulse" />
                </div>

                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                    <h4 className="text-xl font-bold text-cyan-400 mb-4">Academic Excellence</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Maintaining a stellar CGPA of 9.00 while actively working on real-world projects and staying updated with latest technologies in web development.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-gray-700 rounded-lg">
                        <p className="text-3xl font-bold text-cyan-400">9.00</p>
                        <p className="text-gray-400 text-sm mt-1">CGPA</p>
                      </div>
                      <div className="text-center p-4 bg-gray-700 rounded-lg">
                        <p className="text-3xl font-bold text-emerald-400">2024-28</p>
                        <p className="text-gray-400 text-sm mt-1">Duration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;