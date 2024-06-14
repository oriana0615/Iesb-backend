// src/models/Aluno.js
const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
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
    dataNascimento: {
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
    },
    notas: [{
        curso: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Curso',
            required: true
        },
        nota: {
            type: Number,
            required: true
        }
    }]
}, {
    timestamps: true
});

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;
