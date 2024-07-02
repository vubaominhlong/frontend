import { store } from "./app/store";
import { increment, decrement, incrementByAmount } from "./feature/book/bookSlice";
import { increasePen, decreasePen } from "./feature/pen/penSlice";
import { fetchPosts } from "./feature/post/postSlice";

function updateUI() {
    const stage = store.getState();
    document.getElementById('book').textContent = stage.book.numberOfBook;
    document.getElementById('pen').textContent = stage.pen.numberOfPen;




    const ul = document.getElementById('posts');
    stage.post.posts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post;
      ul.appendChild(li);
    });
}

store.dispatch(fetchPosts());
store.subscribe(updateUI);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});


document.getElementById('increasePen').addEventListener('click', () => {
  store.dispatch(increasePen());
});

document.getElementById('decreasePen').addEventListener('click', () => {
  store.dispatch(decreasePen());
});

document.getElementById('incrementByAmount').addEventListener('click', () => {
  store.dispatch(incrementByAmount(5));
});