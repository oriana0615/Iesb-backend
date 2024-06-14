// src/routes/routes.js
const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController');
const CursoController = require('../controllers/CursoController');
const DepartamentoController = require('../controllers/DepartamentoController');
const ProfessorController = require('../controllers/ProfessorController');
const MatriculaController = require('../controllers/MatriculaController');
const PokemonController = require('../controllers/PokemonController');
const DesempenhoRoutes = require('./desempenho.routes'); // Adicione esta linha

// Validators
const { validarId } = require('../validators/IdValidator');
const { alunoValidador } = require('../validators/AlunoValidator');
const { cursoValidador } = require('../validators/CursoValidator');
const { departamentoValidador } = require('../validators/DepartamentoValidator');
const { professorValidador } = require('../validators/ProfessorValidator');
const { matriculaValidador } = require('../validators/MatriculaValidator');

// Alunos
router.post('/alunos', alunoValidador, AlunoController.create);
router.get('/alunos', AlunoController.getAll);
router.get('/alunos/:id', validarId, AlunoController.getById);
router.put('/alunos/:id', validarId, alunoValidador, AlunoController.update);
router.delete('/alunos/:id', validarId, AlunoController.remove);
router.post('/alunos/:id/notas', validarId, AlunoController.addNota);

// Cursos
router.post('/cursos', cursoValidador, CursoController.create);
router.get('/cursos', CursoController.getAll);
router.get('/cursos/:id', validarId, CursoController.getById);
router.put('/cursos/:id', validarId, cursoValidador, CursoController.update);
router.delete('/cursos/:id', validarId, CursoController.remove);

// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.create);
router.get('/departamentos', DepartamentoController.getAll);
router.get('/departamentos/:id', validarId, DepartamentoController.getById);
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update);
router.delete('/departamentos/:id', validarId, DepartamentoController.remove);

// Professores
router.post('/professores', professorValidador, ProfessorController.create);
router.get('/professores', ProfessorController.getAll);
router.get('/professores/:id', validarId, ProfessorController.getById);
router.put('/professores/:id', validarId, professorValidador, ProfessorController.update);
router.delete('/professores/:id', validarId, ProfessorController.remove);

// Matriculas
router.post('/matriculas', matriculaValidador, MatriculaController.create);
router.get('/matriculas', MatriculaController.getAll);
router.get('/matriculas/:id', validarId, MatriculaController.getById);
router.put('/matriculas/:id', validarId, matriculaValidador, MatriculaController.update);
router.delete('/matriculas/:id', validarId, MatriculaController.remove);

// Pokemon API
router.get('/pokemon/:name', PokemonController.getPokemonByName);
router.get('/pokemon/id/:id', PokemonController.getPokemonById);
router.get('/pokemon', PokemonController.getPokemonList);
router.get('/pokemon/types', PokemonController.getPokemonTypes);
router.get('/pokemon/abilities', PokemonController.getPokemonAbilities);
router.get('/pokemon/evolutions/:id', PokemonController.getPokemonEvolutions);
router.get('/pokemon/locations/:id', PokemonController.getPokemonLocations);

// Desempenho
router.use(DesempenhoRoutes);  

module.exports = router;
