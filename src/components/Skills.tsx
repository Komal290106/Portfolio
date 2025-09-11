import React, { useState, useEffect } from 'react';
import { Code, Palette, Database, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      color: 'from-mint to-teal-400',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-lilac to-purple-400',
      skills: ['Figma', 'Canva', 'Wireframing', 'Prototyping', 'Color Theory', 'Typography']
    },
    {
      title: 'Backend & Database',
      icon: <Database className="w-6 h-6" />,
      color: 'from-gold to-orange-400',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'API Development', 'Authentication']
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-teal-400 to-blue-500',
      skills: ['Git', 'VS Code', 'Vite', 'npm', 'DevTools', 'Performance Optimization']
    }
  ];

  const codeSnippets = [
    'const developer = new Creator();',
    'function buildAmazingThings() {',
    '  return passion + code + design;',
    '}',
    'developer.learn("React");',
    'developer.create("beautiful-ui");',
    'developer.deploy("to-production");'
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (currentSkillIndex < codeSnippets.length) {
      const currentCode = codeSnippets[currentSkillIndex];
      let charIndex = 0;
      
      const typeWriter = () => {
        if (charIndex < currentCode.length) {
          setTypedText(currentCode.substring(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeWriter, 100);
        } else {
          timeout = setTimeout(() => {
            setCurrentSkillIndex((prev) => (prev + 1) % codeSnippets.length);
            setTypedText('');
          }, 2000);
        }
      };
      
      typeWriter();
    }

    return () => clearTimeout(timeout);
  }, [currentSkillIndex]);

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-lilac/5 to-mint/10 dark:from-purple-900/10 dark:to-teal-900/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-charcoal dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="font-outfit text-xl text-charcoal/60 dark:text-white/60">
            The tools and technologies I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Typing Playground */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-outfit text-sm text-gray-400 ml-4">skills.js</span>
            </div>
            <div className="font-mono text-green-400 text-lg">
              <span className="text-purple-400">// </span>
              <span className="text-gray-400">Building the future, one line at a time</span>
              <br />
              <span className="text-gold">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 group/skill"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 transition-transform duration-200`}></div>
                    <span className="font-outfit text-charcoal/80 dark:text-white/80 group-hover/skill:text-charcoal dark:group-hover/skill:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                        i < 4 
                          ? `bg-gradient-to-r ${category.color}`
                          : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                      style={{ animationDelay: `${index * 150 + i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-mint/10 via-lilac/10 to-gold/10 dark:from-teal-500/10 dark:via-purple-500/10 dark:to-yellow-500/10 px-8 py-4 rounded-full border border-mint/20 dark:border-purple-500/20">
            <Zap className="w-6 h-6 text-gold animate-pulse" />
            <span className="font-outfit text-charcoal dark:text-white font-medium">
              Always learning, always growing
            </span>
            <Zap className="w-6 h-6 text-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;