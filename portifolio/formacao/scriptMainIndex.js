// INICIO - Exibir/Ocultar menu ao utilizar scroll do mouse

const menu = document.querySelector('.menu');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // O usuário está rolando para cima, então mostra o menu novamente
        menu.classList.remove('hidden');
    } else {
        // O usuário está rolando para baixo, então esconde o menu
        menu.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
});

// FIM - Exibir/Ocultar menu ao utilizar scroll do mouse