import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-mint/10 to-lilac/10 dark:from-charcoal dark:via-purple-900/20 dark:to-teal-900/20 animate-gradient-shift"></div>
        
        {/* Floating Background Text */}
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
          <div 
            className="absolute text-[20vw] font-playfair font-black text-charcoal dark:text-white select-none"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px)`,
              left: '10%',
              top: '20%'
            }}
          >
            KOMAL
          </div>
          <div 
            className="absolute text-[15vw] font-playfair font-black text-mint dark:text-purple-500 select-none"
            style={{ 
              transform: `translateY(${scrollY * -0.2}px)`,
              right: '5%',
              bottom: '30%'
            }}
          >
            CREATOR
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto">
        {/* Magazine-style cutout */}
        <div className="inline-block animate-slide-in-up">
          <div className="relative">
            <h1 className="font-playfair font-black text-6xl sm:text-8xl lg:text-9xl text-charcoal dark:text-white mb-6 tracking-tight">
              KOMAL
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-lilac/20 -rotate-1 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-slide-in-up animation-delay-200">
          <p className="font-outfit text-xl sm:text-2xl lg:text-3xl text-charcoal dark:text-white/90 max-w-4xl mx-auto leading-relaxed">
            Crafting digital experiences with{' '}
            <span className="text-gold font-semibold">design</span>,{' '}
            <span className="text-mint dark:text-teal-400 font-semibold">code</span>, and{' '}
            <span className="text-lilac dark:text-purple-400 font-semibold">curiosity</span>.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-8 animate-fade-in animation-delay-400">
          <div className="w-16 h-1 bg-gradient-to-r from-mint to-lilac rounded-full"></div>
          <div className="w-8 h-1 bg-gold rounded-full"></div>
          <div className="w-12 h-1 bg-gradient-to-r from-lilac to-gold rounded-full"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="font-outfit text-sm text-charcoal/60 dark:text-white/60 mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6 text-charcoal/60 dark:text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;