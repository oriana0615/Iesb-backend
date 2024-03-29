
/*2. Escreva um script para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores. */


let prompt = require('prompt-sync')();

let votosValidos = Number(prompt('Digite o valor de votos válidos: '));
let votosBrancos = Number(prompt('Digite o valor de votos Brancos: '));
let votosNulos = Number(prompt('Digite o valor de votos Nulos: '));

function eleitoral() {
    let total = votosValidos + votosNulos + votosBrancos;
    console.log(`O total de eleitores de um município é de ${total}`);
    
    let percentual = (votosValidos / total) * 100;
    console.log(`O percentual de votos válidos é: ${percentual.toFixed(2)}%`);
    
    let percentual2 = (votosBrancos / total) * 100;
    console.log(`O percentual de votos brancos é: ${percentual2.toFixed(2)}%`);
    
    let percentual3 = (votosNulos / total) * 100;
    console.log(`O percentual de votos nulos é: ${percentual3.toFixed(2)}%`);
}

eleitoral();
