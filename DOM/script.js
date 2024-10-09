const inputName = document.getElementById('name'); 

const inputEmail = document.querySelector('div')

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
 event.preventDefault();
  console.log(event.target);
  
})