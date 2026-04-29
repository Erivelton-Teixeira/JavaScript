/**
 * Sorteio de uma carta
 * Exemplo de uso de array para simplificar o código
 * @author Erivelton Teixeira
 */

const prompt = require(`prompt-sync`)()
do {
//           [0]  [1]  [2]  [3]
let nipes = ["♠", "♥", "♦", "♣"]
//          [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10]  [11]  [12]  
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

console.clear()
console.log("Sorteio de uma carta aleatoria ♠ ♥ ♦ ♣")
prompt("Pressione a tecla [ENTER] para sortear uma carta")

let nipe = nipes  [Math.floor(Math.random()*4)]
let face = faces  [Math.floor(Math.random()*13)]

console.log(`${face}${nipe}`)
novoJogo = prompt("Deseja jogar novamente (s/n)")
} while(novoJogo === "s" || novoJogo === "S")



//maquina = Number(Math.ceil(Math.random() * 3))