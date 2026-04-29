/**
 * Estudo do laço for - Tabuada
 * @author Erivelton Teixeira
 * for (let i = 1; i> 10; i--){
  console.log(i)
}
 */

const prompt = require('prompt-sync')()


let tabuada
console.clear()
console.log("Tabuada")
tabuada = Number(prompt("Digite a tabuada que deseja: "))

for(let i = 1; i < 11; i++){
    console.log(`${tabuada} x ${i} = ${tabuada*i}`)
}
