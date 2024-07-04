import axios from 'axios';

// async function loadUser() {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//   if(response.status === 200) {
//    const users = response.data;
//    console.log(users);
//    const ul = document.getElementById('user');
//    users.forEach(usr => {
//      const li = document.createElement('li');
//      li.textContent = usr.name;
//      ul.appendChild(li);
//    });
//   }
// }
function loadUser() {
  const promise = axios.get('https://jsonplaceholder.typicode.com/users');
  const ul = document.getElementById('user');
  promise.then(response => {
    const users = response.data;
    users.forEach(usr => {
     const li = document.createElement('li');
     li.textContent = usr.name;
     ul.appendChild(li);
   });
  }).catch(error => {
    const li = document.createElement('li');
     li.textContent = error.message;
     ul.appendChild(li);
  })
}
loadUser();