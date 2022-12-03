const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

$('#form').submit( (e)=>{
  let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
  let reg2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  if(reg.test($('#senha').val()) && reg2.test($('#email').val())){
    alert('Logado com Sucesso!');
  }else{
    e.preventDefault();
    let validar = new Validate('senha', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, $('#senha').val());

    validar.valida();

    let validar2 = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, $('#email').val());

    validar2.valida();
  }
  
})

$('#senha').blur( ()=>{
  let validar = new Validate('senha', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, $('#senha').val());

  validar.valida();
})

$('#email').blur( ()=>{
  let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, $('#email').val());

  validar.valida();
})

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