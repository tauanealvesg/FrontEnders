
function abrirPag(param){
  let localPag = document.getElementById('paginas');
  let pag = new XMLHttpRequest();

  pag.onreadystatechange = () =>{
    if(pag.readyState == 4 && pag.status == 200){
      localPag.innerHTML = pag.response;
      
    }
  }

  pag.open('GET', `../pages/${param}.html`);
  pag.send();
}