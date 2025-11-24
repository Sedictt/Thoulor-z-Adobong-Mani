import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Thoulorz Adobong Mani</h3>
          <p className="text-sm">
            Bringing the authentic taste of street-style fried peanuts to your home. 
            Crunchy, savory, and irresistibly delicious.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-amber-500 cursor-pointer">Shop All</li>
            <li className="hover:text-amber-500 cursor-pointer">Our Story</li>
            <li className="hover:text-amber-500 cursor-pointer">FAQs</li>
            <li className="hover:text-amber-500 cursor-pointer">Wholesale</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-amber-500"><Facebook size={24} /></a>
            <a href="#" className="hover:text-amber-500"><Instagram size={24} /></a>
            <a href="#" className="hover:text-amber-500"><Twitter size={24} /></a>
          </div>
          <p className="text-xs text-stone-600">© 2024 Thoulorz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
