const cep = document.getElementById('cep');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const rua = document.getElementById('rua');

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

