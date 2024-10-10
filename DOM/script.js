const inputName = document.getElementById('name'); 

const inputEmail = document.querySelector('#email')

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
 event.preventDefault();

  let orderinfo = {};

  orderinfo.Nome = inputName.value; 
  orderinfo.Email = inputEmail.value;

  console.log(orderinfo);
  
  
})