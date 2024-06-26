import store from "./store/store";
import { fetchUsers } from "./store/actions";

store.dispatch(fetchUsers());
store.subscribe(() => {
  const stage = store.getState();
  const ul = document.getElementById('users');
  stage.users.forEach(usr => {
    const li = document.createElement('li');
    li.textContent = usr;
    ul.appendChild(li);
  });
});