const cep = document.getElementById('cep');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const rua = document.getElementById('rua');
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmacao = document.getElementById('confirmacao');


var xhr = new XMLHttpRequest();

cep.addEventListener('blur', ()=>{
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      let responseTexte = JSON.parse(this.responseText);
      console.log(responseTexte);
      estado.value = responseTexte.uf;
      bairro.value = responseTexte.bairro;
      cidade.value = responseTexte.localidade;
      rua.value = responseTexte.logradouro;
    }
  });
  
  xhr.open("GET", `https://viacep.com.br/ws/${cep.value}/json/`);
  xhr.responseType = 'text';
  xhr.send();
})

form.addEventListener('submit', (e) =>{
  validateEmail(email.value);
  validateNome(nome.value);
  validateCep(cep.value);
  validateSenha(senha.value);
  validateConfirmacao(confirmacao.value, senha.value);
  alert(text);
})

let text = '';

function validateEmail(email){
  let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!reg.test(email)){
   text = text + 'Insira um email válido \n'
   }
 }
 
 function validateNome(nome){
   let reg2 = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
   if (!reg2.test(nome)){
    text = text + 'Insira um nome válido \n'
    }
 }
 
 function validateCep(cep){
   let reg2 = /^[0-9]{5}-[0-9]{3}$/
 
   if (!reg2.test(cep)){
    text = text + 'Insira um cep válido \n'
    }
 }

/*8 caracteres no mínimo
1 Letra Maiúscula no mínimo
1 Número no mínimo
1 Símbolo no mínimo: $*&@#
Se der, também não permitir sequência igual (aa, bb, 44, etc)*/

function validateSenha(senha){
  let reg2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

  if (!reg2.test(senha)){
   text = text + 'Insira uma senha válida! \n'
   }
}

function validateConfirmacao(confirmacao, senha){
    if (confirmacao != senha){
      text = text + 'As senhas não são iguais \n'
   }
}