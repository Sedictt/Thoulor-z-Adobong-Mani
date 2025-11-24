import React from 'react';
import { ShoppingBag, Menu, X, ShoppingCart } from 'lucide-react';
import { AppView } from '../types';

interface NavbarProps {
  cartCount: number;
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  onToggleCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, currentView, onChangeView, onToggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-stone-900 text-amber-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => onChangeView(AppView.HOME)}
          >
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-2 group-hover:bg-amber-500 transition-colors">
              <ShoppingBag className="text-stone-900" size={24} />
            </div>
            <span className="font-bold text-xl tracking-wider">THOULORZ</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => onChangeView(AppView.HOME)}
              className={`${currentView === AppView.HOME ? 'text-amber-500' : 'text-stone-300'} hover:text-white transition-colors font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => onChangeView(AppView.SHOP)}
              className={`${currentView === AppView.SHOP ? 'text-amber-500' : 'text-stone-300'} hover:text-white transition-colors font-medium`}
            >
              Shop
            </button>
            <button 
              onClick={onToggleCart}
              className="relative p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={onToggleCart}
              className="relative p-2 mr-4 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-stone-300 hover:text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-800 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <button 
              onClick={() => { onChangeView(AppView.HOME); setIsMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-stone-700 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => { onChangeView(AppView.SHOP); setIsMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-stone-700 text-left"
            >
              Shop All Peanuts
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
