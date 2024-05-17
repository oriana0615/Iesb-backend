const mongoose = require('mongoose')

require('dotenv').config()

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSOWORD = process.env.DB_PASSOWORD
const DB_HOST =  process.env.DB_HOST
const DB_NAME= process.env.DB_NAME


function main(){


mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSOWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)

.then(()=>{
    console.log('Conectado ao banco de dados com sucesso!')
})
.catch(error => console.log('Erro ao conectar o banco de dados!', error))



}




module.exports = main