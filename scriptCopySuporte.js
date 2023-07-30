// INICIO - FUNÇÃO COPIAR TEXTO

function copyToClipboard(text) {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

// COPIAR INQUÉRITO

function copyinquerito() {
    const consumidorInfo = document.getElementById('consumidor-resposta').value;
    const csView = document.getElementById('cs-view-resposta').value;
    const sa = document.getElementById('sa-resposta').value;
    const marketing = document.getElementById('marketing-resposta').value;
    const retornoLigacao = document.getElementById('retorno-ligacao-resposta').value;
    const protocoloSms = document.getElementById('protocolo-sms-resposta').value;

    let copiedText = `${consumidorInfo}\n
        CS VIEW: ${csView}
        S.A: ${sa}
        MARKETING: ${marketing}
        PERMITIDO RETORNO DE LIGAÇÃO: ${retornoLigacao}
        PERMITIDO PROTOCOLO POR SMS: ${protocoloSms}`;

    copyToClipboard(copiedText);
}

// COPIAR RESOLUÇÃO

function copyResolution() {
const resolutionConsu = document.getElementById('informado-consumidor-resposta').value;

const copiedText = `${resolutionConsu}`;

copyToClipboard(copiedText);

}

// COPIAR LAVA E SECA

function copyLavaSeca() {
    const voltagemTomada = document.getElementById('tomada-voltagem-resposta').value;
    const usoAdaptador = document.getElementById('adaptador-extensao-resposta').value;
    const parafusotrans = document.getElementById('parafusos-transporte-resposta').value;
    const pressaoagua = document.getElementById('pressao-agua-resposta').value;
    const nivelapiso = document.getElementById('nivelamento-resposta').value;
    const mangueiradrena = document.getElementById('mangueira-drenagem-resposta').value;
    const modelolava = document.getElementById('etiqueta-modelo-resposta').value;
    const filtrodetrito = document.getElementById('limpeza-filtro-detrimentos-resposta').value;
    const filtromangueira = document.getElementById('limpeza-filtro-mangueira-resposta').value;
    const calibralava = document.getElementById('calibracao-resposta').value;
    const lavagemteste = document.getElementById('lavagem-teste-resposta').value;
    const tamboreco = document.getElementById('lavagem-tambor-eco-resposta').value;
    const resolutionConsu = document.getElementById('informado-consumidor-resposta').value;

    let copiedText = `${resolutionConsu}\n
    ➤ | LAVADORA/SECADORA`;

    if (voltagemTomada !== '') {
    copiedText += `\n           • VOLTAGEM DA TOMADA: ${voltagemTomada}`;
    }

    if (usoAdaptador !== '') {
    copiedText += `\n           • USO DE ADAPTADOR/EXTENSÃO: ${usoAdaptador}`;
    }

    if (parafusotrans !== '') {
    copiedText += `\n           • PARAFUSOS DE TRANSPORTE: ${parafusotrans}`;
    }

    if (pressaoagua !== '') {
    copiedText += `\n           • PRESSÃO DA ÁGUA: ${pressaoagua}`;
    }

    if (nivelapiso !== '') {
    copiedText += `\n           • NIVELAMENTO: ${nivelapiso}`;
    }

    if (mangueiradrena !== '') {
    copiedText += `\n           • MANGUEIRA DE DRENAGEM: ${mangueiradrena}`;
    }

    if (modelolava !== '') {
    copiedText += `\n           • ETIQUETA CONTENDO O MODELO E/OU N° DE SÉRIE:${modelolava}`;
    }

    if (filtrodetrito !== '') {
    copiedText += `\n           • LIMPEZA DO FILTRO DE DETRITOS: ${filtrodetrito}`;
    }

    if (filtromangueira !== '') {
    copiedText += `\n           • LIMPEZA DO FILTRO DA MANGUEIRA: ${filtromangueira}`;
    }

    if (calibralava !== '') {
    copiedText += `\n           • CALIBRAÇÃO: ${calibralava}`;
    }

    if (lavagemteste !== '') {
        copiedText += `\n           • LAVAGEM TESTE: ${lavagemteste}`;
    }

    if (tamboreco !== '') {
    copiedText += `\n           • LAVAGEM DO TAMBOR ECO: ${tamboreco}`;
    }

    copyToClipboard(copiedText);

}

// COPIAR REFRIGERADOR

function copyRefrigerador() {
    const voltagemTomada = document.getElementById('refrigerador-tomada-voltagem-resposta').value;
    const usoAdaptador = document.getElementById('refrigerador-adaptador-extensao-resposta').value;
    const refrimodelo = document.getElementById('refrigerador-etiqueta-modelo-resposta').value;
    const refripainel = document.getElementById('painel-led-resposta').value;
    const refriporta = document.getElementById('borracha-porta-resposta').value;
    const refrivedaporta = document.getElementById('vedacao-porta-resposta').value;
    const refriquedaenergia = document.getElementById('queda-energia-resposta').value;
    const painelcontrole = document.getElementById('config-painel-resposta').value;
    const resolutionConsu = document.getElementById('informado-consumidor-resposta').value;

    let copiedText = `${resolutionConsu}\n
    ➤ | REFRIGERADOR`;

    if (voltagemTomada !== '') {
    copiedText += `\n           • VOLTAGEM DA TOMADA: ${voltagemTomada}`;
    }

    if (usoAdaptador !== '') {
    copiedText += `\n           • USO DE ADAPTADOR/EXTENSÃO: ${usoAdaptador}`;
    }

    if (refrimodelo !== '') {
    copiedText += `\n           • ETIQUETA CONTENDO O MODELO E/OU N° DE SÉRIE: ${refrimodelo}`;
    }

    if (refripainel !== '') {
    copiedText += `\n           • PAINEL DE LED PISCANDO: ${refripainel}`;
    }

    if (refriporta !== '') {
    copiedText += `\n           • BORRACHA DA PORTA: ${refriporta}`;
    }

    if (refrivedaporta !== '') {
    copiedText += `\n           • VEDAÇÃO DA PORTA: ${refrivedaporta}`;
    }

    if (refriquedaenergia !== '') {
    copiedText += `\n           • QUEDA DE ENERGIA: ${refriquedaenergia}`;
    }

    if (painelcontrole !== '') {
        copiedText += `\n           • PAINEL DE CONTROLE: ${painelcontrole}`;
    }

    copyToClipboard(copiedText);

}

// COPIAR AR CONDICIONADO

function copyArCondicionado() {
const voltagemTomada = document.getElementById('arcondicionado-tomada-voltagem-resposta').value;
const usoAdaptador = document.getElementById('arcondicionado-adaptador-extensao-resposta').value;
const arcobre = document.getElementById('tubulacao-cobre-resposta').value;
const armetragem = document.getElementById('metragem-tubulacao-resposta').value;
const ardisjuntor = document.getElementById('disjuntor-exclusivo-resposta').value;
const armodelo = document.getElementById('arcondicionado-etiqueta-modelo-resposta').value;
const arquedaenergia = document.getElementById('arcondicionado-queda-energia-resposta').value;
const arcontrole = document.getElementById('controle-remoto-resposta').value;
const arfiltro = document.getElementById('filtro-resposta').value;
const armanu = document.getElementById('manutencao-resposta').value;
const resolutionConsu = document.getElementById('informado-consumidor-resposta').value;

let copiedText = `${resolutionConsu}\n
➤ | AR-CONDICIONADO`;

if (voltagemTomada !== '') {
copiedText += `\n           • VOLTAGEM DA TOMADA: ${voltagemTomada}`;
}

if (usoAdaptador !== '') {
copiedText += `\n           • USO DE ADAPTADOR/EXTENSÃO: ${usoAdaptador}`;
}

if (arcobre !== '') {
copiedText += `\n           • TUBULAÇÃO DE COBRE: ${arcobre}`;
}

if (armetragem !== '') {
copiedText += `\n           • METRAGEM TUBULAÇÃO (3M – 15M): ${armetragem}`;
}

if (ardisjuntor !== '') {
copiedText += `\n           • DISJUNTOR EXCLUSIVO: ${ardisjuntor}`;
}

if (armodelo !== '') {
copiedText += `\n           • ETIQUETA CONTENDO O MODELO E/OU N° DE SÉRIE: ${armodelo}`;
}

if (arquedaenergia !== '') {
copiedText += `\n           • QUEDA DE ENERGIA: ${arquedaenergia}`;
}

if (arcontrole !== '') {
copiedText += `\n           • CONTROLE REMOTO: ${arcontrole}`;
}

if (arfiltro !== '') {
copiedText += `\n           • LIMPEZA DO FILTRO: ${arfiltro}`;
}

if (armanu !== '') {
copiedText += `\n           • MANUTENÇÃO PERIÓDICA: ${armanu}`;
}

copyToClipboard(copiedText);

}

// COPIAR POWERBOT

function copyPowerBot() {
const voltagemTomada = document.getElementById('powerbot-tomada-voltagem-resposta').value;
const usoAdaptador = document.getElementById('powerbot-adaptador-extensao-resposta').value;
const powernivel = document.getElementById('powerbot-nivelamento-resposta').value;
const pwmodelo = document.getElementById('powerbot-etiqueta-modelo-resposta').value;
const pwcontrole = document.getElementById('powerbotcontrole-remoto-resposta').value;
const pwlimpeza = document.getElementById('powerbot-limpeza-resposta').value;
const resolutionConsu = document.getElementById('informado-consumidor-resposta').value;

let copiedText = `${resolutionConsu}\n
➤ | ASPIRADOR DE PÓ`;

if (voltagemTomada !== '') {
copiedText += `\n           • VOLTAGEM DA TOMADA: ${voltagemTomada}`;
}

if (usoAdaptador !== '') {
copiedText += `\n           • USO DE ADAPTADOR/EXTENSÃO: ${usoAdaptador}`;
}

if (powernivel !== '') {
copiedText += `\n           • ESTAÇÃO DE LIMPEZA EM UM LOCAL NIVELADO: ${powernivel}`;
}

if (pwmodelo !== '') {
copiedText += `\n           • ETIQUETA CONTENDO O MODELO E/OU N° DE SÉRIE: ${pwmodelo}`;
}

if (pwcontrole !== '') {
copiedText += `\n           • CONTROLE REMOTO: ${pwcontrole}`;
}

if (pwlimpeza !== '') {
copiedText += `\n           • LIMPEZA DE MATERIAIS ESTRANHOS: ${pwlimpeza}`;
}

copyToClipboard(copiedText);

}

// COPIAR LAVA-LOUÇAS

function copyLavaLouca() {
const voltagemTomada = document.getElementById('louca-tomada-voltagem-resposta').value;
const usoAdaptador = document.getElementById('louca-adaptador-extensao-resposta').value;
const loucanivel = document.getElementById('louca-nivelamento-resposta').value;
const loucadreno = document.getElementById('louca-dreno-resposta').value;
const loucamodelo = document.getElementById('louca-etiqueta-modelo-resposta').value;
const loucasolvente = document.getElementById('louca-solventes-resposta').value;
const loucaborracha = document.getElementById('loucaborracha-porta-resposta').value;
const loucaveda = document.getElementById('loucavedacao-porta-resposta').value;
const loucafiltro = document.getElementById('louca-filtro-resposta').value;
const resolutionConsu = document.getElementById('informado-consumidor-resposta').value;

let copiedText = `${resolutionConsu}\n
➤ | LAVA-LOUÇAS`;

if (voltagemTomada !== '') {
copiedText += `\n           • VOLTAGEM DA TOMADA: ${voltagemTomada}`;
}

if (usoAdaptador !== '') {
copiedText += `\n           • USO DE ADAPTADOR/EXTENSÃO: ${usoAdaptador}`;
}

if (loucanivel !== '') {
copiedText += `\n           • NIVELAMENTO: ${loucanivel}`;
}

if (loucadreno !== '') {
copiedText += `\n           • MANGUEIRA DE DRENAGEM: ${loucadreno}`;
}

if (loucamodelo !== '') {
copiedText += `\n           • ETIQUETA CONTENDO O MODELO E/OU N° DE SÉRIE: ${loucamodelo}`;
}

if (loucasolvente !== '') {
copiedText += `\n           • USOU SOLVENTES OU PRODUTOS DE LIMPEZA ABRASIVOS: ${loucasolvente}`;
}

if (loucaborracha !== '') {
copiedText += `\n           • BORRACHA DA PORTA: ${loucaborracha}`;
}

if (loucaveda !== '') {
copiedText += `\n           • VEDAÇÃO DA PORTA: ${loucaveda}`;
}

if (loucafiltro !== '') {
copiedText += `\n           • LIMPEZA DO FILTRO: ${loucafiltro}`;
}

copyToClipboard(copiedText);

}

// COPIAR ORDEM DE SERVIÇO

function copyOrdemServico() {
    const modelo = document.getElementById('modelo-resposta').value;
    const numeroSerie = document.getElementById('numero-serie-resposta').value;
    const notaFiscal = document.getElementById('nota-fiscal-resposta').value;
    const emGarantia = document.getElementById('garantia-resposta').value;
    const dataCompraElement = document.getElementById('data-compra-resposta');
    const dataCompraValue = dataCompraElement.value;

    let dataCompra = '';

    if (dataCompraValue) {
    const [ano, mes, dia] = dataCompraValue.split('-');
    dataCompra = `${dia}/${mes}/${ano}`;
    }

    if (modelo !== '') {
    copiedText += `\n           • MODELO: ${modelo}`;
    }

    if (numeroSerie !== '') {
    copiedText += `\n           • N° DE SÉRIE: ${numeroSerie}`;
    }

    if (notaFiscal !== '') {
    copiedText += `\n           • N° NOTA FISCAL: ${notaFiscal}`;
    }

    if (dataCompra !== '') {
    copiedText += `\n           • DATA DA COMPRA: ${dataCompra}`;
    }

    if (emGarantia !== '') {
    copiedText += `\n           • GARANTIA: ${emGarantia}`;
    }

    let copiedText += `\n
            CLIENTE CIENTE QUE:
                FORA DOS PADRÕES DE INSTALAÇÃO VISITA SERÁ COBRADA;
                EM CASO DE INEXISTÊNCIA DE DEFEITO VISITA SERÁ COBRADA;
                FORA DE GARANTIA - A VISITA, PEÇAS E MÃO DE OBRA SERÃO COBRADAS;
                PRAZO DE 24 HORAS ÚTEIS PARA CONTATO DA ASSISTÊNCIA TÉCNICA;
                NO ATO DA VISITA TÉCNICA DEVERÁ TER A NOTA FISCAL EM MÃOS.`;

    copyToClipboard(copiedText);

}

// FIM - FUNÇÃO COPIAR TEXTO

// INICIO - SCRIPT PARA OCULTAR LAVADORA, REFRIGERADOR, ACN, POWERBOT E LAVA-LOUÇAS

    function toggleContent(id) {
        var content = document.getElementById(id);
        var buttons = document.getElementsByClassName('toggle-button');
        var isContentVisible = content.style.display === 'block';

        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            var targetId = button.getAttribute('onclick').replace("toggleContent('", "").replace("')", "");
            var targetContent = document.getElementById(targetId);

            if (targetContent !== content) {
            targetContent.style.display = 'none';
            }
        }

        if (!isContentVisible) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }

// FIM - SCRIPT PARA OCULTAR LAVADORA, REFRIGERADOR, ACN, POWERBOT E LAVA-LOUÇAS
