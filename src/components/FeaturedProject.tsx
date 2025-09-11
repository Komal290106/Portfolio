import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import videoSrc from '../assets/video.mp4';

const FeaturedProject: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-mint/5 to-lilac/5 dark:from-purple-900/5 dark:to-teal-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-charcoal dark:text-white mb-4">
            Featured Project
          </h2>
          <p className="font-outfit text-xl text-charcoal/60 dark:text-white/60">
            Uamore - Luxury Perfume E-commerce Experience
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Video */}
        <div className="flex justify-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full lg:w-[850px] h-[450px]">
            <video
              src={videoSrc}
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gold/10 to-transparent pointer-events-none rounded-2xl"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="font-outfit text-sm text-charcoal/60 dark:text-white/60">
                Full project demo – watch how the application flows
              </p>
            </div>
          </div>
        </div>

        {/* Description & Features below video */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Description */}
          <div className="flex-1 space-y-6">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal dark:text-white">
              Uamore – Luxury Perfume Ecommerce
            </h3>
            <p className="font-outfit text-lg text-charcoal/80 dark:text-white/80 leading-relaxed">
              Uamore is a modern, minimalist ecommerce website for a premium fragrance brand. 
              It showcases handcrafted, chemical-free, and cruelty-free perfumes through a soft pastel 
              aesthetic and smooth animations, creating an elegant and user-friendly shopping experience.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://uamore-phi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-gold to-orange-400 text-white px-6 py-3 rounded-lg font-outfit font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live</span>
              </a>
              <a
                href="https://github.com/Komal290106/Uamore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-mint/20 dark:bg-teal-500/20 text-mint dark:text-teal-400 px-6 py-3 rounded-lg font-outfit font-medium hover:bg-mint/30 dark:hover:bg-teal-500/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex-1 space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-charcoal dark:text-white mb-3">
              Key Features:
            </h4>
            <ul className="space-y-3">
              {[
                'Elegant product collections with detailed perfume cards',
                'Responsive design across all devices',
                'Smooth animations and micro-interactions using Framer Motion',
                'Pastel color palette emphasizing luxury and elegance',
                'Footer navigation with About, Contact, and other links'
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-outfit text-charcoal/70 dark:text-white/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
