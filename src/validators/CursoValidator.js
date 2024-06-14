const yup = require('yup');

const cursoSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    descricao: yup.string().required('Descrição é obrigatória'),
    cargaHoraria: yup.number().required('Carga horária é obrigatória'),
    departamento: yup.string().required('Departamento é obrigatório')
});

function cursoValidador(req, res, next) {
    cursoSchema
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
    cursoValidador
};
