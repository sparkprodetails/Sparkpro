import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export const PACKAGES = [
  {
    id: 'single',
    name: '1 Bottle',
    label: 'Standard',
    price: 1500,
    badge: null,
    highlight: false,
  },
  {
    id: 'combo',
    name: 'Combo Pack (2 Bottles)',
    label: 'Best Value',
    price: 2400,
    badge: '🔥 Most Popular · Save Rs. 600',
    highlight: true,
  },
  {
    id: 'pro',
    name: '4 Pack',
    label: 'Professional Deal',
    price: 4500,
    badge: '💎 Pro Deal · Save Rs. 1,500',
    highlight: false,
  },
];

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  }, []);

  const addToCart = useCallback((pkg, quantity) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === pkg.id);
      if (existing) {
        return prev.map(i =>
          i.id === pkg.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...pkg, quantity }];
    });
    const message = quantity > 1 
      ? `${quantity} x ${pkg.name} added to cart!` 
      : `${pkg.name} added to cart!`;
    showToast(message);
    setIsCartOpen(true);
  }, [showToast]);

  const removeFromCart = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id, qty) => {
    if (qty < 1) return;
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, addToCart, removeFromCart, updateQuantity, clearCart,
      totalItems, totalPrice, isCartOpen, setIsCartOpen, toast
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
