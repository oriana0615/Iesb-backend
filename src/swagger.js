// src/swagger.js
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        title: 'api-cadastro-alunnos',
        description: 'Api com funcionalidades para realizar o cadastro de alunnos, cálculos e verificações de desempenho dos alunos.',
        version: '3.0'
    },
    host: 'localhost:3000',
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    },
    security: [
        {
            bearerAuth: []
        }
    ]
};

const outputFile = './swagger.json';
const routes = ['./src/routes/autenticacao.routes.js', './src/routes/routes.js'];

swaggerAutogen(outputFile, routes, doc);
