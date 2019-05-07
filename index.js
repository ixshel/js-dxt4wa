// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let users = {
 Alan: {
   age: 27,
   online: false
 },
 Jeff: {
   age: 32,
   online: true
 },
 Sarah: {
   age: 48,
   online: false
 },
 Ryan: {
   age: 19,
   online: true
 }
};

let count = 0;
  for(let key in users) {
    users[key].online ? count ++ : 0;
  }

  console.log('count: ', count)

  // return count;
let c = 0;

    Object.entries(users).map(entry => {
      entry[1].online ? count ++ : 0;
      if (entry[1].online) {
        return c++;
      }
    });
    

console.log('test: ', c)

