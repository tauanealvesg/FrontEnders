const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone')

form.addEventListener('submit', (e)=>{
  validateEmail(email.value);
  validateNome(nome.value);
  validateTelefone(telefone.value)
});

function validateEmail(email){
 let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 if (!reg.test(email)){
  alert('Insira um email válido!');
  }
}

function validateNome(nome){
  let reg2 = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
  if (!reg2.test(nome)){
   alert('Insira um nome válido!');
   }
}

function validateTelefone(telefone){
  let reg2 = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm

  if (!reg2.test(telefone)){
   alert('Insira um telefone válido!');
   }
}