import React from 'react';
import myPortrait from "../assets/image.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-charcoal dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Editorial Spread Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Portrait with Frame */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Decorative Frames */}
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 to-lilac/30 rounded-2xl transform rotate-2"></div>
              <div className="absolute -inset-3 bg-gradient-to-tl from-mint/30 to-gold/30 rounded-2xl transform -rotate-1"></div>

              {/* Portrait */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform rotate-1">
                <img
                  src={myPortrait}
                  alt="Portrait of Komal, a developer and designer"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-playfair text-lg font-semibold text-charcoal dark:text-white">
                    Komal 👋
                  </p>
                  <p className="font-outfit text-sm text-charcoal/70 dark:text-white/70">
                    Developer & Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Article Text */}
          <div className="flex flex-col justify-center">
            {/* Pull Quote */}
            <div className="mb-6 p-6 bg-gradient-to-r from-lilac/10 to-mint/10 dark:from-purple-500/10 dark:to-teal-500/10 rounded-lg border-l-4 border-gold">
              <blockquote className="font-playfair text-xl lg:text-2xl font-semibold text-charcoal dark:text-white italic">
                "Code is where creativity meets logic."
              </blockquote>
            </div>

            {/* Main Text */}
            <div className="space-y-4 font-outfit text-charcoal/80 dark:text-white/80 leading-relaxed">
              <p className="text-base lg:text-lg">
                Welcome to my digital playground! I'm a passionate developer and designer who loves crafting
                experiences that look stunning and work seamlessly. What started as simple curiosity quickly
                grew into a genuine love for turning ideas into digital realities.
              </p>

              <p className="text-base lg:text-lg">
                Currently studying and diving deeper into the world of web development, I've built everything
                from sleek e-commerce platforms to interactive web apps. Each project pushes me to learn, adapt,
                and explore the endless creativity that code allows.
              </p>

              <p className="text-base lg:text-lg">
                When I'm not coding, you'll probably find me exploring design trends, experimenting with new tools,
                or sketching the next big idea that challenges my skills. I believe the most impactful digital
                experiences happen when technical precision meets thoughtful design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-mint/30 dark:border-purple-500/20">
              <div className="text-center">
                <div className="font-playfair text-2xl lg:text-3xl font-bold text-gold">15+</div>
                <div className="font-outfit text-xs lg:text-sm text-charcoal/70 dark:text-white/70 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl lg:text-3xl font-bold text-mint dark:text-teal-400">2+</div>
                <div className="font-outfit text-xs lg:text-sm text-charcoal/70 dark:text-white/70 mt-1">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl lg:text-3xl font-bold text-lilac dark:text-purple-400">∞</div>
                <div className="font-outfit text-xs lg:text-sm text-charcoal/70 dark:text-white/70 mt-1">Curiosity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;