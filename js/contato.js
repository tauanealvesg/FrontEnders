const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone')

nome.addEventListener('blur', ()=>{
  let validar = new Validate('nome', /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/, nome.value);

  validar.valida();
})

email.addEventListener('blur', ()=>{
  let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, email.value);

  validar.valida();
})

telefone.addEventListener('blur', ()=>{
  let validar = new Validate('telefone', /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, telefone.value);

  validar.valida();
})

form.addEventListener('submit', (e)=>{
  validateEmail(email.value);
  validateNome(nome.value);
  validateTelefone(telefone.value);
  e.preventDefault();
})

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