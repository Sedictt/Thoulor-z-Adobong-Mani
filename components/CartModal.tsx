import React from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout 
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
        <div className="w-full bg-white shadow-2xl flex flex-col h-full transform transition-transform">
          {/* Header */}
          <div className="px-6 py-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                <ShoppingBag className="text-amber-600" /> Your Stash
            </h2>
            <button onClick={onClose} className="text-stone-400 hover:text-stone-600">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                <ShoppingBag size={64} className="opacity-20" />
                <p className="text-lg">Your cart is empty.</p>
                <button onClick={onClose} className="text-amber-600 font-medium hover:underline">
                    Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-stone-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-stone-900">{item.name}</h3>
                        <p className="text-stone-500 text-sm">₱{item.price} / pack</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 rounded-md">
                            <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="p-1 hover:bg-stone-100 text-stone-600"
                                disabled={item.quantity <= 1}
                            >
                                <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="p-1 hover:bg-stone-100 text-stone-600"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                        <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-400 hover:text-red-600 p-1"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-100 p-6 bg-stone-50">
                <div className="flex justify-between items-center mb-4 text-lg font-bold text-stone-900">
                    <span>Total</span>
                    <span>₱{total.toFixed(2)}</span>
                </div>
                <button 
                    onClick={onCheckout}
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                    Proceed to Checkout
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
