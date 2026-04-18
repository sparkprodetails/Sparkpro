import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './Shop.css';

const CartDrawer = () => {
  const { items, totalItems, totalPrice, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  // Prevent body scroll when drawer open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} role="dialog" aria-label="Shopping Cart">
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            🛒 Your Cart
            {totalItems > 0 && (
              <span className="cart-count-badge">{totalItems}</span>
            )}
          </div>
          <button
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p>Your cart is empty</p>
            <button
              className="btn-continue-shopping"
              onClick={() => setIsCartOpen(false)}
            >← Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {items.map((item, index) => (
                <div key={item.id} className="cart-item-card" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div>
                    <div className="cart-item-name">Ceramic Safe Car Wash Shampoo</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{item.name}</div>
                    <div className="cart-item-price">Rs. {(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                  <div className="cart-item-controls">
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total-row">
                <span className="cart-total-label">Subtotal</span>
                <span className="cart-total-amount">
                  <span className="currency">Rs.</span>
                  {totalPrice.toLocaleString()}
                </span>
              </div>
              <Link
                to="/checkout"
                className="btn-checkout"
                onClick={() => setIsCartOpen(false)}
                id="proceed-to-checkout"
              >
                Checkout Now →
              </Link>
              <button
                className="btn-continue-shopping"
                onClick={() => setIsCartOpen(false)}
              >← Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
