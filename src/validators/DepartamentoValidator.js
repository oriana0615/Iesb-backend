const yup = require('yup');

const departamentoSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    descricao: yup.string().required('Descrição é obrigatória')
});

function departamentoValidador(req, res, next) {
    departamentoSchema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));
            res.status(400).json({
                mensagem: 'Falha na validação dos campos',
                erros: errors
            });
        });
}

module.exports = {
    departamentoValidador
};
