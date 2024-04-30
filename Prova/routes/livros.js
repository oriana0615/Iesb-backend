const express = require('express')

const router = express.Router()

let listaLivros = [ // Array para armazenar os dados dos livros
    {
        id: 1,
        titulo: "Primavera",
        autor: "Jorge Amado",
        editora: "Aureliano",
        ano: "2012",
        preco: 60.99
    },
    {
        id: 2,
        titulo: "Invierno",
        autor: "Antonio Machado",
        editora: "Estrela",
        ano: "2023",
        preco: 90.99
    },

    {
        id: 3,
        titulo: "Sol",
        autor: "Antonio Machado",
        editora: "Estrela",
        ano: "2023",
        preco: 90.99
    }
]

// READ -> Buscar todos os livros (get)
router.get('/livros', (req, res) => {
    res.json(listaLivros)
})

// READ -> Buscar de um livro por id
router.get('/livros/:id', (req, res) => {
    const id = req.params.id 
    const livros = listaLivros.find(livros => livros.id == id) // Busca o livro pelo ID
    if (livros) {
        return res.json(livros) // Retorna o livro encontrado
    }
    return res.status(404).json({ mensagem: "livro não encontrado!" }) // Retorna um erro se o livro não for encontrado
})

// CREATE -> cadastrar um livro (post) para enviar dados para o servidor para criar um novo recurso.
router.post('/livros', (req, res) => {
    const corpo = req.body // Extrai os dados do corpo da requisição

    // Verifica se todos os campos obrigatórios estão presentes
    if (!corpo.titulo || !corpo.editora || !corpo.ano || !corpo.preco || !corpo.autor) {
        return res.status(400).json({ mensagem: "Campos titulo, editora, ano, preco e autor são obrigatórios" })
    }

   
    const livro = {
        id: Math.round(Math.random() * 1000), // Gera um ID aleatório
        titulo: corpo.titulo,
        autor: corpo.autor,
        editora: corpo.editora,
        ano: corpo.ano,
        preco: corpo.preco
    }

    listaLivros.push(livro) // Adiciona o novo livro à lista de livro (push)
    return res.status(201).json({ 
        mensagem: "livro criado com sucesso!",
        livro
    })
})

// UPDATE -> Atualizar um livro (put) é usado para atualizar um recurso existente ou criar um novo recurso se ele não existir
router.put("/livros/:id", (req, res) => {
    const id = req.params.id // Extrai o ID do parâmetro da URL
    const corpo = req.body // Extrai os dados do corpo da requisição

    // Verifica se todos os campos obrigatórios estão presentes
    if (!corpo.titulo || !corpo.editora || !corpo.ano || !corpo.preco || !corpo.autor) {
        return res.status(400).json({ mensagem: "Campos titulo, autor, editora, modelo, ano e preco são obrigatórios" })
    }

    // Encontra o índice do livro na lista
    const index = listaLivros.findIndex(livro => livro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "livro não encontrado!" })
    }

    // Atualiza os dados do livro com os dados fornecidos
    const livroAtualizado = {
        id: Number(id), // Converte o ID para número
        titulo: corpo.titulo,
        autor: corpo.autor,
        editora: corpo.editora,
        ano: corpo.ano,
        preco: corpo.preco
    }

    listaLivros[index] = livroAtualizado // Correção: Atualiza o livro na lista

    return res.json({ // Retorna uma resposta de sucesso
        mensagem: "Livro atualizado com sucesso!",
        livroAtualizado
    })
})


// DELETE -> Excluir um livro
router.delete('/livros/:id', (req, res) => {
    const id = req.params.id // Extrai o ID do parâmetro da URL
    const index = listaLivros.findIndex(livro => livro.id == id) // Encontra o índice do livro na lista
    if (index == -1) {
        return res.status(404).json({ mensagem: "livro não encontrado!" })
    }
    listaLivros.splice(index, 1) // Remove o livro da lista
    res.json({ mensagem: `O livro ${id} foi excluído com sucesso!` }) // Retorna uma resposta de sucesso
})

// READ ->  Filtro para buscar todos livros de um determinado autor.
router.get('/livros/autor/:autor', (req, res) => {
    const autor = req.params.autor
    const livrosPorAutor = listaLivros.filter(livro => livro.autor.toUpperCase() == autor.toUpperCase())
    res.json(livrosPorAutor)
})

// READ -> Rota para calcular e retornar o preço médio de todos os livros da lista.


router.get('/livros/preco/medio', (req, res) => {
    // Verifica se há livros na lista
    if (listaLivros.length === 0) {
        return res.status(404).json({ mensagem: "Não há livros na lista" });
    }

    let valorTotal = 0;

    listaLivros.forEach(livro => { 
        valorTotal += livro.preco;
    });

    // Calcula o preço médio dos livros
    const precoMedio = valorTotal / listaLivros.length;

    res.json({
        quantidadeLivros: listaLivros.length,
        precoMedio: precoMedio.toFixed(2) 
    });
});



   










module.exports = router // Exporta o roteador para uso no aplicativo principal
