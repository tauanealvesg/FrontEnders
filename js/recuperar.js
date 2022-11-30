const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', ()=>{
  validateEmail(email.value);
})

function validateEmail(email){
  let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!reg.test(email)){
   alert('Insira um email válido!');
   }
 }