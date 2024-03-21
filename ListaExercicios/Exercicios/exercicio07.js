// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

let prompt = require('prompt-sync')();

// notas de entrada
let nota1 = Number(prompt('Digite sua primeira nota: '));
let nota2 = Number(prompt('Digite sua segunda nota: '));

// pesos das notas
const peso1 = 6;
const peso2 = 4;

// Calcula a nota ponderada
const notaPonderada = (nota1 * peso1) + (nota2 * peso2);

// Calcula a média final
const mediaFinal = notaPonderada / (peso1 + peso2);


console.log(`Sua média final é ${mediaFinal.toFixed(2)}.`);
