function Menu() {
    console.log("\nHorário das Aulas:");
    console.log("1. Ver horário semanal");
    console.log("2. Atualizações no horário");
    console.log("3. Consultar professor por disciplina");
    console.log("4. Ver dias de prova");
    console.log("5. Voltar ao menu principal");
}

function HorarioMenu(prompt) {
    let horarioOption = '';
    while (horarioOption !== '5') {
        Menu();
        horarioOption = prompt("Escolha uma opção: ");
        
        switch (horarioOption) {
            case '1':
                console.log("Exibindo horário semanal...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '2':
                console.log("Exibindo atualizações no horário...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '3':
                console.log("Consultando professor por disciplina...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '4':
                console.log("Exibindo dias de prova...");
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

module.exports = { HorarioMenu };
