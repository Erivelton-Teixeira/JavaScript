/**
 * Cálculo da quantidade de latas de tinta
 * @author Erivelton Teixeira
 */
const prompt = require('prompt-sync')()

let x,y, valor

console.clear
x = Number(prompt(`Digite o primeiro valor: `))
console.log(x)

y = Number(prompt(`Digite o segundo valor: `))
console.log(y)

valor = (x*y)/100

console.log(`O resultado è: ${valor}`)
