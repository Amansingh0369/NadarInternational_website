import { fruitsList } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

export default function Fruits() {
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
      <ProductGrid products={fruitsList} columns={4} />
    </div>
  );
}