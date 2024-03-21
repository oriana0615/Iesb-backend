  while (isNaN(precoFabrica) || precoFabrica < 0) {
    console.log("Por favor, digite um valor numérico válido e positivo para o preco de fábrica do carro.");
    precoFabrica = parseFloat(prompt("Digite o preco de fábrica do carro: "));
  }