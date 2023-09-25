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

// INICIO - FUNÇÃO COPIAR TEXTO

function copiarTexto(index) {
    // Selecione o texto da div correspondente ao índice
    const divs = document.querySelectorAll('.script p');
    const textoParaCopiar = divs[index].innerText;

    // Crie um elemento de texto temporário para copiar o texto
    const textareaTemporario = document.createElement('textarea');
    textareaTemporario.value = textoParaCopiar;
    document.body.appendChild(textareaTemporario);

    // Selecione e copie o texto no textarea temporário
    textareaTemporario.select();
    document.execCommand('copy');

    // Remova o textarea temporário
    document.body.removeChild(textareaTemporario);
  }

// FIM - FUNÇÃO COPIAR TEXTO

// INICIO - NOTIFY

// Adicionar evento de clique a todos os botões com a classe "SCRIPT"
const copyButtons = document.querySelectorAll('.script');
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

const nameBtn = document.querySelectorAll('.notify');
nameBtn.forEach(button => {
  button.addEventListener('click', () => {
    exibirNotificacao();
  });
});

function exibirNotificacao() {
  iziToast.success({
    message: 'Nome Alterado!',
    position: 'bottomRight',
    timeout: 5000, // Tempo em milissegundos que a notificação será exibida (5 segundos neste exemplo)
    closeOnClick: true, // Fechar a notificação ao clicar nela
    pauseOnHover: true, // Pausar o tempo limite da notificação quando o mouse estiver sobre ela
    progressBar: true, // Mostrar uma barra de progresso
  });
}
// FIM - Notificação
