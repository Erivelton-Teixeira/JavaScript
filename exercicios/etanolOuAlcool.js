/**
 * Estudo da estrutura de controle if e else
 * Cálculo da média
 * @author Erivelton Teixeira
 */
//alinha baixo importa a biblioteca
const prompt = require('prompt-sync')()
const color = require(`colors`)
// variaveis
let gasolina, etanol

console.clear()

console.log(`Cálculo da média`)

gasolina = Number(prompt(`Informe o valor do litro da gasolina: `))
etanol = Number(prompt(`Informe o valor do litro da etanol: `))

//processamento
 //uso da estrutura if else para determinar se o aluno esta aprovado ou reprovado

 if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com etanol ".cyan)
 } else {
    console.log("Abasteça com gasolina".red)
 }