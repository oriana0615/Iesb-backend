
const express = require('express')


const app = express()

// Middlewares:

app.use(express.json())

// Roteamento:

const livrosRouter = require('./routes/livros')


app.use(livrosRouter)

// Inicialização do Servidor:

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})