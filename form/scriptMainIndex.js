document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Recolha as respostas do formulário
    const requisitos = document.getElementById("check_requisitos").value;
    const dtree = document.getElementById("check_dtree").value;
    const error_cod = document.getElementById("check_error_cod").value;
    const visual_suporte = document.getElementById("check_visual_suporte").value;
    const proactive = document.getElementById("check_proactive").value;
    const anexos = document.getElementById("check_anexos").value;
    const instalacao = document.getElementById("check_instalacao").value;
    const modelo = document.getElementById("check_modelo").value;
    const observacao = document.getElementById("check_observacao").value;

    // Crie um elemento de texto oculto para copiar apenas as respostas
    const textArea = document.createElement("textarea");
    textArea.value = `${requisitos}\t${dtree}\t${garantia}\t${error_cod}\t${visual_suporte}\t${proactive}\t${anexos}\t${instalacao}\t${modelo}\t${observacao}`;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Alerta o usuário que as respostas foram copiadas para a área de transferência
    alert("Respostas copiadas para a área de transferência. Cole no Excel.");

    // Limpe o formulário, se desejar
    document.getElementById("myForm").reset();
});
