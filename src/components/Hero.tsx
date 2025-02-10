import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from '../../public/assortment-spices-herbs-bowls-min.jpg';
import { Ubuntu, Playfair_Display } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin']
});

const playfair = Playfair_Display({
  weight: ['400', '600'],
  subsets: ['latin']
});

export default function Hero() {
  return (
    <>
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src={heroImage} 
            alt="Spices background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-end py-20">
          <div className="text-white">
            <h1 className={`text-7xl font-black mb-4 tracking-wide ${ubuntu.className}`}>Pure Indian Natural Spices</h1>
            <p className={`text-2xl mb-8 font-semibold tracking-wider ${playfair.className}`}>Delivering premium quality fruits, vegetables, and spices worldwide</p>
            <a 
              href="/about" 
              className={`bg-white text-black px-8 py-3 rounded-lg inline-flex items-center hover:bg-blue-950 hover:text-white font-semibold tracking-wide transition-colors duration-300 ${ubuntu.className}`}
            >
              Learn More <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}