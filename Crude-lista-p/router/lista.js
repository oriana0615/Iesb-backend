const express = require('express')
const router = express.Router()

//minha lógica

listaPessoas = [
    {   id: 1,
        nome: "Carlos",
        idade: 30,
        email: "Carlos@email.com",
        telefone:"61900010002"
    },
    {
        id: 2,
        nome: "Marcelo",
        idade: 14,
        email: "Marcelopaoevinho@gmail.com",
        telefone: "619846536"
    },
    {   id: 3,
        nome: "Oriana",
        idade: 27,
        email: "Oriana@gmail.com",
        telefone: 33749506
    }
] 

//buscar
router.get('/lista', (req, res)=>{
    res.json(listaPessoas)


})

//buscando pelo id
router.get('/lista/:id', (req, res)=>{
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoas[index]
    res.json(pessoa)
})

//cadastrando

router.post('/lista', (req, res)=>{
    const novaPessoa = req.body
    listaPessoas.length
    
    const pessoa = {
        id: listaPessoas.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    console.log(pessoa)
    listaPessoas.push(pessoa)
    res.json({mensagem:'Pessoa cadastrada com sucesso!'})

})

//Deletando
router.delete('/lista/:id', (req, res)=>{
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    listaPessoas.splice(index, 1)
    res.json({mensagem:"pessoa excluída com sucesso!"})



})

//Atualizando
router.put('/lista/:id', (req, res)=>{
    const id = req.params.id
    const atualizar = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    
    const pessoaAtualizada = {
        id: id,
        nome: atualizar.nome,
        idade: atualizar.idade,
        email: atualizar.email,
        telefone: atualizar.telefone
    }
    listaPessoas[index] = pessoaAtualizada
    res.json({mensagem:'pessoa atualizada com sucesso!'})
})


module.exports = router