// src/controllers/DesempenhoController.js
const Aluno = require('../models/Aluno');

async function calcularMediaNotas(alunoId) {
    const aluno = await Aluno.findById(alunoId).populate('notas.curso');
    if (!aluno) {
        throw new Error('Aluno não encontrado');
    }

    let somaNotas = 0;
    let totalNotas = 0;

    aluno.notas.forEach(notaObj => {
        somaNotas += notaObj.nota;
        totalNotas += 1;
    });

    return totalNotas === 0 ? 0 : somaNotas / totalNotas;
}

async function verificarPromocao(alunoId) {
    try {
        const media = await calcularMediaNotas(alunoId);
        const criterioPromocao = 7.0; // Média necessária para promoção
        const podeSerPromovido = media >= criterioPromocao;

        return { podeSerPromovido, media };
    } catch (error) {
        throw new Error(`Erro ao verificar promoção: ${error.message}`);
    }
}

module.exports = {
    calcularMediaNotas,
    verificarPromocao
};
