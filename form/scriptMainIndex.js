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

// INICIO - Notificação

// Adicionar evento de clique a todos os botões com a classe "copy-button"
const copyButtons = document.querySelectorAll('.btn-copy');
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

// INICIO - Função avançar/voltar entre perguntas

let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');
const selectedAnswers = []; // Array para armazenar as respostas selecionadas

function nextQuestion(answer) {
    // Atualize a resposta na sua lógica de armazenamento de respostas
    // Neste exemplo, estamos apenas adicionando a resposta ao array

    selectedAnswers[currentQuestionIndex] = answer;

    // Oculta a pergunta atual
    questions[currentQuestionIndex].classList.add('hidden');

    // Avança para a próxima pergunta
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = questions.length - 1; // Garante que não ultrapasse a última pergunta
    }

    // Exibe a próxima pergunta
    questions[currentQuestionIndex].classList.remove('hidden');
}

function previousQuestion() {
    // Volta para a pergunta anterior
    if (currentQuestionIndex > 0) {
        questions[currentQuestionIndex].classList.add('hidden');
        currentQuestionIndex--;
        questions[currentQuestionIndex].classList.remove('hidden');
    }
}

// FIM- Função avançar/voltar entre perguntas

// INICIO - Função copiar resposta

function copyAnswersToClipboard() {
    // Mapeia "true" para "Sim" e "false" para "Não"
    const mappedAnswers = selectedAnswers.map(answer => {
        return answer ? 'Sim' : 'Não';
    });

    // Unir as respostas em uma única string com tabulação entre elas
    const answersString = mappedAnswers.join('\t');

    // Copia as respostas para a área de transferência
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = answersString;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}

// Chame esta função quando todas as respostas estiverem selecionadas
function todasRespostasSelecionadas() {
    copyAnswersToClipboard();
}

function restartQuestionnaire() {
  // Reinicializa o índice da pergunta para 0 (primeira pergunta)
  currentQuestionIndex = 0;

  // Oculta todas as perguntas, exceto a primeira
  questions.forEach((question, index) => {
      if (index === 0) {
          question.classList.remove('hidden');
      } else {
          question.classList.add('hidden');
      }
  });

  // Limpa as respostas selecionadas
  selectedAnswers.length = 0;
}

// FIM - Função copiar resposta

window.onload = function() {
    questions[currentQuestionIndex].classList.remove('hidden');
};
