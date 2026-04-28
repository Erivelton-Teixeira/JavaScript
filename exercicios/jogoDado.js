/**
 * Jogo do dado
 * Exemplo de uso da estrutura do while
 * @author Erivelton Teixeira
 */
const prompt = require (`prompt-sync`)()
let novoJogo = "n"

do {
console.clear()
console.log("Jogo do dado")
prompt ("Pressione [Enter] para lançar o dado...")
console.log(`Face do dado: ${Math.ceil(Math.random()*6)}`)
novoJogo = prompt("Deseja johar novamente (s/n)")
} while(novoJogo === "s" || novoJogo === "S")