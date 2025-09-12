import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import netflixImage from '../assets/netflix_clone.png';
import uamoreImage from '../assets/uamore.png';
import movieBookingImage from '../assets/movie_booking.png';
import dashboardImage from '../assets/dashboard.png';
import masalaTalesImage from '../assets/masala_tales.png';
import codeSplineImage from '../assets/codespline.png';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'frontend' | 'fullstack' | 'experiments';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Netflix Clone',
      description:
        'A responsive streaming platform with Firebase auth and dynamic UI using React.',
      category: 'fullstack',
      tags: ['React', 'Firebase', 'Vite', 'CSS'],
      image: netflixImage,
      githubUrl: 'https://github.com/Komal290106/Netflix_Clone',
    },
    {
      id: 2,
      title: 'Uamore Perfume Store',
      description:
        'Minimalist e-commerce site showcasing luxury perfumes with soft pastels and smooth animations.',
      category: 'frontend',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      image: uamoreImage,
      liveUrl: 'https://uamore-phi.vercel.app/',
      githubUrl: 'https://github.com/Komal290106/Uamore',
    },
    {
      id: 3,
      title: 'Movie Booking App',
      description:
        'Full-stack booking system with seat selection and ticket management.',
      category: 'fullstack',
      tags: ['React', 'TypeScript', 'Tailwind', 'Express'],
      image: movieBookingImage,
    },
    {
      id: 4,
      title: 'Student Dashboard',
      description: 'Frontend dashboard for student management and progress tracking.',
      category: 'frontend',
      tags: ['React', 'TypeScript', 'Tailwind'],
      image: dashboardImage,
      liveUrl: 'https://dashboard-gamma-gules-64.vercel.app/',
      githubUrl: 'https://github.com/Komal290106/Dashboard',
    },
    {
      id: 5,
      title: 'Masala Tales',
      description:
        'Frontend website for a restaurant with interactive menu and booking features.',
      category: 'frontend',
      tags: ['React', 'TypeScript', 'Tailwind'],
      image: masalaTalesImage,
    },
    {
      id: 6,
      title: 'CodeSpline',
      description:
        'Responsive 3D landing page with interactive elements and modern animations.',
      category: 'experiments',
      tags: ['React', 'TypeScript', 'Spline 3D', 'Tailwind'],
      image: codeSplineImage,
      liveUrl: 'https://code-spline-rouge.vercel.app',
      githubUrl: 'https://github.com/Komal290106/CodeSpline',
    },
    // Placeholder projects
    // {
    //   id: 7,
    //   title: 'Project Placeholder 1',
    //   description: 'Description will be added once hosted.',
    //   category: 'frontend',
    //   tags: ['React', 'Tailwind'],
    //   image: 'assets/placeholder.png',
    // },
    // {
    //   id: 8,
    //   title: 'Project Placeholder 2',
    //   description: 'Description will be added once hosted.',
    //   category: 'fullstack',
    //   tags: ['React', 'Node', 'Tailwind'],
    //   image: 'assets/placeholder.png',
    // },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'experiments', label: 'Experiments' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-charcoal dark:text-white mb-4">
            Projects Gallery
          </h2>
          <p className="font-outfit text-xl text-charcoal/80 dark:text-white/70">
            A curated collection of my creative work
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-outfit font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-gold to-orange-400 text-white shadow-lg'
                  : 'bg-mint/30 dark:bg-purple-500/20 text-charcoal dark:text-white hover:bg-mint/40 dark:hover:bg-purple-500/30'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-white bg-gradient-to-r from-gold to-orange-400 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <div className="p-3 rounded-full text-white bg-gray-400/30 flex items-center justify-center cursor-not-allowed">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-lilac-400 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    ) : (
                      <div className="p-3 rounded-full text-white bg-gray-400/30 flex items-center justify-center cursor-not-allowed">
                        <Github className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-outfit text-charcoal/80 dark:text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-mint/30 text-emerald-700 dark:bg-teal-500/10 dark:text-teal-400 text-xs font-outfit rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
