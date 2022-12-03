$(document).ready(function(){
  const form = $('#form');
  const nome = $('#nome');
  const email = $('#email');
  const telefone = $('#telefone')

  nome.blur(()=>{
    let validar = new Validate('nome', /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/, nome.val());

    validar.valida();
  })

  email.blur(()=>{
    let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, email.val());

    validar.valida();
  })

  telefone.blur( ()=>{
    let validar = new Validate('telefone', /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, telefone.val());

    validar.valida();
  })

  form.submit( (e)=>{
    let reg = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
    let reg2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    let reg3 = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm
    

    if(reg.test($('#nome').val()) && reg2.test($('#email').val()) && reg3.test($('#telefone').val())){
      alert('Você está cadastrado!');
    }else{
      e.preventDefault();
  
      let validar = new Validate('nome', /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/, nome.val());

      validar.valida();

      let validar2 = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, email.val());

      validar2.valida();

      let validar3 = new Validate('telefone', /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, telefone.val());

      validar3.valida();
    }
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
});