const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições em JSON
app.use(bodyParser.json());

// Estrutura de dados em memória para armazenar as pessoas
let pessoas = [
    { id: 1, nome: "João", idade: 20, email: "joao@email.com", telefone: "61900010002" }
];

// Rota para recuperar todas as pessoas
app.get('/pessoas', (req, res) => {
    res.status(200).json(pessoas);
});

// Rota para recuperar uma pessoa específica pelo ID
app.get('/pessoas/:id', (req, res) => {
    const pessoa = pessoas.find(p => p.id === parseInt(req.params.id));
    if (!pessoa) {
        return res.status(404).send('Pessoa não encontrada');
    }
    res.status(200).json(pessoa);
});

// Rota para adicionar uma nova pessoa
app.post('/pessoas', (req, res) => {
    if (!req.body.nome || !req.body.idade || !req.body.email || !req.body.telefone) {
        return res.status(400).send('Todos os atributos devem ser preenchidos');
    }
    const novaPessoa = {
        id: pessoas.length + 1, // Simples geração de ID incremental
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email,
        telefone: req.body.telefone
    };
    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa);
});

// Rota para atualizar uma pessoa existente pelo ID
app.put('/pessoas/:id', (req, res) => {
    const pessoa = pessoas.find(p => p.id === parseInt(req.params.id));
    if (!pessoa) {
        return res.status(404).send('Pessoa não encontrada');
    }
    if (!req.body.nome || !req.body.idade || !req.body.email || !req.body.telefone) {
        return res.status(400).send('Todos os atributos devem ser preenchidos');
    }
    pessoa.nome = req.body.nome;
    pessoa.idade = req.body.idade;
    pessoa.email = req.body.email;
    pessoa.telefone = req.body.telefone;
    res.status(200).json(pessoa);
});

// Rota para remover uma pessoa pelo ID
app.delete('/pessoas/:id', (req, res) => {
    const index = pessoas.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Pessoa não encontrada');
    }
    pessoas.splice(index, 1);
    res.status(204).send(); // Nenhum conteúdo, mas sucesso
});

// Inicializa o servidor para ouvir na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
