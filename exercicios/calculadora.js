/**
 * Cálculadora JS - Exemplo de uso de funções 
 * @author Erivelton Teixeira
 */


// Importação de pacote
const prompt = require('prompt-sync')()

//variaveis globais
let num1, num2, opcao, resultado

// Funções das operações (com parâmetros) recomendado antes da função principal

function somar(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function raizQuadrada(num1) {
    return Math.sqrt(num1);
}
function dividir(num1, num2) {
    //validação
    if (num1 === 0) {
        console.log("Impossivel dividir por 0")
    } else {
        return num1 / num2

    }
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Função principal (main)
function iniciarCalculadora() {
    // Gerando um loop infinito (UX)
    do {
        mostrarMmenu()
        //Escolha da opçao
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada")
                return //Encerra o loop infinito
            case 1:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = somar(num1, num2)
                break
            case 2:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = multiplicar(num1, num2)
                break
            case 4:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = dividir(num1, num2)
                break
            case 5:
                num1 = Number(prompt("Digite o valor: "))
                resultado = raizQuadrada(num1)
                break
            default:
                console.log("Opção invalida")
                prompt("Precione [Enter] para continuar")
                continue //continua dentro do switch case
        }
        //Exibir o resultado
        console.log(`Resultado : ${resultado.toFixed(2)}`)
        prompt("Precione [Enter] para continuar")
    } while (true)

}
//Função menu
function mostrarMmenu() {
    console.clear()
    console.log("Calculadora JS")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Divisão")
    console.log("5. Raiz quadrada")
    console.log("0. Sair")
}

//Executar a função principal

iniciarCalculadora()
