import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfetti(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'dhillonkomal59@gmail.com',
      color: 'from-mint to-teal-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Available Remotely',
      color: 'from-lilac to-purple-400'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within 48 hours',
      color: 'from-gold to-orange-400'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-mint/5 to-lilac/10 dark:from-charcoal dark:via-purple-900/10 dark:to-teal-900/5"></div>
      
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-bounce ${
                i % 3 === 0 ? 'bg-mint' : i % 3 === 1 ? 'bg-lilac' : 'bg-gold'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-charcoal dark:text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="font-outfit text-xl text-charcoal/60 dark:text-white/60">
            Ready to bring your ideas to life? Let's start a conversation.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-charcoal dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="font-outfit text-lg text-charcoal/70 dark:text-white/70 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something extraordinary together.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-charcoal dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="font-outfit text-charcoal/70 dark:text-white/70">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

{/* Social Links */}
<div className="pt-8 border-t border-mint/20 dark:border-purple-500/20">
  <h4 className="font-outfit font-semibold text-charcoal dark:text-white mb-4">
    Connect with me
  </h4>
  <div className="flex space-x-4">
    <a
      href="https://github.com/Komal290106"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-4 bg-gradient-to-r from-mint to-teal-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
    >
      <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </a>
    <a
      href="https://www.linkedin.com/in/komal-kaur-dhillon-59149a330"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-4 bg-gradient-to-r from-lilac to-purple-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
    >
      <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </a>
  </div>
</div>

          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-mint/20 via-lilac/20 to-gold/20 rounded-2xl transform rotate-1"></div>
            
            <form onSubmit={handleSubmit} className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block font-outfit font-medium text-charcoal dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-outfit font-medium text-charcoal dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-outfit font-medium text-charcoal dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gold to-orange-400 text-white font-outfit font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Thank You Message */}
        {showConfetti && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4 transform animate-bounce">
              <div className="w-16 h-16 bg-gradient-to-r from-mint to-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-white mb-2">
                Thank You!
              </h3>
              <p className="font-outfit text-charcoal/70 dark:text-white/70">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;