const form = document.getElementById('form');
const email = document.getElementById('email');

$('#form').submit( (e)=>{
  let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  if(reg.test($('#email').val())){
    alert('Um email com a mudança de senha foi enviado pra você');
  }else{
    e.preventDefault();
    let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, $('#email').val());

    validar.valida();
  }
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