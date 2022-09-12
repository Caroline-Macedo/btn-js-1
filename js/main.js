var titulo = document.querySelector("h2");
var paragrafoClass = document.querySelector(".paragrafo");
var paragrafoid = document.querySelector("#lorem");
var lista = document.querySelector("ul");
var itemlista = document.createElement("li");
var section = document.querySelector("section");
var div = document.querySelector("div");

div.addEventListener("click",(imagem)=>{

imagem.target.classList.add("esconde")

});




itemlista.innerHTML = "Primeiro tópico"
lista.appendChild(itemlista)

section.remove()

console.log(titulo);
console.log(paragrafoClass);
console.log(paragrafoid);
console.log(lista);


