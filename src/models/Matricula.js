const mongoose = require('mongoose');

const matriculaSchema = new mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true
    },
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        required: true
    },
    professor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
        required: true
    },
    dataMatricula: {
        type: Date,
        required: true
    },
    dataConclusao: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const Matricula = mongoose.model('Matricula', matriculaSchema);

module.exports = Matricula;
