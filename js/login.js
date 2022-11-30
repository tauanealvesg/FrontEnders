const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

form.addEventListener('submit', ()=>{
  validateEmail(email.value);
  validateSenha(senha.value);
})

function validateSenha(senha){
  let reg2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

  if (!reg2.test(senha)){
   alert('Insira uma senha válido!');
   }
}

function validateEmail(email){
  let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!reg.test(email)){
   alert('Insira um email válido!');
   }
 }