import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { CartModal } from './components/CartModal';
import { ChatBot } from './components/ChatBot';
import { Footer } from './components/Footer';
import { AppView, CartItem, Product } from './types';
import { CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    // Simulate checkout
    setIsCartOpen(false);
    setShowCheckoutSuccess(true);
    setCart([]);
    setTimeout(() => {
        setShowCheckoutSuccess(false);
        setView(AppView.HOME);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar 
        cartCount={cartCount} 
        currentView={view} 
        onChangeView={setView} 
        onToggleCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        {view === AppView.HOME && (
          <>
            <Hero onShopNow={() => setView(AppView.SHOP)} />
            <ProductList onAddToCart={addToCart} />
          </>
        )}
        
        {view === AppView.SHOP && (
           <ProductList onAddToCart={addToCart} />
        )}
      </main>

      <Footer />
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      <ChatBot />

      {/* Success Notification */}
      {showCheckoutSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-stone-900/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center max-w-sm text-center transform scale-100 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                    <CheckCircle size={48} />
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">Order Confirmed!</h2>
                <p className="text-stone-500">
                    Thanks for ordering from Thoulorz! We're frying your peanuts right now.
                </p>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;
