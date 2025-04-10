const botoes = document.querySelectorAll(".botao");
console.log(botoes);

botoes.forEach(botao=>{
    botao.addEventListener("click", () =>{
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");


    }
    )
    
})
