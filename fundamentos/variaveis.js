/**
 * Estudo das Variaveis
 * @author Erivelton Teixeira
 */

console.clear ()
console.log ("Estudo das variáveis")
console.log("")
console.log("Varial do tipo String")
// a linha abaixo cria uma variável
let imc
let nome = "Erivelton Teixeira"
console.log(nome)
//a linha abaixo mosta um tipo de variavel
console.log(typeof(nome))
console.log("")
console.log("Variavel do tipo number")
let idade = 27
console.log(idade)
console.log(typeof(idade))
console.log("")
let peso = 70
console.log(peso)
console.log(typeof(peso))
console.log("")
let altura = 1.75
console.log(altura)
console.log(typeof(altura))
console.log("")
console.log("Variavel do tipo boolean")
let vip = true
console.log(vip)
console.log(typeof(vip))

console.log("")
console.log("----------------------------")
console.log("-      Ficha do aluno      -")
console.log("----------------------------")
// a alinha abaixo concatena (união) um texto com o 
//conteudo da variavel
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`peso : ${peso}Kg`)
console.log(`altura: ${altura}`)
console.log(`vip : ${vip}`)
console.log(`FCM : ${208 - (0.7 * idade)} bmp`)

if (imc < 18.5) {
    console.log('Você está abaixo do peso.')
} else if ( imc < 24.9) {
    console.log('Você está com peso normal.')
} else if (imc < 29.9) {
    console.log('Você está levemente acima do peso.')
} else if (imc < 34.9) {
    console.log('Obesidade grau I.')
} else if (imc < 39.9) {
    console.log('Obesidade grau II (Severa).')
} else {
    console.log('Obesidade grau III (Mórbida).')
}
 

// .toFied (2) formata o resultado em 2 casas decimais
console.log(`IMC : ${(peso / (altura * altura)).toFixed(2)} `)

console.log("----------------------------")

