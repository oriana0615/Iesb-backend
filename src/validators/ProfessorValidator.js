const yup = require('yup');

const professorSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    telefone: yup.string().required('Telefone é obrigatório'),
    dataContratacao: yup.date().required('Data de contratação é obrigatória'),
    genero: yup.string().required('Gênero é obrigatório'),
    endereco: yup.object().required('Endereço é obrigatório'),
    departamento: yup.string().required('Departamento é obrigatório')
});

function professorValidador(req, res, next) {
    professorSchema
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
    professorValidador
};
