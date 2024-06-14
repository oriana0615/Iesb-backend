// src/controllers/CursoController.js
const Curso = require('../models/Curso');

async function create(req, res) {
    try {
        
        const { nome } = req.body;
        const cursoExistente = await Curso.findOne({ nome });

        if (cursoExistente) {
            return res.status(400).json({ mensagem: 'Curso com este nome já existe' });
        }

        const curso = new Curso(req.body);
        const cursoCriado = await curso.save();
        res.status(201).json(cursoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar curso', error });
    }
}

async function getAll(req, res) {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar cursos', error });
    }
}

async function getById(req, res) {
    try {
        const curso = await Curso.findById(req.params.id);
        if (curso) {
            res.json(curso);
        } else {
            res.status(404).json({ mensagem: 'Curso não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar curso', error });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const cursoAtualizado = await Curso.findByIdAndUpdate(id, req.body, { new: true });

        if (cursoAtualizado) {
            res.json(cursoAtualizado);
        } else {
            res.status(404).json({ mensagem: 'Curso não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar curso', error });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const cursoExcluido = await Curso.findByIdAndDelete(id);

        if (cursoExcluido) {
            res.json({ mensagem: 'Curso excluído com sucesso', cursoExcluido });
        } else {
            res.status(404).json({ mensagem: 'Curso não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir curso', error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
