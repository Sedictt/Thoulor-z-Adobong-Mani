import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { Plus, Flame, Star } from 'lucide-react';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">
            The <span className="text-amber-600">One & Only</span>
          </h2>
          <p className="mt-4 text-lg text-stone-500">
            Our signature Adobong Mani. 10 Pesos of pure happiness.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col border border-stone-100">
              <div className="relative h-72 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.spiceLevel > 0 && (
                        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            <Flame size={12} fill="currentColor" /> {Array(product.spiceLevel).fill('!').join('')}
                        </div>
                    )}
                </div>
                {/* Floating Add Button on Image (Mobile Friendly) */}
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-4 right-4 bg-amber-600 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Add to cart"
                >
                  <Plus size={24} />
                </button>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-stone-900">{product.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.map(tag => (
                        <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                </div>
                <p className="text-stone-500 text-base mb-6 flex-1">{product.description}</p>
                
                <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-4">
                    <span className="text-3xl font-bold text-amber-700">₱{product.price}</span>
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="text-amber-600 font-semibold text-sm hover:text-amber-800 transition-colors md:hidden"
                    >
                        Add to Cart
                    </button>
                    <div className="hidden md:flex text-amber-400">
                        {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};