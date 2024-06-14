const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    cargaHoraria: {
        type: Number,
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

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;
