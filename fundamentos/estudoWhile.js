/**
 * Estudo do laço for - Tabuada
 * @author Erivelton Teixeira
 * for (let i = 1; i> 10; i--){
  console.log(i)
}
 */

const prompt = require('prompt-sync')()


let tabuada
let x = 1

console.clear()
console.log("Tabuada")
tabuada = Number(prompt("Digite a tabuada que deseja: "))


console.clear()

while (x < 11){
    console.log(`${tabuada} x ${x} = ${tabuada * x}`)
    x++
}


 
