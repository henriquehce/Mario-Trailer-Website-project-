/*
1-abrir video do trailer através do modal quando clicar no botão
    1.1 pegar o botão do HTML com o JS
    1.2 identificar o clique do usuario no botão
    1.3- pegar o modal no js
    1.4- abrir o modal

2- quando clicar no X, fechar modal
    2.1 pegar o modal de fechar com o JS
    2.2 identificação do clique no X
    2.3 fechar modal
*/

//variaveis

// 1.1 pegar o botão do HTML com o JS

const botaoTrailer= document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo= video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src",linkDoVideo);
} );

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "");
});



