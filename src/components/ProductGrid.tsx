interface Product {
  name: string;
  description: string;
  image: string;
  title?: string;
}

interface ProductGridProps {
  products: Product[];
  columns: number;
}

export default function ProductGrid({ products, columns }: ProductGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-2xl">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-2xl p-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover object-center rounded-2xl inset-2  transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 shadow-inner" />
            </div>
            <div className="p-6 bg-gradient-to-br from-white via-orange-50 to-blue-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-orange-500 transition-colors duration-300 drop-shadow-sm font-ubuntu">
                {product.name}
              </h3>
              <p className="text-lg text-gray-700 mb-3 font-medium drop-shadow-sm font-poppins">{product.title}</p>
              <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}