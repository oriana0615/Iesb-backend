// src/controllers/ProfessorController.js
const Professor = require('../models/Professor');

async function create(req, res) {
    try {
        // Verificar se o professor já existe
        const { cpf, email } = req.body;
        const professorExistente = await Professor.findOne({ $or: [{ cpf }, { email }] });

        if (professorExistente) {
            return res.status(400).json({ mensagem: 'Professor com este CPF ou email já existe' });
        }

        const professor = new Professor(req.body);
        const professorCriado = await professor.save();
        res.status(201).json(professorCriado);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar professor', error });
    }
}

async function getAll(req, res) {
    try {
        const professores = await Professor.find();
        res.json(professores);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar professores', error });
    }
}

async function getById(req, res) {
    try {
        const professor = await Professor.findById(req.params.id);
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).json({ mensagem: 'Professor não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar professor', error });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const professorAtualizado = await Professor.findByIdAndUpdate(id, req.body, { new: true });

        if (professorAtualizado) {
            res.json(professorAtualizado);
        } else {
            res.status(404).json({ mensagem: 'Professor não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar professor', error });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const professorExcluido = await Professor.findByIdAndDelete(id);

        if (professorExcluido) {
            res.json({ mensagem: 'Professor excluído com sucesso', professorExcluido });
        } else {
            res.status(404).json({ mensagem: 'Professor não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir professor', error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
