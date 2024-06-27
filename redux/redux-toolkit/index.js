import { store } from "./app/store";
import { increment, decrement, incrementByAmount } from "./feature/counter/counterSlice";

function updateUI() {
    document.getElementById('count').textContent = store.getState().counter.value;
}

store.subscribe(updateUI);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});

document.getElementById('incrementByAmount').addEventListener('click', () => {
  store.dispatch(incrementByAmount(5));
});