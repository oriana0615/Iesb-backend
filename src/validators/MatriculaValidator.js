const yup = require('yup');

const matriculaSchema = yup.object().shape({
    aluno: yup.string().required('Aluno é obrigatório'),
    curso: yup.string().required('Curso é obrigatório'),
    professor: yup.string().required('Professor é obrigatório'),
    dataMatricula: yup.date().required('Data de matrícula é obrigatória'),
    dataConclusao: yup.date().required('Data de conclusão é obrigatória')
});

function matriculaValidador(req, res, next) {
    matriculaSchema
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
    matriculaValidador
};
