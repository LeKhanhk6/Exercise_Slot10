import './App.css';
import Cart from './components/Cart';
import DishesList from './components/DishesList';
import Theme from './components/Theme';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        
        <div>
          <Theme /> 

          <div>
            <div className="container">
              
              <div className="column">
                <DishesList />
              </div>

              <div className="column">
                <Cart />
              </div>

            </div>
          </div>
        </div>

      </CartProvider>
    </ThemeProvider>
  );
}