const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    dataContratacao: {
        type: Date,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: true
    },
    departamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departamento',
        required: true
    }
}, {
    timestamps: true
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
