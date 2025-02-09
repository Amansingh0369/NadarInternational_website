import { spicesList } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

export default function Spices() {
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
      <ProductGrid products={spicesList} columns={3} />
    </div>
  );
}