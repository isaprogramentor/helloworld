function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = cartao

    cartao.innerHTML = `<div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                </div>
                <div class="cartao__pergunta">
                    <p>${pergunta}</p>
                </div>
                <div class="carta__resposta">
                    <p>${resposta}</p>
                </div>`
    container.appendChild(cartao)
}
