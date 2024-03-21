/*
 Faça um script que determine o volume de uma caixa
d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/

const prompt = require('prompt-sync')();

function calcularVolume() {
    // Solicita o raio e a altura da caixa d'água
    const raio = Number.parseFloat(prompt('Digite o raio (em metros): '));
    const altura = Number(prompt('Digite a altura (em metros): '));

    // Calcula o volume usando a fórmula V = π * raio^2 * altura
    const volume = Math.PI * (raio ** 2) * altura;

    console.log(`O volume da caixa d'água é de: ${volume.toFixed(2)} metros cúbicos.`);
}

calcularVolume();
