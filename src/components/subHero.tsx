'use client';

import Image from 'next/image';
import heroImage from '../../public/aerial-view-container-cargo-ship-sea-min.jpg';
import heroImage2 from '../../public/02.png';
import heroImage3 from '../../public/s02_bip_74copy.png';
import { Ubuntu, Playfair_Display } from 'next/font/google';
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import AOS from 'aos';

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin']
});

const playfair = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin']
});

export default function SubHero() {
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
      offset: isMobile ? 50 : 100
    });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative h-[40rem] p-10 sm:p-0 sm:h-[45rem] md:h-[40rem] rounded-full"
    >
      <div>
        <h1></h1>
      </div>
      <div className="absolute inset-0 rounded-[2rem] py-10 p-2 sm:p-10 overflow-hidden">
        <Image 
          src={heroImage} 
          alt="Spices background" 
          className="w-full h-full object-cover object-mid rounded-3xl"
          priority
        />
        <div className="absolute inset-2 left-2 top-10 right-2 bottom-10 sm:inset-10  bg-black bg-opacity-60 rounded-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-end py-10 sm:py-20 md:px-20">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-white w-full"
      data-aos="fade-up"
      data-aos-delay={isMobile ? '0' : '200'}
    >
      <div className="flex relative max-w-full overflow-hidden">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          data-aos="fade-right"
          data-aos-delay={isMobile ? '100' : '300'}
        >
          <Image
            src={heroImage2}
            alt="Decorative image 1"
            width={300}
            height={100}
            className="object-contain w-[160px] sm:w-[250px] md:w-[300px]"
          />
          <Image
            src={heroImage3}
            alt="Decorative image 2"
            width={300}
            height={200}
            className="object-contain absolute left-[80px] sm:left-[160px] md:left-40 -bottom-1 w-[150px] sm:w-[250px] md:w-[300px]"
          />
        </motion.div>
      </div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        data-aos="fade-up"
        data-aos-delay={isMobile ? '200' : '400'}
        className={`text-xs sm:text-4xl md:text-xl font-black mb-3 sm:mb-4 tracking-wide ${ubuntu.className}`}
      >
        At{' '}
        <span className="font-bold text-2xl sm:text-4xl text-orange-500">
          Nadar International
        </span>
        , we take pride in being a leading exporter of high-quality spices,
        Vegetables, fruits, and other food products. With years of
        industry expertise, we have established ourselves as a reliable partner
        for businesses worldwide, ensuring the finest ingredients reach your
        doorstep.
      </motion.h1>
    </motion.div>
  </div>
    </motion.section>
  );
}