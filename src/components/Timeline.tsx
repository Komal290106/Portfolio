import React, { useState } from 'react';
import { Calendar, Code, Palette, Rocket } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
}

const Timeline: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Started Coding Journey',
    description: 'Discovered HTML, CSS, and JavaScript as a first-year CSE student',
    details: [
      'Built a countdown timer as my first project',
      'Learned the fundamentals of web development',
      'Created simple interactive UI components'
    ],
    icon: <Code className="w-6 h-6" />,
    color: 'from-mint to-teal-400'
  },
  {
    year: '2025',
    title: 'Front-End Projects',
    description: 'Dove into React, building interactive web applications and UI experiments',
    details: [
      'Uamore – luxury perfume e-commerce website',
      'Masala Tales – front-end food blog site',
      'Student Dashboard – front-end project with React',
      'CodeSpline – interactive 3D landing page with React and Spline'
    ],
    icon: <Palette className="w-6 h-6" />,
    color: 'from-lilac to-purple-400'
  },
  {
    year: '2025 - Present',
    title: 'Full-Stack Development',
    description: 'Expanding skills to backend and full-stack projects',
    details: [
      'Netflix Clone – full-stack project using React + Firebase',
      'Nimbus Keyboards – premium landing page with animations and 3D effects',
      'Learning APIs, database connections, and deployment strategies'
    ],
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-gold to-orange-400'
  }
];


  return (
    <section id="timeline" className="py-20 lg:py-32 bg-gradient-to-b from-cream to-mint/5 dark:from-charcoal dark:to-purple-900/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-charcoal dark:text-white mb-4">
            My Journey
          </h2>
          <p className="font-outfit text-xl text-charcoal/60 dark:text-white/60">
            From curious beginner to passionate developer
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mint via-lilac to-gold transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-charcoal shadow-lg border-4 border-gold flex items-center justify-center z-10 transition-all duration-300 hover:scale-110">
                  <div className={`text-white bg-gradient-to-r ${item.color} rounded-full p-2`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-32 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                    hoveredItem === index ? 'shadow-2xl' : ''
                  }`}>
                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm mb-4`}>
                      {item.year}
                    </div>

                    {/* Content */}
                    <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-outfit text-charcoal/70 dark:text-white/70 mb-4">
                      {item.description}
                    </p>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      hoveredItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                        <h4 className="font-outfit font-semibold text-charcoal dark:text-white mb-2">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="font-outfit text-sm text-charcoal/60 dark:text-white/60 flex items-start">
                              <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default Timeline;