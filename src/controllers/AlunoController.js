// src/controllers/AlunoController.js
const Aluno = require('../models/Aluno');

async function create(req, res) {
    try {
        const { cpf, email } = req.body;
        const alunoExistente = await Aluno.findOne({ $or: [{ cpf }, { email }] });

        if (alunoExistente) {
            return res.status(400).json({ mensagem: 'Aluno com este CPF ou email já existe' });
        }

        const aluno = new Aluno(req.body);
        const alunoCriado = await aluno.save();
        res.status(201).json(alunoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar aluno', error });
    }
}

async function getAll(req, res) {
    try {
        const alunos = await Aluno.find();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar alunos', error });
    }
}

async function getById(req, res) {
    try {
        const aluno = await Aluno.findById(req.params.id);
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar aluno', error });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const alunoAtualizado = await Aluno.findByIdAndUpdate(id, req.body, { new: true });

        if (alunoAtualizado) {
            res.json(alunoAtualizado);
        } else {
            res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar aluno', error });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const alunoExcluido = await Aluno.findByIdAndDelete(id);

        if (alunoExcluido) {
            res.json({ mensagem: 'Aluno excluído com sucesso', alunoExcluido });
        } else {
            res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir aluno', error });
    }
}

async function addNota(req, res) {
    try {
        const { id } = req.params;
        const { curso, nota } = req.body;

        const aluno = await Aluno.findById(id);
        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        aluno.notas.push({ curso, nota });
        await aluno.save();

        res.status(200).json(aluno);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao adicionar nota', error });
    }
}

async function calcularMedia(req, res) {
    try {
        const { id } = req.params;
        const aluno = await Aluno.findById(id);

        if (!aluno) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado' });
        }

        const notas = aluno.notas;
        if (notas.length === 0) {
            return res.status(200).json({ mensagem: 'Nenhuma nota registrada para o aluno', media: 0 });
        }

        const soma = notas.reduce((total, nota) => total + nota.nota, 0);
        const media = soma / notas.length;

        res.json({ media });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao calcular média', error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    addNota,
    calcularMedia
};
