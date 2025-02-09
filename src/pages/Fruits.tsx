import React from 'react';

const fruitsList = [
  {
    name: 'Guava',
    description: 'Sweet. Tart. Nutritious. Nature\'s candy. Enjoy the vibrant flavor and nutritional richness of our fresh guavas.',
    image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&q=80'
  },
  {
    name: 'Apple',
    description: 'Nutritious. Delicious. Convenient and nutritious. A potassium-rich source of energy, perfect for a quick snack.',
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80'
  },
  {
    name: 'Lychee',
    description: 'Sweet. Delicate. Exotic. A taste of the tropics. Experience the delicate sweetness and unique aroma of lychees.',
    image: 'https://images.unsplash.com/photo-1629822341708-696f8b4f4f31?auto=format&fit=crop&q=80'
  },
  {
    name: 'Pomegranate',
    description: 'Flavorful. Antioxidant-rich. A burst of flavor. Discover the jewel-like sweetness and antioxidant power of our pomegranates.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Watermelon',
    description: 'Juicy. Refreshing. Hydrating. Summer\'s refreshment. Quench your thirst with the juicy sweetness of our premium watermelons.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80'
  },
  {
    name: 'Kinnow',
    description: 'Tangy. Sweet. Refreshing. Winter\'s delight. Savor the tangy sweetness of our sun-kissed Kinnow mandarins.',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80'
  },
  {
    name: 'Mango',
    description: 'Sweet. The King of Fruits. Indulge in the rich, aromatic sweetness of our exquisite mangoes.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80'
  },
  {
    name: 'Banana',
    description: 'Nutritious. Delicious. Nature\'s perfect snack. Enjoy the convenience and nutritional benefits of our ripe, flavorful bananas.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80'
  }
];

const Fruits = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80" 
          alt="Fresh fruits" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Fruits</h1>
          <p className="text-xl text-white max-w-2xl">
            Embrace the Goodness of Whole Foods. Nourish Your Body and Soul.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fruitsList.map((fruit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={fruit.image} 
                alt={fruit.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{fruit.name}</h3>
                <p className="text-gray-600">{fruit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruits;