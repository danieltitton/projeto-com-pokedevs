// passo 1 - precisamos criar uma variavel no JS para trabalhar com a listagem de pokedevs:

const listaSelecaoPokedevs = document.querySelectorAll('.pokemon');

// passo 2 - Identificar o evento de clique no elemento da listagem:

listaSelecaoPokedevs.forEach(pokemon =>{
    pokemon.addEventListener("click", () => {

// passo 3 - Remover a classe aberto só do cartao que está aberto

        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        // passo 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber qual cartao abrir

        const idPokedevSelecionado = pokemon.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir); 
        cartaoPokedevParaAbrir.classList.add("aberto");

        // passo 5 - remover a classe ativo que marca o pokedev selecionado na listagem:

        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");

        // passo 6 - adicionar a classe ativo no pokedev selecionado na listagem:

        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoNaListagem.classList.add("ativo");



    })
})



