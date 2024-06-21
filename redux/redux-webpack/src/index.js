import { createStore } from 'redux';
import { counterReducer } from './store/reducer';
import { increment, decrement } from './store/actions';

const store = createStore(counterReducer);

// Subscribe to the store and update the DOM
store.subscribe(() => {
  const counterValue = store.getState().counter;
  const counterElement = document.getElementById('counter');
  counterElement.textContent = counterValue;
});


const btnIncrement = document.getElementById('increment');
btnIncrement.addEventListener('click', () => {
  store.dispatch(increment());
});

const btnDecrement = document.getElementById('decrement');
btnDecrement.addEventListener('click', () => {
  store.dispatch(decrement());
});