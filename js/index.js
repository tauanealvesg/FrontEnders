var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://example.api.findcep.com/v1/cep/01234000.json");
xhr.setRequestHeader("Referer", "example.com");

xhr.send();