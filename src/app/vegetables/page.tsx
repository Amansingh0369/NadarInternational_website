import { vegetablesList } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

export default function Vegetables() {
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
      <ProductGrid products={vegetablesList} columns={3} />
    </div>
  );
}