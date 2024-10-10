function Menu() {
    console.log("\nFinanceiro:");
    console.log("1. Consultar boletos em aberto");
    console.log("2. Histórico de pagamentos");
    console.log("3. Informações sobre bolsas");
    console.log("4. Negociação de dívidas");
    console.log("5. Voltar ao menu principal");
}

function FinanceiroMenu(prompt) {
    let financeiroOption = '';
    while (financeiroOption !== '5') {
        Menu();
        financeiroOption = prompt("Escolha uma opção: ");
        
        switch (financeiroOption) {
            case '1':
                console.log("Consultando boletos em aberto...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '2':
                console.log("Exibindo histórico de pagamentos...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '3':
                console.log("Exibindo informações sobre bolsas...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '4':
                console.log("Negociando dívidas...");
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

module.exports = { FinanceiroMenu };
