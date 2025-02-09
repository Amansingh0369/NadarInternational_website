import React from 'react';

const vegetablesList = [
  {
    name: 'Potato',
    description: 'Versatile and delicious, perfect for any meal.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80'
  },
  {
    name: 'Peas',
    description: 'Sweet and tender, bursting with flavor and nutrition.',
    image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&q=80'
  },
  {
    name: 'Mushroom',
    description: 'Earthy and flavorful, adding depth to any dish.',
    image: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&q=80'
  },
  {
    name: 'Onion',
    description: 'The foundation of flavor, essential for countless cuisines.',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cauliflower',
    description: 'Versatile and healthy, a delicious and nutritious choice.',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80'
  },
  {
    name: 'Tomato',
    description: 'Juicy and flavorful, perfect for salads, sauces, and more.',
    image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cucumber',
    description: 'Refreshing and hydrating, ideal for summer snacks and salads.',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Green Chili',
    description: 'Spicy and flavorful, adds a kick to any dish.',
    image: 'https://images.unsplash.com/photo-1615485290466-c6605f077277?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cabbage',
    description: 'Crisp and crunchy, perfect for salads and stir-fries.',
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80'
  }
];

const Vegetables = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80" 
          alt="Fresh vegetables" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Vegetables</h1>
          <p className="text-xl text-white max-w-2xl">
            Parts of plants that are consumed by humans or other animals as food.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vegetablesList.map((vegetable, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={vegetable.image} 
                alt={vegetable.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{vegetable.name}</h3>
                <p className="text-gray-600">{vegetable.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetables;