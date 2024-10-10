const prompt = require("prompt-sync")({ sigint: true });

// Importar os módulos dos submenus
const { NotasMenu } = require("./Notas");
const { MatriculaMenu } = require("./Matricula");
const { HorarioMenu } = require("./Horario");
const { FinanceiroMenu } = require("./Financeiro");
const { BibliografiaMenu } = require("./Bibliografia");
const { SuporteMenu } = require("./Suporte");

// Função para exibir o menu principal
function MainMenu() {
    console.log("\nMenu Principal - Faculdade:");
    console.log("1. Consultar Notas");
    console.log("2. Informações de Matrícula");
    console.log("3. Horário das Aulas");
    console.log("4. Financeiro");
    console.log("5. Bibliografia e Materiais");
    console.log("6. Suporte Acadêmico");
    console.log("7. Sair");
}

// Função principal
function main() {
    let option = '';
    
    while (option !== '7') {
        MainMenu();
        option = prompt("Escolha uma opção: ");
        
        switch (option) {
            case '1':
                NotasMenu(prompt);
                break;
            case '2':
                MatriculaMenu(prompt);
                break;
            case '3':
                HorarioMenu(prompt);
                break;
            case '4':
                FinanceiroMenu(prompt);
                break;
            case '5':
                BibliografiaMenu(prompt);
                break;
            case '6':
                SuporteMenu(prompt);
                break;
            case '7':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

main();
