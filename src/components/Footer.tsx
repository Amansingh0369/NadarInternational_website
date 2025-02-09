import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/Nadar_Logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-[#0C1C47] text-white pt-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="space-y-8">
            <h3 className="text-xl font-extrabold text-[#FF6B00] uppercase border-b-2 border-[#FF6B00] inline-block pb-2">
              Contact Us
            </h3>
            <div className="space-y-6">
              <a href="tel:+918437362026" className="flex items-center hover:text-[#FF6B00] transition-all duration-300 transform hover:translate-x-2">
                <Phone className="w-5 h-5 mr-4 text-[#FF6B00]" /> 
                <span className="text-base">+91 8437362026</span>
              </a>
              <a href="mailto:hello@nadarinternational.com" className="flex items-center hover:text-[#FF6B00] transition-all duration-300 transform hover:translate-x-2">
                <Mail className="w-5 h-5 mr-4 text-[#FF6B00]" /> 
                <span className="text-base">hello@nadarinternational.com</span>
              </a>
              <p className="flex items-center hover:text-[#FF6B00] transition-all duration-300 transform hover:translate-x-2">
                <MapPin className="w-5 h-5 mr-4 text-[#FF6B00]" /> 
                <span className="text-base">Tamil Nadu, India</span>
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-xl font-extrabold text-[#FF6B00] uppercase border-b-2 border-[#FF6B00] inline-block pb-2">
              Products
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/spices" className="flex items-center hover:text-[#FF6B00] transition-all duration-300 transform hover:translate-x-2 text-base">
                  
                  Spices
                </Link>
              </li>
              <li>
                <Link href="/fruits" className="flex items-center hover:text-[#FF6B00] transition-all duration-300 transform hover:translate-x-2 text-base">
                  
                  Fruits
                </Link>
              </li>
              <li>
                <Link href="/vegetables" className="flex items-center hover:text-[#FF6B00] transition-all duration-300 transform hover:translate-x-2 text-base">
            
                  Vegetables
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-8 ">
            <div className="flex justify-center md:justify-start  mb-10 sm:mb-16">
              <Image 
                src={logo} 
                alt="Nadar International" 
                width={160} 
                height={160}
                className="[filter:brightness(0)_invert(1)] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-center  md:justify-start space-x-8 mt-10 ">
              <a 
                href="#" 
                className="text-[#FF6B00] hover:text-white transition-all duration-300 transform hover:scale-110 relative group"
                title="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white">
                  Follow us on Facebook
                </span>
              </a>
              <a 
                href="#" 
                className="text-[#FF6B00] hover:text-white transition-all duration-300 transform hover:scale-110 relative group"
                title="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6" />
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white">
                  Follow us on Twitter
                </span>
              </a>
              <a 
                href="#" 
                className="text-[#FF6B00] hover:text-white transition-all duration-300 transform hover:scale-110 relative group"
                title="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white">
                  Follow us on Instagram
                </span>
              </a>
              <a 
                href="#" 
                className="text-[#FF6B00] hover:text-white transition-all duration-300 transform hover:scale-110 relative group"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-white">
                  Follow us on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-orange-500/30 text-center bg-[#0C1C47]/80 backdrop-blur-sm">
        <p className="text-gray-300 text-base font-light">&copy; {new Date().getFullYear()} <span className="font-medium text-[#FF6B00]">Nadar International</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}