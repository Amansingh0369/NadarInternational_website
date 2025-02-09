import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
};

export default Home;