function Menu() {
    console.log("\nConsultar Notas:");
    console.log("1. Ver notas do semestre atual");
    console.log("2. Ver histórico acadêmico");
    console.log("3. Ver desempenho por disciplina");
    console.log("4. Voltar ao menu principal");
}

function NotasMenu(prompt) {
    let notasOption = '';
    while (notasOption !== '4') {
        Menu();
        notasOption = prompt("Escolha uma opção: ");
        
        switch (notasOption) {
            case '1':
                console.log("Nota do semestre atual: 8.5");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '2':
                console.log("Histórico acadêmico: 8.5, 7.5, 9.0");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '3':
                console.log("Desempenho por disciplina: Codding - 8.5, Banco de dados - 7.5, Gestão de Projetos - 9.0, Programação Web - 8.0");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '4':
                console.log("Voltando ao menu principal...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Exportar as funções
module.exports = { NotasMenu };
