// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
// Programa para calcular a média aritmética das notas de um aluno

const prompt = require('prompt-sync')();

console.log("Exercício 1");
console.log("Calcular média");

// Solicitar as notas do aluno
const nota1 = Number(prompt("Digite a nota 1: "));
const nota2 = Number(prompt("Digite a nota 2: "));
const nota3 = Number(prompt("Digite a nota 3: "));
const nota4 = Number(prompt("Digite a nota 4: "));

// Calcula a média das notas
const mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Sua média é: ${mediaNotas.toFixed(2)}`);

// Verificar se o aluno foi aprovado ou reprovado

if (mediaNotas >= 7) {
    console.log("Ótimo! Você foi aprovado.");
} else {
    console.log("Puxa, você foi reprovado.");
}
