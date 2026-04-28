/**
 * JoKenPo
 * @author Erivelton Teixeira
 */


//importação de biblioteca
const prompt = require('prompt-sync')()
//variaveis
let jogador, maquina
let novoJogo = "n"
do {
//UX
console.clear()
console.log("     ██  ██████  ██   ██ ███████ ███    ██ ██████   ██████  ")
console.log("     ██ ██    ██ ██  ██  ██      ████   ██ ██   ██ ██    ██ ")
console.log("     ██ ██    ██ █████   █████   ██ ██  ██ ██████  ██    ██ ")
console.log("██   ██ ██    ██ ██  ██  ██      ██  ██ ██ ██      ██    ██ ")
console.log(" █████   ██████  ██   ██ ███████ ██   ████ ██       ██████  ")

console.log("")
//Logica do jogador

console.log("1- Pedra")
console.log("2- Papel")
console.log("3- Tesoura")
console.log("")
jogador = Number(prompt("Digite um numero! :"))
console.log()
switch (jogador) {
    case 1:
        console.log("Jogador escolheu Pedra")
        break
    case 2:
        console.log("Jogador escolheu Papel")
        break
    case 3:
        console.log("Jogador escolheu Tesoura")
        break
    default:
        console.log("Opsção invalida")
}
//Logica do computador
maquina = Number(Math.ceil(Math.random() * 3))

switch (maquina) {
    case 1:
        console.log("Maquina escolheu Pedra")
        break
    case 2:
        console.log("Maquina escolheu Papel")
        break
    case 3:
        console.log("Maquina escolheu Tesoura")
        break
    default:
        console.log("Opsção invalida")
}
//logica para determinar o vencedor ou empate
if (jogador === maquina) {
    console.log('Empate')
}
else if
    ((jogador === '1' && maquina === '3') ||
    (jogador === '2' && maquina === '1') ||
    (jogador === '3' && maquina === '2')) {
    console.log('você venceu')
}
else {
    console.log('Voce perdeu')

}
novoJogo = prompt("Deseja johar novamente (s/n) ")
} while(novoJogo === "s" || novoJogo === "S")











