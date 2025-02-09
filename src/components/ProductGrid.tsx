interface Product {
  name: string;
  description: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  columns: number;
}

export default function ProductGrid({ products, columns }: ProductGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8`}>
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}