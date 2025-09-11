import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Branding */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">KOMAL</h3>
            <p className="font-outfit text-white/70 leading-relaxed">
              Digital creator passionate about building beautiful, 
              functional web experiences that make a difference.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block font-outfit text-white/70 hover:text-gold transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h4 className="font-outfit font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2">
              <p className="font-outfit text-white/70">dhillonkomal59@gmail.com</p>
              <p className="font-outfit text-white/70">Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="font-outfit text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} KOMAL KAUR DHILLON. All rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 font-outfit text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;