const mongoose = require('mongoose');

const departamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Departamento = mongoose.model('Departamento', departamentoSchema);

module.exports = Departamento;
