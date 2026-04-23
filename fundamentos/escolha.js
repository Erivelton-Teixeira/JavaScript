/**
 * Exemplo de uso da estrutura switch case
 * @author Erivelton Teixeira
 */
const prompt = require("prompt-sync")()

let opcao

console.clear()
console.log("Menu de opsções: ")
console.log()
console.log("1. Cadastro de clientes")
console.log("2. Cadastro de produto")
console.log("3. Relatorios")
opcao = Number(prompt("Digite a opção desejada: "))

//Uso da estrutura da switch case para tratamento do valor digitado.
//Obs :esta estrutura aceita  variaveis numericas do tipo inteiros e caractres
//unicos, dentroda estrutura o default é opcional

switch (opcao) {
    case 1:
        console.clear()
        console.log("Tela de cadastro de clientes")
        break
    case 2:
        console.clear()
        console.log("Tela de cadastro de produtos")
        break
    case 3:
        console.clear()
        console.log("Impressão de relatorios")
        break
    default:
        console.clear()
        console.log("Opção invalida")
}