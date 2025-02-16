'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from "../../public/Nadar_Logo.svg";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/spices', label: 'Spices' },
    { href: '/fruits', label: 'Fruits' },
    { href: '/vegetables', label: 'Vegetables' },
    { href: '/certification', label: 'Certifications' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div 
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Nadar International"
                width={120}
                height={120}
                className={`transition-all duration-300 ${
                  scrolled ? '[filter:brightness(0)]' : '[filter:brightness(0)_invert(1)]'
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href 
                      ? 'text-orange-500' 
                      : scrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-orange-500 text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-16 bg-white/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`${
                        pathname === item.href ? 'text-orange-500 bg-orange-50/50' : 'text-gray-700'
                      } block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 hover:bg-orange-50/50 transition-all duration-200`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}