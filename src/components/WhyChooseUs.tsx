import { Leaf, Sparkles, Globe } from 'lucide-react';
export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable Practices',
      description: 'Working with farmers who follow eco-friendly and sustainable agricultural methods to protect our environment'
    },
    {
      icon: <Sparkles className="w-8 h-8" />, 
      title: 'Premium Quality',
      description: 'Rigorous quality control processes and standards to deliver only the finest, freshest produce to your doorstep'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'International Reach',
      description: 'Advanced logistics network enabling reliable and efficient delivery of fresh produce worldwide'
    }
  ];

  return (
    <section className="py-16 w-full bg-gradient-to-br from-blue-800/80 to-blue-950">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl text-white transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:bg-white/10 border border-white/10"
            >
              <div 
                className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group shadow-lg shadow-orange-500/20"
              >
                <span className="text-white transform transition-transform duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-md mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}