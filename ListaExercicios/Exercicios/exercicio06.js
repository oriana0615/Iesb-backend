/* 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */




const prompt = require('prompt-sync')();

//  valores de entrada
const salarioFixo = Number(prompt('Digite o salário fixo do vendedor: '));
const valorPorCarro = Number(prompt('Digite o valor que o vendedor recebera por carro vendido: '));
const carrosVendidos = Number(prompt('Digite o número de carros vendidos: '));

// Valor total das vendas
const valorTotalVendas = valorPorCarro * carrosVendidos;

// Calcula a comissão de 5% sobre o valor total das vendas
const comissaoPorVenda = (valorTotalVendas * 5) / 100;

// Calcula o salário total do vendedor (salário fixo + comissão)
const salarioTotal = salarioFixo + comissaoPorVenda;


console.log(`Você vendeu um total de ${carrosVendidos} carros, cada um custando R$ ${valorPorCarro.toFixed(2)}.`);
console.log(`O valor total das suas vendas foi de R$ ${valorTotalVendas.toFixed(2)}.`);
console.log(`Seu salário final, incluindo a comissão, será de R$ ${salarioTotal.toFixed(2)}.`);


