/**
 * Estudo da estrutura de controle if e else
 * Cálculo da média
 * @author Erivelton Teixeira
 */
//alinha baixo importa a biblioteca
const prompt = require('prompt-sync')()
const color = require(`colors`)
// variaveis
let nota1, nota2, media

console.clear()

console.log(`Cálculo da média`)

nota1 = Number(prompt(`Digite a nota 1: `))
nota2 = Number(prompt(`Digite a nata 2: `))

//processamento
media = (nota1 + nota2) / 2

//saida
 console.log(`Média: ${media.toFixed(1)}`)

 //uso da estrutura if else para determinar se o aluno esta aprovado ou reprovado

 if (media < 5) {
    console.log("REPROVADO".red)
 } else {
    console.log("APROVADO".cyan)
 }