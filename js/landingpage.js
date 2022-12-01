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

nome.addEventListener('blur', ()=>{
  let validar = new Validate('nome', /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/, nome.value);

  validar.valida();
})

email.addEventListener('blur', ()=>{
  let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, email.value);

  validar.valida();
})

cep.addEventListener('blur', ()=>{
  let validar = new Validate('cep', /^[0-9]{5}-[0-9]{3}$/, cep.value);

  validar.valida();
})

senha.addEventListener('blur', ()=>{
  let validar = new Validate('senha', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, senha.value);

  validar.valida();
})

confirmacao.addEventListener('blur', ()=>{
  validateConfirmacao(confirmacao.value, senha.value)
})

form.addEventListener('submit', (e) =>{
  validateEmail(email.value);
  validateNome(nome.value);
  validateCep(cep.value);
  validateSenha(senha.value);
  validateConfirmacao(confirmacao.value, senha.value);
  e.preventDefault();
})

/*8 caracteres no mínimo
1 Letra Maiúscula no mínimo
1 Número no mínimo
1 Símbolo no mínimo: $*&@#
Se der, também não permitir sequência igual (aa, bb, 44, etc)*/

function validateConfirmacao(confirmacao, senha){
    if (confirmacao != senha){
      document.getElementById('confirmacao').classList.add('border-danger');
      document.getElementById('confirmacao').classList.remove('border-white');
      document.getElementById('alertconfirmacao').classList.add('d-block');
      document.getElementById('alertconfirmacao').classList.remove('d-none');
    }else{
      document.getElementById('confirmacao').classList.add('border-white');
      document.getElementById('confirmacao').classList.remove('border-danger');
      document.getElementById('alertconfirmacao').classList.add('d-none');
      document.getElementById('alertconfirmacao').classList.remove('d-block');
    }
}

class Validate{
  constructor(identificador, reg, variavel){
    this.identificador = identificador;
    this.reg = reg;
    this.variavel = variavel;
  }
  
  valida() {
    if (!this.reg.test(this.variavel)){
      document.getElementById(`${this.identificador}`).classList.add('border-danger');
      document.getElementById(`${this.identificador}`).classList.remove('border-white');
      document.getElementById(`alert${this.identificador}`).classList.add('d-block');
      document.getElementById(`alert${this.identificador}`).classList.remove('d-none');
      }else{
        document.getElementById(`${this.identificador}`).classList.add('border-white');
        document.getElementById(`${this.identificador}`).classList.remove('border-danger');
        document.getElementById(`alert${this.identificador}`).classList.add('d-none');
        document.getElementById(`alert${this.identificador}`).classList.remove('d-block');
      }
  }
}