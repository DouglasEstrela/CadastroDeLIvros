const livrosCadastrados = []

function cadastrarLivro(titulo, autor, ano){
    const livro = {
        titulo: titulo,
        autor: autor,
        ano: ano
    }

    if(typeof titulo === 'string' && typeof autor === 'string' && typeof ano === 'number'){
        livrosCadastrados.push(livro)
        console.log(`O livro ${titulo.toUpperCase()} foi cadastrado com sucesso`)
    }else{
        console.log("Ops, voce preencheu algum campo errado!")
    }
}

function listarLivros() {
    if (livrosCadastrados.length === 0) {
        console.log("O cadastro de livros está vazio.");
    } else {
        console.log("\n--- Lista de Livros Cadastrados ---");
        for (let i = 0; i < livrosCadastrados.length; i++) {
            const livro = livrosCadastrados[i];
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
        }
        console.log("-----------------------------------\n");
    }
}

cadastrarLivro("Capitaes De Areia", "Jorge Amado", 1980)
cadastrarLivro("Capitaes De Barro", "Jorge Amado", 1980)
cadastrarLivro("Capitaes De vidro", "Jorge Amado", 1980)

listarLivros()




