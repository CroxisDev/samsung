function atualizarTexto(nomeSelecionado) {
    // Atualizar o texto para todos os parágrafos
    for (let i = 0; i < 3; i++) {
      const mensagemElement = document.getElementById(`mensagem${i}`);
      const nomeSelecionadoElement = document.getElementById(`nomeSelecionado${i}`);
      
      nomeSelecionadoElement.textContent = nomeSelecionado || '[Seu nome]';
    }
    
    // Salvar a seleção no localStorage
    localStorage.setItem('nomeSelecionado', nomeSelecionado);
  }
  
  // Carregar a seleção do nome do localStorage ao carregar a página
  window.onload = function() {
    const nomeSelecionado = localStorage.getItem('nomeSelecionado');
    
    if (nomeSelecionado) {
      atualizarTexto(nomeSelecionado);
    }
  };
  
  // Esconde o dropdown no início
  hideDropdown();
  
  function showDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = 'flex';
  }
  
  function hideDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = 'none';
  }
  
  function selecionarNome(nome) {
    atualizarTexto(nome);
  }
  
