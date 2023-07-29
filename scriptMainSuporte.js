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

// INICIO - Exibe/Oculta o Anotações

  const openNoteButton = document.getElementById('openNoteButton');
  const sectionNotes = document.getElementById('section_notes');
  const sectionBloco = document.getElementById('section_bloco');

  openNoteButton.addEventListener('click', () => {
    // Verifica se a seção de notas está visível
    if (sectionNotes.style.display === '' || sectionNotes.style.display === 'block') {
      sectionNotes.style.display = 'none';
      sectionBloco.style.display = 'block';
    } else {
      // Caso contrário, a seção de bloco está visível
      sectionNotes.style.display = 'block';
      sectionBloco.style.display = 'none';
    }
  });

// FIM - Exibe/Oculta o Anotações

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