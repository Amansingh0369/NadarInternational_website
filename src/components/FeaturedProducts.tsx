'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeaturedProducts() {
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
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: false
    });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const products = {
    fruits: {
      name: 'Fresh Fruits',
      description: 'Embrace the Goodness of Whole Foods. Nourish Your Body and Soul',
      image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80",
    },
    vegetables: {
      name: 'Fresh Vegetables', 
      description: 'Farm-fresh vegetables harvested at peak ripeness for maximum nutrition and flavor.',
      image: "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?semt=ais_hybrid",
    },
    spices: {
      name: 'Authentic Spices',
      description: 'Traditional Indian spices including turmeric, chilies, and more - ground fresh to preserve aroma.',
      image : "https://shorturl.at/iodlC"
    }
  };

  return (
    <div className="min-h-screen pb-16 pt-10 bg-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col h-full">
        <motion.h1 
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-4xl md:text-6xl font-bold text-blue-950 text-center mb-12"
        >
          Who We Are<span className="font-bold text-orange-500"> ?</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          <motion.div 
            data-aos="fade-up"
            data-aos-duration="800"
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:col-span-2"
          >
            <motion.h2 
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-3xl uppercase font-bold text-center mb-4 text-gray-800"
            >
              Nadar International
            </motion.h2>
            <motion.p 
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-gray-700 leading-relaxed text-center"
            >
              Welcome to <span className="font-bold text-center items-center text-orange-500">Nadar International</span>, 
              a trusted name in the export of premium-quality food products and spices. With a deep-rooted commitment to excellence, 
              we source, process, and deliver the freshest and most authentic flavors to international markets.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {Object.entries(products).map(([key, product], index) => (
            <motion.div
              key={key}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}