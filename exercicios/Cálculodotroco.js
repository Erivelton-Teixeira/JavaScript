/**
 * Cálculo do troco:
 * @author Erivelton Teixeira
 */

const prompt = require (`prompt-sync`)()

let valorCompra, valorPago, troco

valorCompra=Number(prompt(`Digite o valor total da compra: `))
console.log(valorCompra)

valorPago=Number(prompt(`Digite o valor recebido pelo cliente: `))
console.log(valorPago)

troco = valorPago - valorCompra

console.log(prompt(`O valor do troco é R$:${troco}`))
console.log(troco)