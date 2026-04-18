import React from 'react';
import { useCart } from './CartContext';
import './Shop.css';

const Toast = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className="toast-message">
        <span className="toast-icon">✨</span>
        {toast}
      </div>
    </div>
  );
};

export default Toast;
