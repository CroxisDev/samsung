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

// INICIO - CAIXA ALTA

var textareas = document.querySelectorAll('.section_principal textarea');

textareas.forEach(function(textarea) {
    textarea.addEventListener('input', function() {
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value = this.value.toUpperCase();

        this.setSelectionRange(start, end);
    });
});

// FIM - CAIXA ALTA

// INICIO - SALVAR TEXTO DO ANOTAÇÃO

    function saveContent() {
        var textarea = document.getElementById("bloconotas");
        var content = textarea.value;
        localStorage.setItem("savedContent", content);
        console.log("Conteúdo salvo: " + content);
    }

    function restoreContent() {
        var textarea = document.getElementById("bloconotas");
        if (localStorage.getItem("savedContent")) {
                textarea.value = localStorage.getItem("savedContent");
        }
    }

    restoreContent();

// FIM - SALVAR TEXTO DO ANOTAÇÃO

// INICIO - Notificação

// Adicionar evento de clique a todos os botões com a classe "copy-button"
const copyButtons = document.querySelectorAll('.copy-button');
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    exibirNotificacaoDeSucesso();
  });
});

function exibirNotificacaoDeSucesso() {
  iziToast.success({
    message: 'Texto copiado',
    position: 'bottomRight',
    timeout: 5000, // Tempo em milissegundos que a notificação será exibida (5 segundos neste exemplo)
    closeOnClick: true, // Fechar a notificação ao clicar nela
    pauseOnHover: true, // Pausar o tempo limite da notificação quando o mouse estiver sobre ela
    progressBar: true, // Mostrar uma barra de progresso
  });
}

// FIM - Notificação
