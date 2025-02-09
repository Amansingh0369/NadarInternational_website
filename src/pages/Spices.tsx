import React from 'react';

const spicesList = [
  {
    name: 'Turmeric',
    description: 'Golden spice with powerful anti-inflammatory properties. Essential for Indian cuisine.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Green Cardamom',
    description: 'Queen of spices. Aromatic pods with intense, sweet flavor.',
    image: 'https://images.unsplash.com/photo-1615485290466-c6605f077277?auto=format&fit=crop&q=80'
  },
  {
    name: 'Black Pepper',
    description: 'King of spices. Adds warmth and spiciness to dishes.',
    image: 'https://images.unsplash.com/photo-1615485290282-381fa7de4196?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cinnamon',
    description: 'Sweet and warming spice, perfect for both sweet and savory dishes.',
    image: 'https://images.unsplash.com/photo-1615485291234-9d694869acd9?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cloves',
    description: 'Intense aromatic spice, adds warmth and depth to dishes.',
    image: 'https://images.unsplash.com/photo-1615485290398-441e4d049cb5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cumin',
    description: 'Earthy and warm, essential for Indian and Middle Eastern cuisine.',
    image: 'https://images.unsplash.com/photo-1615485290466-c6605f077277?auto=format&fit=crop&q=80'
  }
];

const Spices = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80" 
          alt="Spices variety" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Pure Indian Spices</h1>
          <p className="text-xl text-white max-w-2xl">
            Experience the authentic flavors of India with our premium quality spices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spicesList.map((spice, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={spice.image} 
                alt={spice.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{spice.name}</h3>
                <p className="text-gray-600">{spice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spices;