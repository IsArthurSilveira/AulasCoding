function Menu() {
    console.log("\nBibliografia e Materiais:");
    console.log("1. Ver bibliografia recomendada");
    console.log("2. Acessar materiais disponibilizados");
    console.log("3. Solicitar empréstimo de livro");
    console.log("4. Ver disponibilidade de livros na biblioteca");
    console.log("5. Voltar ao menu principal");
}

function BibliografiaMenu(prompt) {
    let bibliografiaOption = '';
    while (bibliografiaOption !== '5') {
        Menu();
        bibliografiaOption = prompt("Escolha uma opção: ");
        
        switch (bibliografiaOption) {
            case '1':
                console.log("Exibindo bibliografia recomendada...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '2':
                console.log("Acessando materiais disponibilizados...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '3':
                console.log("Solicitando empréstimo de livro...");
                prompt("Pressione qualquer tecla para continuar...");
                break;
            case '4':
                console.log("Verificando disponibilidade de livros na biblioteca...");
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

module.exports = { BibliografiaMenu };
