import { motion } from 'framer-motion';

export default function FeaturedProducts() {
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
      image : "data:image/jpeg;base64,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"
    }
  };

  return (
    <div className="min-h-screen pb-16 pt-10 bg-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col h-full">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-blue-950 text-center mb-12"
        >
          Who We Are<span className="font-bold text-orange-500"> ?</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          {/* Company Description - Takes full width on mobile, half width on desktop */}
          <motion.div 
            data-aos="fade-up"
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:col-span-2"
          >
            <h2 className="text-3xl uppercase font-bold text-center mb-4 text-gray-800">Nadar International</h2>
            <p className="text-gray-700 leading-relaxed text-center">
            Welcome to <span className="font-bold text-center items-center text-orange-500">Nadar International</span>, a trusted name in the export of premium-quality food products and spices. With a deep-rooted commitment to excellence, we source, process, and deliver the freshest and most authentic flavors to international markets.            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {/* Product Categories */}
          {Object.entries(products).map(([key, product], index) => (
            <motion.div
              key={key}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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