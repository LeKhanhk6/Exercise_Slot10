import { useReducer } from 'react';
import '../styles/Counter.css';

function counterReducer(state, action) {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

function Counter() {

  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <main className="counter-page">
      <section className="counter-card">
        <h1>Counter:</h1>
        <p className="count-value">{count}</p>

        <div className="button-group">
          <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>
            -
          </button>
          <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
            Reset
          </button>
          <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
            +
          </button>
        </div>
      </section>
    </main>
  );
}

export default Counter;
