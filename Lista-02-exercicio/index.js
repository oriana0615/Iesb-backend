const express = require('express')
const app = express()
const port = 3000
const funcoes = require('./Funcoes')

//Middlewares
app.use(express.json())

//----------------------------------------------------------------------------------------

/*
1. Faça uma api para calcular o estoque médio de uma peça, 
sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

/*
Postman: http://localhost:3000/exercicio1
{
    "qtdMinima": 20,
    "qtdMaxima": 40
}


*/

app.post('/exercicio1', (req, res)=>{
    
    const qtdMinima = req.body.qtdMinima
    const qtdMaxima = req.body.qtdMaxima
    const media = funcoes.exercicio1(qtdMinima, qtdMaxima)
    
    res.send(`O estoque médio é de ${media}`)


})

//----------------------------------------------------------------------------------------

/*
2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
*/

/*
Postman: http://localhost:3000/exercicio2
{
  "salario": 900
}


*/

app.post('/exercicio2', (req, res)=>{
    const salario = req.body.salario
    const saidaExercicio2 = funcoes.exercicio2(salario)

    res.send(saidaExercicio2)



})

//----------------------------------------------------------------------------------------

/*
3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas 
e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
Escrever o nome do vendedor e seu salário total.
*/


/*
Postman: http://localhost:3000/exercicio3
{
  "nome": "João",
  "salario": 2000,
  "totalVendas": 8000,
  "percentual": 10
}

*/


app.post('/exercicio3', (req, res)=>{
    const nome = req.body.nome
    const salario = req.body.salario
    const totalVendas = req.body.totalVendas

    const saidaExercicio3 = funcoes.exercicio3(nome, salario, totalVendas)
    res.send(saidaExercicio3)

})


//----------------------------------------------------------------------------------------

/*
4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/

/*
Postman: http://localhost:3000/exercicio4
{
  "nome": "Carlos",
  "distancia": 200,
  "tempoHoras": 4
}

*/
app.post('/exercicio4', (req, res) => {
    const nome = req.body.nome;
    const distancia = req.body.distancia;
    const tempoHoras = req.body.tempoHoras;

   
    const saidaExercicio4 = funcoes.exercicio4(nome, distancia, tempoHoras);

    res.send(saidaExercicio4);
});


//----------------------------------------------------------------------------------------

/*
5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/

/*
Postman: http://localhost:3000/exercicio5
{
  "salario": 1800
}

*/
app.post('/exercicio5', (req, res) => {
    const salario = req.body.salario;
    const saidaExercicio5 = funcoes.exercicio5(salario);
    res.send(saidaExercicio5);
});
//----------------------------------------------------------------------------------------

/*
6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: 
altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/


/*
Postman: http://localhost:3000/exercicio6
{
    "altura": 1.62,
    "sexo": "M"
}

*/


app.post('/exercicio6', (req, res) =>{
    
    const altura = req.body.altura
    const sexo = req.body.sexo

    const saidaExercicio6 = funcoes.exercicio6(altura, sexo)
    res.send(saidaExercicio6)


})

//----------------------------------------------------------------------------------------

/*
7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
*/


/*
Postman: http://localhost:3000/exercicio7
[
    { "codigo": 1, "preco": 10 },
    { "codigo": 2, "preco": 15 },
    { "codigo": 3, "preco": 20 },
    { "codigo": 4, "preco": 25 },
    { "codigo": 5, "preco": 30 },
    { "codigo": 6, "preco": 35 },
    { "codigo": 7, "preco": 40 },
    { "codigo": 8, "preco": 45 },
    { "codigo": 9, "preco": 50 },
    { "codigo": 10, "preco": 55 },
    { "codigo": 11, "preco": 60 },
    { "codigo": 12, "preco": 65 },
    { "codigo": 13, "preco": 70 },
    { "codigo": 14, "preco": 75 },
    { "codigo": 15, "preco": 80 }
]


*/
app.post('/exercicio7', (req, res)=>{
    let corpo = req.body
    let listaProdutos = []

    //forEach é um for para arrays, produto é a variável que irá percorrer a array, é como a variável i
    corpo.forEach(produto => {
        listaProdutos.push(produto) //adiciona os valores à array, e produto enquanto percorre a array adicionará o próximo valor à array

    })

    //Somando
    let soma = 0

    listaProdutos.forEach(produto =>{
        soma = soma + produto.preco //somará todos os preços da aba preços: de array
    })

    //Dividindo
    const media = soma / listaProdutos.length

    //Calcular maior preço

    let maiorPreco = 0

    listaProdutos.forEach(produto => {
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco

        }
    })

    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maiorPreco
    }

    res.json(resultado)
    
    
    
    })


    /*8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%*/

    /*
Postman: http://localhost:3000/exercicio8
[
    { "codigo": 101, "salario": 3000 },
    { "codigo": 102, "salario": 4000 },
    { "codigo": 103, "salario": 5000 },
    { "codigo": 104, "salario": 6000 }
  
]


*/

    const arrayDeSalario = []

app.post('/exercicio8', (req, res) => {
    const requisicao = req.body
    const saida = []

    requisicao.forEach(funcionario => {
        const { codigo, salario } = funcionario
        let aumento = 0

        switch (codigo) {
            case 101:
                aumento = salario * 0.05
                break
            case 102:
                aumento = salario * 0.075
                break
            case 103:
                aumento = salario * 0.1
                break
            default:
                aumento = salario * 0.15 // 15% de aumento para cargos não listados
        }

        const novoSalario = salario + aumento
        const diferenca = novoSalario - salario

        saida.push({
            codigo: codigo,
            salarioAntigo: salario,
            novoSalario: novoSalario,
            diferenca: diferenca
        })
    })

    res.json(saida)
})

    /*
    9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.

    */


        /*
Postman: http://localhost:4000/exercicio9
{
    "salarioMinimo": 1200,
    "horasTrabalhadas": 160,
    "numDependentes": 2,
    "horasExtras": 10
}

*/

app.use(express.json());

app.post('/calcular-salario', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, numDependentes, horasExtras } = req.body;

    const valorHora = salarioMinimo / 5;
    const salarioMes = horasTrabalhadas * valorHora;
    const acrescimoDependentes = numDependentes * 32;
    const valorHoraExtra = valorHora * 1.5;
    const valorHorasExtras = horasExtras * valorHoraExtra;
    const salarioBruto = salarioMes + acrescimoDependentes + valorHorasExtras;

    let irrf;
    if (salarioBruto < 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.10;
    } else {
        irrf = salarioBruto * 0.20;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.json({ salarioReceber });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});




app.listen(3000, ()=>{
    console.log('aplicação iniciada em http://localhost:3000')
})