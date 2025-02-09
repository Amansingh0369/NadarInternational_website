export default function About() {
  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&q=80" 
          alt="Farming background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Nadar International is a leading exporter of fresh produce, dedicated to delivering high-quality fruits, 
              vegetables, grains and many more to customers worldwide. We prioritize sustainable farming practices and 
              maintain strict quality control standards to ensure that only the finest produce reaches your table.
            </p>
            <p className="text-gray-600">
              Our journey began with a simple mission: to bring the finest Indian produce to the global market while 
              supporting local farmers and sustainable agriculture practices.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1615485290466-c6605f077277?auto=format&fit=crop&q=80" 
              alt="Our produce" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Export Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Sourcing', desc: 'Carefully selected from trusted farmers' },
              { step: 2, title: 'Quality Check', desc: 'Rigorous quality control process' },
              { step: 3, title: 'Processing', desc: 'State-of-the-art processing facilities' },
              { step: 4, title: 'Export', desc: 'Efficient worldwide shipping' }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.step}</span>
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}