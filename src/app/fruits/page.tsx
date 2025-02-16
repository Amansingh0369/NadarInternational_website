'use client';

import { fruitsList } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Fruits() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <div className="relative h-[400px]">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80" 
          alt="Fresh fruits" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Fruits
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white max-w-2xl"
          >
            Embrace the Goodness of Whole Foods. Nourish Your Body and Soul.
          </motion.p>
        </div>
      </div>
      <ProductGrid products={fruitsList} columns={4} />
    </motion.div>
  );
}