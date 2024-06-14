const yup = require('yup');

const alunoSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    telefone: yup.string().required('Telefone é obrigatório'),
    dataNascimento: yup.date().required('Data de nascimento é obrigatória'),
    genero: yup.string().required('Gênero é obrigatório'),
    endereco: yup.object().required('Endereço é obrigatório'),
    departamento: yup.string().required('Departamento é obrigatório')
});

function alunoValidador(req, res, next) {
    alunoSchema
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
    alunoValidador
};
