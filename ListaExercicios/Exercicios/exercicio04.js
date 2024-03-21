// 4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require('prompt-sync')();

function SaberPrecoFinal() {
  let precoFabrica = parseFloat(prompt("Digite o preco de fábrica de seu veículo: "));

  while (isNaN(precoFabrica) || precoFabrica < 0) {
    console.log("Por favor, digite um valor numérico válido e positivo para o preco de fábrica do carro.");
    precoFabrica = parseFloat(prompt("Digite o preco de fábrica do carro: "));
  }

  const percentualDistribuidor = 28;
  const percentualImpostos = 45;
  const valorDistribuidor = precoFabrica * (percentualDistribuidor / 100);
  const valorImpostos = precoFabrica * (percentualImpostos / 100);

  const custoFinal = precoFabrica + valorDistribuidor + valorImpostos;

  console.log(`O custo final ao consumidor é de : R$ ${custoFinal.toFixed(2)}`);
}

SaberPrecoFinal();
