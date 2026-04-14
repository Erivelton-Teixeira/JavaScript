/**
 * Cálculo do volume de um aquário
 * @author Erivelton Teixeira
 */

const prompt = require('prompt-sync')()


let comprimento, largura, altura, volume

console.clear()
console.log("Cálculo em CM do volume de um aquário")

comprimento = Number (prompt(`Digite o comprimento do aquario: `))
console.log(comprimento)
largura = Number(prompt(`Digite a largura do aquario: `))
console.log(largura)
altura = Number (prompt(`Digite a altura do aquario: `))
console.log(altura)
volume = (comprimento*largura*altura)/1000
console.log(`O de agua necessario para encher o aquario é :${volume.toFixed(1)}`)