    // INICIO - INFO DEVELOPER

    // Função para exibir informações da página
    function showInfo() {
        Swal.fire({
            title: '<p class="dev-color2">Informação</p>',
            html: '<p class="dev-color2">Last Version: 23.07.16.Dev</p><br> <p class="dev-color">Essa página não salva dados externamente!</p><br><p class="dev-color"><span class="developer-text" onclick="showExportDados()">Importação/Exportação de Dados</span></p><br> <p class="dev-color2">Dúvidas? Contate o <span class="developer-text" onclick="showDeveloperMessage()">Desenvolvedor!</span></p>',
            icon: 'info',
            customClass: 'dev-info'  
        });
    }

    // Função para exibir a mensagem do desenvolvedor
    function showDeveloperMessage() {
        Swal.fire({
            title: '<p class="dev-color2">Desenvolvedor</p>',
            html: '<p class="dev-color2">Felipe Mendes - RE: 1460500</p> <span style="color: #FF9C99;">Entre em contato via Teams</span>',
            confirmButtonText: 'Fechar',
            customClass:'dev-info' 
        })
    }

    // Função para exibir as configurações
    function showExportDados() {
        Swal.fire({
            title: '<p class="dev-color2">CONFIGURAÇÕES</p>',
            html: '<p style="color: #FF9C99;">Selecione uma opção abaixo!</p><br>   <i onclick="extractData()" title="Exportar dados!" style="margin-right: 10px;" class="dev-color2 button-cursor fa-solid fa-cloud-arrow-up"></i>     <i onclick="insertData()" title="Importar dados!" style="margin-right: 10px;" class="dev-color2 button-cursor fa-solid fa-cloud-arrow-down"></i>    <i onclick="clearData()" title="Deletar Dados" style="margin-right: 10px;" class="dev-color2 button-cursor fa-solid fa-trash"></i>',
            confirmButtonText: 'Fechar',
            customClass:'dev-info' 
        })
    }

    // FIM - INFO DEVELOPER

    // INICIO - FILTRO DA TABELA

    $(document).ready(function() {
        var protocols = JSON.parse(localStorage.getItem("protocols")) || [];
        var today = new Date().toLocaleDateString('pt-BR');

        // Função para filtrar com base no valor de pesquisa
        function filterTable(searchValue) {
            $("tbody tr").each(function() {
                var protocolText = $(this).find("td:first-child").text().toLowerCase();
                var dateText = $(this).find("td:nth-child(2)").text();

                if (protocolText.includes(searchValue) || dateText.includes(searchValue)) {
                    $(this).removeClass("hidden");
                } else {
                    $(this).addClass("hidden");
                }
            });

            calculateAverageDuration(searchValue); // Recalcular o tempo médio de duração após aplicar o filtro
        }

        // Filtrar na data atual ao carregar a página
        filterTable(today);

        // Evento input do campo de pesquisa
        $("#searchInput").on("input", function() {
            var searchValue = $(this).val().toLowerCase();

            if (searchValue === "") {
                filterTable(today); // Restaurar o filtro da data de hoje
            } else if (searchValue === "all") {
                $("tbody tr").removeClass("hidden"); // Mostrar todos os produtos
                sortTableByDate(); // Ordenar por data
            } else {
                filterTable(searchValue);
            }
        });

        // Função para ordenar a tabela por data
        function sortTableByDate() {
            var rows = $("tbody tr").get();
            rows.sort(function(a, b) {
                var dateA = new Date($(a).find("td:nth-child(2)").text());
                var dateB = new Date($(b).find("td:nth-child(2)").text());
                return dateB - dateA;
            });
            $.each(rows, function(index, row) {
                $("tbody").append(row);
            });
        }

        // Função para calcular o tempo médio de duração dos protocolos
        function calculateAverageDuration(date) {
            var filteredProtocols = protocols.filter(function(protocol) {
                return protocol.date === date && !$("tbody tr[data-date='" + date + "']").hasClass("hidden");
            });

            if (filteredProtocols.length > 0) {
                var totalDuration = filteredProtocols.reduce(function(sum, protocol) {
                    return sum + parseDuration(protocol.duration);
                }, 0);

                var averageDuration = totalDuration / filteredProtocols.length;
                var averageDurationFormatted = formatDuration(averageDuration);
                document.getElementById("averageDuration").innerText = averageDurationFormatted;
            } else {
                document.getElementById("averageDuration").innerText = "N/A";
            }
        }

        // Função auxiliar para converter a duração no formato "HH:MM:SS" para um valor numérico em horas
        function parseDuration(duration) {
            var parts = duration.split(":");
            var hours = parseInt(parts[0]);
            var minutes = parseInt(parts[1]);
            var seconds = parseInt(parts[2]);

            return hours + (minutes / 60) + (seconds / 3600);
        }

        // Função auxiliar para formatar a duração em horas, minutos e segundos
        function formatDuration(duration) {
            var hours = Math.floor(duration);
            var minutes = Math.floor((duration - hours) * 60);
            var seconds = Math.floor(((duration - hours) * 60 - minutes) * 60);

            return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        }
    });

    // FIM - FILTRO DA TABELA

    // INICIO - INSERIR NOVO PROTOCOLO

    document.addEventListener('DOMContentLoaded', function() {

        // Verifica se existem protocolos salvos no LocalStorage e exibe na tabela
        var protocols = JSON.parse(localStorage.getItem("protocols")) || [];
        protocols.forEach(function(protocol) {
            createTableRow(protocol);
        });

        // Função para criar uma nova linha na tabela
        function createTableRow(protocol) {

            var tableBody = document.querySelector("tbody");
            var newRow = document.createElement("tr");
            var rowId = "row-" + protocol.id; // Cria uma string única para o identificador
            newRow.setAttribute("data-id", rowId);

            var protocolCell = document.createElement("td");
            protocolCell.innerText = protocol.protocol;
            protocolCell.classList.add("protocol-cursor");

            var dateCell = document.createElement("td");
            dateCell.innerText = protocol.date;

            var durationCell = document.createElement("td");
            durationCell.innerText = protocol.duration;

            var actionsCell = document.createElement("td");
            actionsCell.className = "select";
            actionsCell.innerHTML = '<i title="Excluir" class="button-cursor fa-solid fa-xmark"></i>';

            // Adiciona evento de clique no botão "Excluir"
            var deleteButton = actionsCell.querySelector(".fa-xmark");
            deleteButton.addEventListener("click", function() {

                var row = this.closest("tr"); // Localiza a linha pai do botão clicado
                var rowId = row.getAttribute("data-id"); // Obtém o identificador único da linha

                // Remove a linha da tabela
                row.remove();

                // Remove o item correspondente do LocalStorage
                var protocols = JSON.parse(localStorage.getItem("protocols")) || [];
                protocols = protocols.filter(function(protocol) {

                    return protocol.id !== parseInt(rowId.replace("row-", "")); // Remove "row-" e converte para número
                });

                localStorage.setItem("protocols", JSON.stringify(protocols));
            });

            newRow.appendChild(protocolCell);
            newRow.appendChild(dateCell);
            newRow.appendChild(durationCell);
            newRow.appendChild(actionsCell);

            tableBody.appendChild(newRow);
        }

        // Função para inserir o protocolo na tabela
        function insertProtocol() {
            var protocolDiv = document.createElement("div");
            protocolDiv.classList.add("protocol-form"); // Adiciona a classe "protocol-form" à <div>

            protocolDiv.innerHTML = `
                <label class="input-label">Protocolo:</label><br>
                <input type="text" id="protocolInput" class="input-field" placeholder="Digite o Protocolo"><br><br>

                <label class="input-label">Data:</label><br>
                <input type="date" id="dateInput" class="input-field"><br><br>

                <label class="input-label">Duração:</label><br>
                <input type="time" step="2" id="durationInput" class="input-field" placeholder="00:00:00"><br><br>

                <label class="input-label">Descrição:</label><br>
                <input type="text" id="descriptionInput" class="input-field" placeholder="Qual o problema do cliente?"><br><br>

                <button id="submitButton" class="submit-button">Inserir</button>`;

            // Adiciona evento de clique no botão "Inserir"
            var submitButton = protocolDiv.querySelector("#submitButton");
            submitButton.addEventListener("click", function() {
                var protocolInput = protocolDiv.querySelector("#protocolInput");
                var dateInput = protocolDiv.querySelector("#dateInput");
                var durationInput = protocolDiv.querySelector("#durationInput");
                var descriptionInput = protocolDiv.querySelector("#descriptionInput");

                var protocol = protocolInput.value;
                var date = formatDate(dateInput.value); // Formata a data
                var duration = durationInput.value;
                var description = descriptionInput.value;

                if (protocol && date && duration) {
                    var protocols = JSON.parse(localStorage.getItem("protocols")) || [];
                    var newProtocol = {
                        id: Date.now(),
                        protocol: protocol,
                        date: date,
                        duration: duration,
                        description: description,
                    };

                    protocols.push(newProtocol);
                    localStorage.setItem("protocols", JSON.stringify(protocols));

                    createTableRow(newProtocol);

                    protocolDiv.remove(); // Remove a <div> do formulário após inserir o protocolo
                    document.body.classList.remove("body-dark");
                    darkOverlay.remove();
                }
            });

            document.body.appendChild(protocolDiv);

            // Adiciona a classe "dark-overlay" ao body
            document.body.classList.add("body-dark");

            // Cria a camada de escuridão e adiciona a classe "dark-overlay" à <div>
            var darkOverlay = document.createElement("div");
            darkOverlay.classList.add("dark-overlay");
            document.body.appendChild(darkOverlay);

            document.addEventListener("click", function(event) {
                var targetElement = event.target; // Elemento clicado
                if (!protocolDiv.contains(targetElement) && targetElement !== insertButton) {
                    protocolDiv.remove(); // Remove a <div> do formulário
                    document.body.classList.remove("body-dark");
                    darkOverlay.remove();
                }
            });
        }

        // Função para formatar a data no formato "DIA/MÊS/ANO"
        function formatDate(date) {
            const [ano, mes, dia] = date.split("-");
            return `${dia}/${mes}/${ano}`;
        }

        // Adiciona evento de clique no botão "Inserir"
        var insertButton = document.querySelector(".fa-plus");
        insertButton.addEventListener("click", insertProtocol);

    });
    
    // FIM - INSERIR NOVO PROTOCOLO

    // INICIO - MOSTRAR DESCRIÇÃO DO PROTOCOLO

    $(document).ready(function() {

        // Adicionar evento de clique aos números do protocolo
        $("tbody").on("click", "tr td:first-child", function() {
            var protocolNumber = $(this).text();
            var protocol = getProtocolByNumber(protocolNumber);

            if (protocol) {
                // Preencher o painel de detalhes com as informações do protocolo
                $("#detail-protocol").text(protocol.protocol);
                $("#detail-date").text(protocol.date);
                $("#detail-duration").text(protocol.duration);
                $("#detail-description").text(protocol.description);

                // Abrir o painel de detalhes
                $("html, body").addClass("open");
                $(".detail").addClass("open");
            }
        });

        // Adicionar evento de clique ao botão "Fechar" do painel de detalhes
        $(".detail .close").on("click", function() {
            // Fechar o painel de detalhes
            $("html, body").removeClass("open");
            $(".detail").removeClass("open");
        });

        // Função auxiliar para obter os dados do protocolo com base no número
        function getProtocolByNumber(protocolNumber) {
            var protocols = JSON.parse(localStorage.getItem("protocols")) || [];
            return protocols.find(function(protocol) {
                return protocol.protocol === protocolNumber;
            });
        }
    });

    // FIM - MOSTRAR DESCRIÇÃO DO PROTOCOLO

    // INICIO - CONFIGURAÇÕES - EXTRAÇÃO, IMPORTAÇÃO E EXCLUSÃO DE DADOS

    // Função para extrair os dados do LocalStorage
    function extractData() {
        var protocols = localStorage.getItem("protocols");
        if (protocols) {
            // Copiar os dados para a área de transferência
            navigator.clipboard.writeText(protocols)
                .then(function() {
                    // Dados copiados com sucesso
                    alert("Dados extraídos e copiados para a área de transferência!");
                })
                .catch(function() {
                    // Erro ao copiar os dados
                    alert("Erro ao copiar os dados!");
                });
        } else {
            // Não há dados salvos no LocalStorage
            alert("Não há dados salvos no LocalStorage!");
        }
    }

    // Adicionar evento de clique ao botão de extração
    var extractButton = document.getElementById("exportButton");
    extractButton.addEventListener("click", extractData);

    // Função para inserir os dados no LocalStorage
    function insertData() {
        Swal.fire({
            title: '<p class="dev-color2" style="font-size: 24px;">Insira os Dados!</p>',
            html: '<input type="text" id="dataInput" class="swal2-input" placeholder="Cole os dados aqui"> <br><br><p class="dev-color2" style="font-size: 16px; color: #FF9C99;">ATENÇÃO! Essa ação é irreversível!!</p> <br><p class="dev-color2">Você tem certeza disso?</p>',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Salvar',
            focusConfirm: false,
            customClass:'dev-info',

            preConfirm: () => {
                const dataInput = document.getElementById('dataInput');
                const data = dataInput.value.trim(); // Remover espaços em branco no início e no final

                // Verificar se os dados são válidos
                if (data) {
                    let newData;
                    try {
                        // Verificar se o código é para substituir os dados existentes
                        if (data.startsWith("[") && data.endsWith("]")) {
                            newData = JSON.parse(data);
                        } else {
                            // Recuperar dados existentes do LocalStorage
                            const existingData = JSON.parse(localStorage.getItem('protocols')) || [];

                            // Converter o novo dado para objeto
                            const newObject = JSON.parse(data);

                            // Adicionar o novo dado à lista existente
                            existingData.push(newObject);

                            // Atualizar os dados no LocalStorage
                            newData = existingData;
                        }

                        // Salvar os dados atualizados no LocalStorage
                        localStorage.setItem('protocols', JSON.stringify(newData));

                        return data;
                    } catch (error) {
                        Swal.showValidationMessage('Ops, algo deu errado! Tente novamente!');
                        return false;
                    }
                } else {
                    Swal.showValidationMessage('Por favor, insira os dados');
                    return false;
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '<p class="dev-color2">Sucesso!</p>',
                    html: '<p class="dev-color2">Dados inseridos com sucesso!<br><br> Recarregue a página!!</p>',
                    icon: 'success',
                    customClass:'dev-info',
                });
            }
        });
    }

    // Adicionar evento de clique ao botão de inserção
    var insertButton = document.getElementById('insertButton');
    insertButton.addEventListener('click', insertData);

    // Função para limpar a chave "protocols" no LocalStorage
    function clearData() {
        Swal.fire({
            title: '<p class="dev-color2">Limpar Dados</p>',
            html: '<p class="dev-color2" style="font-size: 16px; color: #FF9C99;">ATENÇÃO! Essa ação é irreversível!!</p> <br><p class="dev-color2">Você tem certeza disso?</p>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar',
            customClass:'dev-info',
        }).then((result) => {
            if (result.isConfirmed) {
                // Limpar a chave "protocols" no LocalStorage
                localStorage.removeItem('protocols');

                Swal.fire({
                    title: '<p class="dev-color2">Sucesso!</p>',
                    html: '<p class="dev-color2">Todos os dados foram deletados!</p>',
                    icon: 'success',
                    customClass:'dev-info',
                });
            }
        });
    }

    // Adicionar evento de clique ao botão de limpeza
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearData);

    // FIM - CONFIGURAÇÕES - EXTRAÇÃO, IMPORTAÇÃO E EXCLUSÃO DE DADOS
