require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())

app.get('/hello', (req, res)=>{
    res.json('Hello')
})

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@minhaapi.pa4ylzp.mongodb.net/?retryWrites=true&w=majority&appName=MinhaApi`)
.then(()=> console.log('Conectado ao meu MongoDB!'))
.catch((err)=> console.log('Erro ao  conectar ao MongoDB: ', err))
    


app.listen(3000, ()=>{
    console.log('Api rodando em http://localhost:3000')
})