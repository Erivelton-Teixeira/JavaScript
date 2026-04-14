/**
 * Exercicio  -conversao de temperatura 
 * @author Erivelton Teixeira 
 */
//importação de pacote
const prompt = require (`prompt-sync`)()

//variaveis
let c,f

console.clear()
console.log("Conversão de temperatura de Fahrenheit -> celcius")

//entrada
f = Number (prompt(`Digite a temperatura em Fahrenheit: `))

//processamento
c = (f-32) * 5/9

//saida
console.log(` ${f} °Fahrenheit equivalem a ${c.toFixed(0)} °Graus celcius`)