/**
 * Cálculo do consumo de combustível
 * @author Erivelton Teixeira
 */

const prompt = require (`prompt-sync`)()


let distancia, litros, consumo

distancia=Number(prompt(`Disite a distancia km: `))
console.log(consumo)

litros=Number(prompt(`Digite a quantidade de combustivel em litros: `))
console.log(litros)

consumo = distancia/litros

console.log(`O consumo médio é : ${consumo} `)
console.log(consumo)