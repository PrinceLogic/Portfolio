import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Redux', level: 75 }
      ]
    },
    {
      category: 'Backend',
      color: 'from-emerald-500 to-green-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Authentication', level: 80 }
      ]
    },
    {
      category: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 80 },
        { name: 'MySQL', level: 70 }
      ]
    },
    {
      category: 'Tools & Others',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'NPM/Yarn', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;