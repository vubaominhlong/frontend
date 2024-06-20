const { createStore } = Redux;

const initialState = { totalAmount: 100 };

function amountReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_AMOUNT':
      return { totalAmount: state.totalAmount + 1 };
    case 'DECREASE_AMOUNT':
      return { totalAmount: state.totalAmount - 1 };
    default:
      return state;
  }
}

const store = createStore(amountReducer);

function renderTotalAmount() {
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.textContent = store.getState().totalAmount;
  const amountElement = document.getElementById('amount');
  amountElement.textContent = store.getState().totalAmount;
}

function increaseAmount() {
  store.dispatch({ type: 'INCREASE_AMOUNT' });
  renderTotalAmount();
}

function decreaseAmount() {
  store.dispatch({ type: 'DECREASE_AMOUNT' });
  renderTotalAmount();
}

// Initial render
renderTotalAmount();