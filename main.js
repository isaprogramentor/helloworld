let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "Seja muito bem-vindo!"
}
else{
    elemento.textContent = nomeUsuário;
}
