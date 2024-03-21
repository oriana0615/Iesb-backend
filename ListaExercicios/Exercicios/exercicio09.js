// 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.


const prompt = require('prompt-sync')();

function calcularResultado() {
    // Solicita os dois números ao usuário
    const numeroA = Number(prompt('Digite um número: '));
    const numeroB = Number(prompt('Digite outro número: '));

    // Calcula a soma dos números
    const soma = numeroA + numeroB;

    // Multiplica o resultado da soma pelo primeiro número
    const resultado = soma * numeroA;

    
    console.log(`O resultado é ${resultado}`);
}

calcularResultado();
