'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Product {
  name: string;
  description: string;
  image: string;
  title?: string;
}

interface ProductGridProps {
  products: Product[];
  columns: number;
}

export default function ProductGrid({ products, columns }: ProductGridProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-2xl">
        {products.map((product, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl hover:shadow-2xl transform transition-all duration-300 group"
          >
            <div className="relative overflow-hidden rounded-2xl p-4">
              <motion.img 
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover object-center rounded-2xl inset-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 shadow-inner" 
              />
            </div>
            <motion.div 
              className="p-6 bg-gradient-to-br from-white via-orange-50 to-blue-50 rounded-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-500 transition-colors duration-300 drop-shadow-sm font-ubuntu"
                whileHover={{ x: 10 }}
              >
                {product.name}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 mb-3 font-medium drop-shadow-sm font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {product.title}
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}