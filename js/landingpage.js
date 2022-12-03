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

$('#nome').blur( ()=>{
  let validar = new Validate('nome', /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/, $('#nome').val());

  validar.valida();
})

$('#email').blur( ()=>{
  let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, $('#email').val());

  validar.valida();
})

$('#cep').blur( ()=>{
  let validar = new Validate('cep', /^[0-9]{5}-[0-9]{3}$/, $('#cep').val());

  validar.valida();
})

$('#senha').blur( ()=>{
  let validar = new Validate('senha', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, $('#senha').val());

  validar.valida();
})

$('#confirmacao').blur( ()=>{
  validateConfirmacao($('#confirmacao').val(), $('#senha').val())
})

$('#form').submit( (e) =>{
  let reg = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
  let reg2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  let reg3 = /^[0-9]{5}-[0-9]{3}$/
  let reg4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

  if(reg.test($('#nome').val()) && reg2.test($('#email').val()) && reg3.test($('#cep').val()) && reg4.test($('#senha').val()) && $('#confirmacao').val() == $('#senha').val()){
    alert('Você está cadastrado!');
  }else{
    e.preventDefault();

    let validar = new Validate('nome', reg, $('#nome').val());

    validar.valida();

    let validar2 = new Validate('email', reg2,  $('#email').val());

    validar2.valida();

    let validar3 = new Validate('cep', reg3,  $('#cep').val());

    validar3.valida();

    let validar4 = new Validate('senha', reg4,  $('#senha').val());

    validar4.valida();

    validateConfirmacao(  $('#confirmacao').val(), $('#senha').val());
  }
})

/*8 caracteres no mínimo
1 Letra Maiúscula no mínimo
1 Número no mínimo
1 Símbolo no mínimo: $*&@#
Se der, também não permitir sequência igual (aa, bb, 44, etc)*/

function validateConfirmacao(confirmacao, senha){
    if (confirmacao != senha){
      $('#confirmacao').addClass('border-danger').removeClass('border-white');
      $('#alertconfirmacao').addClass('d-block').removeClass('d-none');
    }else{
      $('#confirmacao').addClass('border-white').removeClass('border-danger');
      $('#alertconfirmacao').addClass('d-none').removeClass('d-block');
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
      $(`#${this.identificador}`).addClass('border-danger').removeClass('border-white');
      $(`#alert${this.identificador}`).addClass('d-block').removeClass('d-none');
      }else{
        $(`#${this.identificador}`).addClass('border-white').removeClass('border-danger');
        $(`#alert${this.identificador}`).addClass('d-none').removeClass('d-block');
      }
  }
}