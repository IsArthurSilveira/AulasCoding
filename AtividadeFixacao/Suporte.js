function Menu() {
    console.log("\nSuporte Acadêmico:");
    console.log("1. Falar com a coordenação");
    console.log("2. Acessar tutor online");
    console.log("3. Solicitar documentos acadêmicos");
    console.log("4. FAQ acadêmico");
    console.log("5. Voltar ao menu principal");
}

function SuporteMenu(prompt) {
    let suporteOption = '';
    while (suporteOption !== '5') {
        Menu();
        suporteOption = prompt("Escolha uma opção: ");
        
        switch (suporteOption) {
            case '1':
                console.log("Sua coordenadora é Heloysa. Entre em contato pelo e-mail : helo@gmail.com");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '2':
                console.log("Acessando tutor online...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '3':
                console.log("Solicitando documentos acadêmicos...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '4':
                console.log("Acessando FAQ acadêmico...");
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

module.exports = { SuporteMenu };
