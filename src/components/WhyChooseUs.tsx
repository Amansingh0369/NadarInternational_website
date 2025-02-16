'use client';

import { Leaf, Sparkles, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AOS from 'aos';

export default function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: isMobile ? 50 : 100,
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: false,
    });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable Practices',
      description: 'Working with farmers who follow eco-friendly and sustainable agricultural methods to protect our environment'
    },
    {
      icon: <Sparkles className="w-8 h-8" />, 
      title: 'Premium Quality',
      description: 'Rigorous quality control processes and standards to deliver only the finest, freshest produce to your doorstep'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'International Reach',
      description: 'Advanced logistics network enabling reliable and efficient delivery of fresh produce worldwide'
    }
  ];

  return (
    <section className="py-16 w-full bg-gradient-to-br from-blue-800/80 to-blue-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-orange-500 mx-auto rounded-full"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl text-white"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-white hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-md mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}