// src/controllers/MatriculaController.js
const Matricula = require('../models/Matricula');

async function create(req, res) {
    try {
        // Verificar se a matrícula já existe para o aluno e curso especificados
        const { aluno, curso } = req.body;
        const matriculaExistente = await Matricula.findOne({ aluno, curso });

        if (matriculaExistente) {
            return res.status(400).json({ mensagem: 'Matrícula para este aluno e curso já existe' });
        }

        const matricula = new Matricula(req.body);
        const matriculaCriada = await matricula.save();
        res.status(201).json(matriculaCriada);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar matrícula', error });
    }
}

async function getAll(req, res) {
    try {
        const matriculas = await Matricula.find();
        res.json(matriculas);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar matrículas', error });
    }
}

async function getById(req, res) {
    try {
        const matricula = await Matricula.findById(req.params.id);
        if (matricula) {
            res.json(matricula);
        } else {
            res.status(404).json({ mensagem: 'Matrícula não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar matrícula', error });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const matriculaAtualizada = await Matricula.findByIdAndUpdate(id, req.body, { new: true });

        if (matriculaAtualizada) {
            res.json(matriculaAtualizada);
        } else {
            res.status(404).json({ mensagem: 'Matrícula não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar matrícula', error });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const matriculaExcluida = await Matricula.findByIdAndDelete(id);

        if (matriculaExcluida) {
            res.json({ mensagem: 'Matrícula excluída com sucesso', matriculaExcluida });
        } else {
            res.status(404).json({ mensagem: 'Matrícula não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir matrícula', error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
