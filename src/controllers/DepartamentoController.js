// src/controllers/DepartamentoController.js
const Departamento = require('../models/Departamento');

async function create(req, res) {
    try {
        // Verificar se o departamento já existe
        const { nome } = req.body;
        const departamentoExistente = await Departamento.findOne({ nome });

        if (departamentoExistente) {
            return res.status(400).json({ mensagem: 'Departamento com este nome já existe' });
        }

        const departamento = new Departamento(req.body);
        const departamentoCriado = await departamento.save();
        res.status(201).json(departamentoCriado);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar departamento', error });
    }
}

async function getAll(req, res) {
    try {
        const departamentos = await Departamento.find();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar departamentos', error });
    }
}

async function getById(req, res) {
    try {
        const departamento = await Departamento.findById(req.params.id);
        if (departamento) {
            res.json(departamento);
        } else {
            res.status(404).json({ mensagem: 'Departamento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar departamento', error });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const departamentoAtualizado = await Departamento.findByIdAndUpdate(id, req.body, { new: true });

        if (departamentoAtualizado) {
            res.json(departamentoAtualizado);
        } else {
            res.status(404).json({ mensagem: 'Departamento não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar departamento', error });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const departamentoExcluido = await Departamento.findByIdAndDelete(id);

        if (departamentoExcluido) {
            res.json({ mensagem: 'Departamento excluído com sucesso', departamentoExcluido });
        } else {
            res.status(404).json({ mensagem: 'Departamento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir departamento', error });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
