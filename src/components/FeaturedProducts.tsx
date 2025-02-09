import Fruits from "../../public/fruits.jpg"
export default function FeaturedProducts() {
  const products = {
    fruits: {
      name: 'Fresh Fruits',
      description: 'Embrace the Goodness of Whole Foods. Nourish Your Body and Soul',
      image: Fruits.src
    },
    vegetables: {
      name: 'Fresh Vegetables', 
      description: 'Farm-fresh vegetables harvested at peak ripeness for maximum nutrition and flavor.',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80'
    },
    spices: {
      name: 'Authentic Spices',
      description: 'Traditional Indian spices including turmeric, chilies, and more - ground fresh to preserve aroma.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80'
    }
  };

  return (
    <div className="min-h-screen pb-16 pt-10 bg-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col h-full">
        <h1 className="text-6xl font-bold text-blue-950 text-center mb-12">Who We Are<span className="font-bold text-orange-500">?</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
          {/* Company Description - Takes full width on mobile, half width on desktop */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:col-span-2">
            <h2 className="text-3xl uppercase font-bold text-center mb-4 text-gray-800">Nadar International</h2>
            <p className="text-gray-700 leading-relaxed text-center">
            Welcome to <span className="font-bold text-center items-center text-orange-500">Nadar International</span>, a trusted name in the export of premium-quality food products and spices. With a deep-rooted commitment to excellence, we source, process, and deliver the freshest and most authentic flavors to international markets.            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {/* Product Categories */}
          {Object.entries(products).map(([key, product]) => (
            <div key={key} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}