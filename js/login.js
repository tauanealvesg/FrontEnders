const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

form.addEventListener('submit', (e)=>{
  validateEmail(email.value);
  validateSenha(senha.value);
  e.preventDefault();
})

senha.addEventListener('blur', ()=>{
  let validar = new Validate('senha', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, senha.value);

  validar.valida();
})

email.addEventListener('blur', ()=>{
  let validar = new Validate('email', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, email.value);

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