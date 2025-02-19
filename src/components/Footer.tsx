'use client';

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from "../../public/Nadar_Logo.svg";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    AOS.init({
      duration: isMobile ? 800 : 1000,
      once: true,
    });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const socialLinks = [
    { Icon: BsWhatsapp, label: 'Facebook', href: 'https://api.whatsapp.com/send?phone=8437362026' },
    { Icon: BsTwitter, label: 'Twitter', href: 'https://x.com/nadarexports' },
    { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/nadarinternational?igsh=cHR1M2pkajZ5cTNn' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/' }
  ];

  const contactInfo = [
    { Icon: Phone, text: '+91 8437362026', href: 'tel:+918437362026' },
    { Icon: Mail, text: 'hello@nadarinternational.com', href: 'mailto:hello@nadarinternational.com' },
    { Icon: MapPin, text: 'Ferozepur, Punjab, India', href: null }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-[#0C1C47] text-white pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-12 sm:mb-16"
        >
          {/* Contact Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center md:text-left"
            data-aos="fade-right"
          >
            <motion.h3 
              className="text-xl font-extrabold text-[#FF6B00] uppercase border-b-2 border-[#FF6B00] inline-block pb-2"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
            >
              Contact Us
            </motion.h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href || '#'}
                  whileHover={{ x: isMobile ? 5 : 10, color: '#FF6B00' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center md:justify-start transition-all duration-300 space-x-4"
                >
                  <item.Icon className="w-5 h-5 text-[#FF6B00]" />
                  <span className="text-sm sm:text-base">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <motion.h3 
              className="text-xl font-extrabold text-[#FF6B00] uppercase border-b-2 border-[#FF6B00] inline-block pb-2"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
            >
              Quick Links
            </motion.h3>
            <div className="space-y-3 sm:space-y-4">
              {['Home', 'About Us', 'Products', 'Certification', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: isMobile ? 5 : 10, color: '#FF6B00' }}
                  className="block text-sm sm:text-base hover:text-[#FF6B00] transition-all duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Logo and Social Links Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <motion.div 
              className="flex justify-center md:justify-start"
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src={logo} 
                alt="Nadar International" 
                width={140}
                height={140}
                className="[filter:brightness(0)_invert(1)] transition-transform duration-300"
              />
            </motion.div>
            <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8 mt-6 sm:mt-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: isMobile ? 1.1 : 1.2, 
                    color: '#ffffff',
                    rotate: isMobile ? 0 : 360,
                  }}
                  className="text-[#FF6B00] transition-all duration-300 relative group"
                >
                  <social.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  {!isMobile && (
                    <motion.span 
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg hidden sm:block"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {social.label}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="py-4 sm:py-6 border-t border-orange-500/30 text-center bg-[#0C1C47]/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="text-gray-300 text-xs sm:text-sm md:text-base font-light px-4"
          whileHover={{ scale: isMobile ? 1 : 1.02 }}
        >
          &copy; {new Date().getFullYear()} <span className="font-medium text-[#FF6B00]">Nadar International</span>. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}