import { spicesList } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

export default function Spices() {
  return (
    <div className="bg-white">
      <div className="relative h-[600px]">
        <img 
          src="https://shorturl.at/IDYDU"
          alt="Spices variety" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Pure Indian Spices
          </h1>
          <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
            Experience the authentic flavors of India with our premium quality spices.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <ProductGrid products={spicesList} columns={3} />
      </div>
    </div>
  );
}