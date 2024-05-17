const Cargo = require('../models/Cargo')


async function create(req, res){

try{

const cargoCorpo = new Cargo(req.body)
const cargoSalvar = await cargoCorpo.save()

res.status(200).json(cargoSalvar)


}

catch(error){
    console.error('Error ao salvar no banco de dados!', error)
    res.status(400).json({
        mensagem: "erro ao criar um novo cargo",
        erro: error.message
    })
}
}

async function getAll(req, res){

res.json(await Cargo.find())


}


async function getById(req, res) {
    const procurarID = await Cargo.findById(req.params.id)
    if(procurarID){
        res.status(200).json(procurarID)
}
else{
    res.status(404).json({
        mensagem: "Cargo não encontrado!"})

        }

}


async function update (req, res){

try{

const atualizarCargo = await Cargo.findByIdAndUpdate(req.params.id, req.body)
res.status(200).json(atualizarCargo)

}

catch(error){
    console.error('Erro ao tentar atualizar no banco de dados', error)
    res.status(400).json({mensagem:"Cargo não Atualizado"})
}
}




async function deletar (req, res){
const deletarCargo = await Cargo.findByIdAndDelete(req.params.id)
res.status(200).json({mensagem:"cargo excluido com sucesso!"})
}
















module.exports = {
    create,
    getAll,
    getById,
    update,
    deletar
    
}