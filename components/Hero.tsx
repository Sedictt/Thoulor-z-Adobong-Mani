import React from 'react';
import { ArrowRight, Flame, Award, Clock } from 'lucide-react';
import { AppView } from '../types';

interface HeroProps {
  onShopNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <div className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Peanuts Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-amber-500">
            Adobong Mani <br />
            <span className="text-white">Like No Other.</span>
          </h1>
          <p className="mt-4 text-xl text-stone-300 max-w-lg mx-auto md:mx-0">
            Hand-crafted, perfectly fried garlic peanuts. The ultimate "pulutan" and snack partner. Once you pop, you literally cannot stop.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={onShopNow}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full text-lg shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Order Now <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-full text-lg shadow-lg transition-all border border-stone-600">
              Our Story
            </button>
          </div>
        </div>
        
        {/* Floating Feature Cards */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="bg-stone-800/80 backdrop-blur-sm p-6 rounded-2xl border border-stone-700 shadow-2xl max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-500">
                    <Flame size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Always Freshly Cooked</h3>
                    <p className="text-stone-400 text-sm">We fry daily to ensure maximum crunch and flavor integrity.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-500">
                    <Award size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Premium Ingredients</h3>
                    <p className="text-stone-400 text-sm">High-quality peanuts and real spices. No shortcuts.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-500">
                    <Clock size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Fast Delivery</h3>
                    <p className="text-stone-400 text-sm">From our fryer to your doorstep while it's still crispy.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
