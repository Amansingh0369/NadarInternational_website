'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from "../../public/Nadar_Logo.svg"

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-white/80 backdrop-blur-sm  fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-8xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center text-3xl font-light text-orange-500 hover:scale-105 transition-transform duration-300"
            >
              <Image
                  src={logo}
                  alt="Nadar International"
                  width={120}
                  height={120}
                  className="[filter:brightness(0)_sepia(1)_hue-rotate(35deg)_saturate(5)_contrast(1.2)]"
              />

            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${
                pathname === '/' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
              } hover:text-orange-500 py-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5 font-light text-xl`}
            >
              Home
            </Link>
            <Link 
              href="/spices" 
              className={`${
                pathname === '/spices' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
              } hover:text-orange-500 py-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5  text-xl`}
            >
              spices
            </Link>
            
            <Link 
              href="/fruits" 
              className={`${
                pathname === '/fruits' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
              } hover:text-orange-500 py-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5 text-xl`}
            >
              Fruits
            </Link>
            <Link 
              href="/vegetables" 
              className={`${
                pathname === '/vegetables' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
              } hover:text-orange-500 py-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5  text-xl`}
            >
              Vegetables
            </Link>
            <Link
                href="/certification"
                className={`${
                    pathname === '/certification' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
                } hover:text-orange-500 py-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5  text-xl`}
            >
              Certification
            </Link>
            <Link 
              href="/about" 
              className={`${
                pathname === '/about' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-700'
              } hover:text-orange-500 py-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5  text-xl`}
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden fixed left-0 right-0 bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-300 ease-in-out mt-2 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-0 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/"
              className={`${
                pathname === '/' ? 'text-orange-500 bg-orange-50/30 backdrop-blur-sm' : 'text-gray-700'
              } block px-3 py-2 rounded-md text-lg font-light hover:text-orange-500 hover:bg-orange-50/30 hover:backdrop-blur-sm transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/spices"
              className={`${
                pathname === '/spices' ? 'text-orange-500 bg-orange-50/30 backdrop-blur-sm' : 'text-gray-700'
              } block px-3 py-2 rounded-md text-lg font-light hover:text-orange-500 hover:bg-orange-50/30 hover:backdrop-blur-sm transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Spices
            </Link>
            <Link 
              href="/fruits"
              className={`${
                pathname === '/fruits' ? 'text-orange-500 bg-orange-50/30 backdrop-blur-sm' : 'text-gray-700'
              } block px-3 py-2 rounded-md text-lg font-light hover:text-orange-500 hover:bg-orange-50/30 hover:backdrop-blur-sm transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Fruits
            </Link>
            <Link 
              href="/vegetables"
              className={`${
                pathname === '/vegetables' ? 'text-orange-500 bg-orange-50/30 backdrop-blur-sm' : 'text-gray-700'
              } block px-3 py-2 rounded-md text-lg font-light hover:text-orange-500 hover:bg-orange-50/30 hover:backdrop-blur-sm transition-colors duration-200`}
              onClick={toggleMenu}
            >
              Vegetables
            </Link>
            <Link
                href="/certification"
                className={`${
                    pathname === '/certification' ? 'text-orange-500 bg-orange-50/30 backdrop-blur-sm' : 'text-gray-700'
                } block px-3 py-2 rounded-md text-lg font-light hover:text-orange-500 hover:bg-orange-50/30 hover:backdrop-blur-sm transition-colors duration-200`}
                onClick={toggleMenu}
            >
              certification
            </Link>
            <Link 
              href="/about"
              className={`${
                pathname === '/about' ? 'text-orange-500 bg-orange-50/30 backdrop-blur-sm' : 'text-gray-700'
              } block px-3 py-2 rounded-md text-lg font-light hover:text-orange-500 hover:bg-orange-50/30 hover:backdrop-blur-sm transition-colors duration-200`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}