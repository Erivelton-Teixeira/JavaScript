/**
 *  Cálculo do valor da conta de luz
 * @author Erivelton Teixeira
 */
const prompt = require (`prompt-sync`)()

let consumo, tarifa, valor

console.clear
consumo=Number(prompt(`Digite o valor do consumo em kWh: `))
console.log(consumo)

tarifa=Number(prompt(`Digite o valor da tarifa :`))
console.log(tarifa)

valor = consumo * tarifa

console.log(`O valor do consumo è: ${valor}`)
console.log(valor)

