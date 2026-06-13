import dishes from '../data/dishes';

import { useCart } from '../context/CartContext';

export default function DishesList() {
  const { addToCart, cartCount } = useCart();

  return (
    <section className="panel">
      <h2>Menu</h2>
      <p className="panel-note">Cart Items: {cartCount}</p>
      <p className="panel-note">Choose your dishes and add them to the cart.</p>

      <div className="dish-list">
        {dishes.map((dish) => (
          <article key={dish.id} className="dish-card">
            <div className="dish-header">
              <div>
                <h3>{dish.name}</h3>
                <p className="dish-category">Category: {dish.category}</p>
              </div>
              <span className="dish-price">${dish.price.toFixed(2)}</span>
            </div>

            <p className="dish-description">{dish.description}</p>

            <button type="button" className="add-button" onClick={() => addToCart(dish)}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
