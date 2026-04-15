/**
 * Cálculo do tempo de viagem
 * @author Erivelton Teixeira
 */

const prompt = require (`prompt-sync`)()

let distancia, velocidade, tempo

distancia=Number(prompt(`Digite a distacia a ser percorrida: `))
console.log(distancia)

velocidade=Number(prompt(`Digite a velocidade: `))
console.log(velocidade)

tempo = distancia / velocidade

console.log(`O tempo de viagem é : ${tempo}`)
console.log(tempo)