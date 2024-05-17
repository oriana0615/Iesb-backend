//nuevo q estoy criando 


const produto = require('../models/produto')


async function create(req, res){

try{

const produtoCorpo = new produto(req.body)
const produtoSalvar = await produtoCorpo.save()

res.status(200).json(produtoSalvar)


}

catch(error){
    console.error('Error ao salvar no banco de dados!', error)
    res.status(400).json({
        mensagem: "erro ao criar um novo produto",
        erro: error.message
    })
}
}

async function getAll(req, res){

res.json(await produto.find())


}


async function getById(req, res) {
    const procurarID = await produto.findById(req.params.id)
    if(procurarID){
        res.status(200).json(procurarID)
}
else{
    res.status(404).json({
        mensagem: "Produto não encontrado!"})

        }

}


async function update (req, res){

try{

const atualizarProduto = await produto.findByIdAndUpdate(req.params.id, req.body)
res.status(200).json(atualizarProduto)

}

catch(error){
    console.error('Erro ao tentar atualizar no banco de dados', error)
    res.status(400).json({mensagem:"Produto não Atualizado"})
}
}




async function deletar (req, res){
const deletarProduto = await produto.findByIdAndDelete(req.params.id)
res.status(200).json({mensagem:"Produto excluido com sucesso!"})
}
















module.exports = {
    create,
    getAll,
    getById,
    update,
    deletar
    
}