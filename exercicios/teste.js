
const prompt = require('prompt-sync')()

let maquina, jogador

console.clear()

console.log('Escolha um número')
console.log('1 - Pedra')
console.log('2 - Papel')
console.log('3 - Tesoura')

jogador = Number(prompt('Digite um número: '))

maquina = Math.floor(Math.random() * 3) + 1

if (jogador === maquina) {
  console.log('Empate')
} else if (
  (jogador === 1 && maquina === 3) ||
  (jogador === 2 && maquina === 1) ||
  (jogador === 3 && maquina === 2)
) {
  console.log('Você venceu')
} else {
  console.log('Você perdeu')
}
