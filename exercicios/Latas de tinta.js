/**
 * Cálculo da quantidade de latas de tinta
 * @author Erivelton Teixeira
 */
const prompt = require('prompt-sync')()

let areaParede, rendimentoLata, quantidadeLata

areaParede = Number (prompt(`Digite a area da parede em m²: `))
console.log(areaParede)

rendimentoLata = Number (prompt(`Digite o rendimento da lata de tinta em m²: `))
console.log(rendimentoLata)

quantidadeLata = areaParede/rendimentoLata
console.log(`A quantidade de latas de tinta necessaria para pintar a parede é: ${Math.ceil(quantidadeLata)}`)