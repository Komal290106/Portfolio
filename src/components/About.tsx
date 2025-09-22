import React from 'react';
import aboutIllustration from "../assets/about_bg.png";

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

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Illustration */}
<div className="relative flex justify-center">
 <div className="relative flex justify-center">
  {/* Background Blob */}
  <div
    className="
      absolute w-72 h-72 rounded-full blur-3xl 
      bg-gradient-to-tr from-mint/40 to-lilac/40 
      dark:from-mint/20 dark:to-lilac/20
    "
  ></div>

  {/* Ground Shadow */}
  <div className="absolute bottom-0 w-40 h-8 bg-black/20 dark:bg-black/40 rounded-full blur-xl"></div>

  {/* Robot */}
  <img
    src={aboutIllustration}
    alt="Creative developer illustration"
    className="relative w-full max-w-lg lg:max-w-xl h-auto"
  />
</div>

</div>


          {/* Right: Article Text */}
          <div className="flex flex-col justify-center">
            {/* Pull Quote */}
            <div className="mb-6 p-6 bg-gradient-to-r from-lilac/10 to-mint/10 dark:from-purple-500/10 dark:to-teal-500/10 rounded-lg border-l-4 border-gold">
              <blockquote className="font-playfair text-xl lg:text-2xl font-semibold text-charcoal dark:text-white italic">
                "Code is my canvas, design is my color."
              </blockquote>
            </div>

            {/* Main Text */}
            <div className="space-y-4 font-outfit text-charcoal/80 dark:text-white/80 leading-relaxed">
              <p className="text-base lg:text-lg">
                Hi, I’m Komal! I love blending creativity with code to bring ideas
                to life on the web. For me, building isn’t just about function—it’s
                about making things that feel good to use and fun to explore.
              </p>

              <p className="text-base lg:text-lg">
                I’ve been learning and experimenting in web dev for a little over a year now,
                and I’ve worked on projects ranging from simple apps to full websites.
                Each project is like a new adventure where I get to try, break, and create.
              </p>

              <p className="text-base lg:text-lg">
                Outside the screen, you’ll probably catch me playing with design ideas,
                sketching random concepts, or chasing the next “aha!” moment that inspires my work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-mint/30 dark:border-purple-500/20">
              <div className="text-center">
                <div className="font-playfair text-2xl lg:text-3xl font-bold text-gold">10+</div>
                <div className="font-outfit text-xs lg:text-sm text-charcoal/70 dark:text-white/70 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl lg:text-3xl font-bold text-mint dark:text-teal-400">1+</div>
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
