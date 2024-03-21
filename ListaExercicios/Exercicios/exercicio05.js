// 5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor


let prompt = require('prompt-sync')();

function calcularCustoFinal(preco, distribuidor, impostos) {
    const totalImpostos = distribuidor + impostos;
    const custoFinal = preco + (preco * totalImpostos / 100);

    console.log(`Você está pagando um total de ${totalImpostos}% de impostos e taxas de fabricantes.`);
    console.log(`O preço final do seu veículo será R$ ${custoFinal.toFixed(2)}.`);
}

let preco = Number(prompt('Digite o preço do seu veículo: '));
const distribuidor = Number(prompt('Digite a taxa do distribuidor: '));
const impostos = Number(prompt('Digite a taxa dos Impostos: '));

calcularCustoFinal(preco, distribuidor, impostos);
