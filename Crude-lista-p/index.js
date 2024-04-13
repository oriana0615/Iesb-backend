const express = require('express')
const app = express()
const port = 3000


//midleware
app.use(express.json())


//rotas
const lista = require('./router/lista')
app.use(lista)








app.listen(3000, ()=>{
    console.log('Servidor rodando na porta http://localhost:3000')
})