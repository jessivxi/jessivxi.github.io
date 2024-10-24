
const fotos = document.querySelector('.fotos');
const totalFotos = document.querySelectorAll('.fotos img').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalFotos; // Avança para a próxima imagem
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalFotos) % totalFotos; // Volta para a imagem anterior
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 100; // Cada imagem ocupa 100% da largura
    fotos.style.transform = `translateX(${offset}%)`;
}