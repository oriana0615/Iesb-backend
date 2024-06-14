// src/routes/desempenho.routes.js
const express = require('express');
const router = express.Router();
const DesempenhoController = require('../controllers/DesempenhoController');

router.get('/desempenho/:alunoId/media', async (req, res) => {
    try {
        const { alunoId } = req.params;
        const media = await DesempenhoController.calcularMediaNotas(alunoId);
        res.json({ media });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao calcular média das notas', error: error.message });
    }
});

router.get('/desempenho/:alunoId/promocao', async (req, res) => {
    try {
        const { alunoId } = req.params;
        const resultado = await DesempenhoController.verificarPromocao(alunoId);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao verificar promoção', error: error.message });
    }
});

module.exports = router;
