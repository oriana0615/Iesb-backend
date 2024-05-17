const express = require('express')
const app = express()
const PORT = 3000


const DBconfig = require('./db/conection')
DBconfig()

app.use(express.json())

const routes = require('./routes/routes')
app.use(routes)












app.listen(PORT, ()=>{
    console.log('Aplicação rodado na porta', PORT)
})


// criar modelo em model/produtos.js
// controllers criar as funcoes em produtoControllers
// crear as rotas para produto igual as de cargo