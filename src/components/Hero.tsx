'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from '../../public/assortment-spices-herbs-bowls-min.jpg';
import { Ubuntu, Playfair_Display } from 'next/font/google';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin']
});

const playfair = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin']
});

export default function Hero() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '30%' : '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    AOS.init({
      duration: isMobile ? 800 : 1000,
      once: false,
      mirror: true,
      disable: 'mobile'
    });
  }, [isMobile]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <section ref={ref} className="relative h-[100svh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: isMobile ? 1 : 1.5 }}
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center brightness-75"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10 sm:from-black/40 sm:to-black/40"
          style={{ opacity }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl w-full mx-auto sm:mx-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <motion.h2 
                  className={`text-orange-500 text-3xl font-semibold sm:text-5xl md:text-5xl mb-4 ${ubuntu.className} text-center sm:text-left`}
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  data-aos="fade-right"
                  data-aos-offset="100"
                >
                  Welcome to Nadar International
                </motion.h2>
              </motion.div>

              <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                {["Bringing the Finest", "Indian Spices", "to the World"].map((text, index) => (
                  <motion.div
                    key={text}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="overflow-hidden text-center sm:text-left"
                  >
                    <span 
                      className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold 
                        ${playfair.className} ${index === 1 ? 'text-orange-500' : ''} 
                        leading-tight block`}
                    >
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className={`text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed 
                  ${ubuntu.className} text-center sm:text-left`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Experience the authentic flavors of India with our premium quality spices, 
                carefully sourced and expertly processed to bring you the very best in taste and aroma.
              </motion.p>

              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.a 
                  href="/about" 
                  className={`group bg-white text-black px-6 sm:px-8 py-3 rounded-lg inline-flex items-center 
                    hover:bg-blue-950 hover:text-white font-semibold tracking-wide transition-all duration-300 
                    ${ubuntu.className} text-sm sm:text-base`}
                  whileHover={{ 
                    scale: isMobile ? 1.02 : 1.05,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <motion.span
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    animate={isMobile ? {} : { 
                      x: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator - Hidden on mobile */}
        {!isMobile && (
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ opacity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  y: [0, 15, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Floating particles - Reduced on mobile */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-orange-500/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: Math.random() * (isMobile ? 15 : 20) + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}