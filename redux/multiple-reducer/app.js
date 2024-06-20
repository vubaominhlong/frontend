const { createStore, combineReducers } = Redux;
  // Combine the reducers
const rootReducer = combineReducers({
    role: roleReducer,
    user: userReducer,
});

const store = createStore(rootReducer);

function render() {
  const roleElement = document.getElementById('role');
  roleElement.textContent = store.getState().role.noOfRole;
  const userElement = document.getElementById('user');
  userElement.textContent = store.getState().user.noOfUser;
}

function addRole() {
  store.dispatch(add_role());
  render();
}
function addUser() {
    store.dispatch(add_user());
    render();
  }

function removeRole() {
  store.dispatch(remove_role());
  render();
}

function removeUser() {
    store.dispatch(remove_user());
    render();
  }

// Initial render
render();