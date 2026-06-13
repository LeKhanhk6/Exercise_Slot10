import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, cartCount, totalValue } = useCart();

  return (
    <aside className="panel cart-panel">
      <h2>Your Cart</h2>
      <p className="panel-note">Review your selected dishes before checkout.</p>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <strong>{item.name}</strong>
                  <p>
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <button type="button" className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>Total Items: {cartCount}</p>
            <p>Total Value: ${Number(totalValue).toFixed(2)}</p>
          </div>

          <button type="button" className="clear-button" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
}
