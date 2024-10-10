function Menu() {
    console.log("\nInformações de Matrícula:");
    console.log("1. Status da matrícula");
    console.log("2. Disciplinas matriculadas");
    console.log("3. Realizar ajustes de disciplinas");
    console.log("4. Data e prazos para rematrícula");
    console.log("5. Voltar ao menu principal");
}

function MatriculaMenu(prompt) {
    let matriculaOption = '';
    while (matriculaOption !== '5') {
        Menu();
        matriculaOption = prompt("Escolha uma opção: ");
        
        switch (matriculaOption) {
            case '1':
                console.log("Aluno Matriculado - 00000000");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '2':
                console.log("Exibindo disciplinas matriculadas...");
                prompt("Codding, Banco de Dados, Gestao de Projetos, Programacao Web");
                break;
            case '3':
                console.log("Nenhuma Disciplina para ajustar...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '4':
                console.log("Nenhuma data para rematricula...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '5':
                console.log("Voltando ao menu principal...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

module.exports = { MatriculaMenu };
