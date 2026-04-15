/**
 * Cálculo do consumo diário de água
 * @author Erivelton Teixeira
 */

const prompt = require (`prompt-sync`)()

let peso,consumo

peso = Number(prompt(`Digite o seu peso (kg): `))
console.log(peso)

consumo = (peso * 35)/1000
console.log(consumo)


console.log(`Para ${peso} kg, o consumo diário recomendado é: ${consumo} litros`)
