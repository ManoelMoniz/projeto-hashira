const botoes = document.querySelectorAll(".botao");
const hashiras = document.querySelectorAll(".hashira");
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botaoselecionado");

        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const hashiraSelecionado = document.querySelector(".hashiraselecionado");

        hashiraSelecionado.classList.remove("selecionado");

        hashiras[indice].classList.add("selecionado");
        
    });

});