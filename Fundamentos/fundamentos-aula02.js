/*
comentar bloco

*/

// control mas punto e virgula CTRL+;  COMENTA TODO LO Q ESCRIBAS
// comentário de uma linha


// variável com var
var nome = "Gustavo"

// imprimir informação no console(terminal)
console.log("IMPRIMINDO UM TEXTO")
console.log(2)
console.log(nome)
console.log(1,2,3,4)
console.log("NOME:", "Gustavo")
console.log("NOME:", nome)
console.log("QUALQUER TEXTO" + " QUALQUER OUTRO TEXTO")
console.log(2 + 2)




// TIPOS DE DADOS EM J.S

var texto = "TESTE"
console.log("TIPO DA VARIVEL texto: ", typeof texto)

var numero = 2

console.log("TIPO DA VARIVEL numero: ", typeof texto)

var numeroFlutuante = 2.54444
console.log("TIPO DA VARIVEL numeroFlutuante: ", typeof numeroFlutuante)

var numeroNegativo = - 2.54444
console.log("TIPO DA VARIVEL numeroNegativo: ", typeof numeroNegativo)

var boleano = true // ou false
console.log("TIPO DA VARIVEL boleano: ", typeof boleano)

var array = [1,2,3,4,5]
console.log("TIPO DA VARIVEL array: ", typeof array)

var testeAlteracao = "Um texto"
testeAlteracao = 2

console.log("testeAlteracao: ", testeAlteracao)

var arrayNumero = [1,2,3,4,5]

var arrayCarros = ["Gol","Uno","Civic"]

var arrayDinamico = [1, "nome", true, {"nome": "Teste"}]



var pessoa = {
  "nome": "GUSTAVO",
  "idade": 18,
  "nacionalidade": "Brasileiro"

}

console.log(pessoa)
console.log(typeof pessoa)

const CONSTANTE = "CONSTANTE"
// CONSTANTE = "TESTE"

const notaA1 = 8
const notaA2 = 7

const media = notaA1 + notaA2 / 2


let aprovado = false

if(media >= 7) {
    aprovado = true
}