'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import spiceBoard from "../../../public/spicesBoard.png";
import msme from "../../../public/msme-logo.png";
import apeda from "../../../public/apeda.jpg";
import dgft from "../../../public/dgft.png";
import fssai from "../../../public/fssai.png";
import gst from "../../../public/gst.png";
import udhyam from "../../../public/udyom.png";

export default function Certification() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    AOS.init({
      duration: isMobile ? 800 : 1000,
      once: false,
      mirror: true,
      offset: isMobile ? 50 : 100,
    });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const data = [
    { id: 1, title: "SPICES BOARD", img: spiceBoard },
    { id: 2, title: "MSME", img: msme },
    { id: 3, title: "APEDA", img: apeda },
    { id: 4, title: "DGFT", img: dgft },
    { id: 5, title: "FSSAI", img: fssai },
    { id: 6, title: "GST", img: gst },
    { id: 7, title: "UDHYAM", img: udhyam },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen  sm:pt-20 bg-white"
    >
      <div className="relative h-[400px] sm:h-[400px] md:h-[500px]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/aerial-view-container-cargo-ship-sea-min.jpg"
            alt="Premium Produce Export"
            fill
            className="object-cover object-center brightness-50"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl uppercase font-bold text-white mb-4 md:mb-8 tracking-tight drop-shadow-lg"
          >
            Certifications
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl leading-relaxed font-light drop-shadow-md"
          >
            Delivering Premium Indian Produce to the World
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <motion.h2 
                  className="mt-3 text-base sm:text-lg font-semibold text-blue-950 group-hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                >
                  {item.title}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 md:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center text-blue-950 tracking-tight"
            data-aos="fade-up"
          >
            World-Class Export Process
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: 1,
                title: "Strategic Sourcing",
                desc: "Partnering with certified farmers to source the finest produce from premium agricultural regions",
              },
              {
                step: 2,
                title: "Quality Assurance",
                desc: "Rigorous multi-stage quality control with state-of-the-art testing facilities ensuring international standards",
              },
              {
                step: 3,
                title: "Advanced Processing",
                desc: "Modern climate-controlled facilities with cutting-edge technology for optimal produce handling and preservation",
              },
              {
                step: 4,
                title: "Global Distribution",
                desc: "Efficient cold chain logistics ensuring maximum freshness from farm to international markets",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                className="bg-blue-50 backdrop-blur-sm text-center group p-4 sm:p-6 rounded-xl hover:bg-blue-100 transition-all duration-300"
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl sm:text-3xl text-white font-bold">{step.step}</span>
                </motion.div>
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-2 md:mb-4 text-blue-950 group-hover:text-orange-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {step.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
