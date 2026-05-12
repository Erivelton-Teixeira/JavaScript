/**
* Estrutura de dados array (vetor)
* @author Erivelton Teixeira
*/
 
// A linha abaixo cria um array (vetor)
let alunos = ['Juan', 'Maria', 'José', 'ana']
 
console.clear()
console.log('================== ARRAY ==================')
console.log(alunos)
console.log(`Um array do tipo: ${typeof alunos}`)
 
// Obtendo o tamanho do array (length)
console.log(`Tamanho do array: ${alunos.length}`)
 
// Adicionando dados a um array (CRUD create)
console.log("")
console.log('================== CRUD create ==================')
 
// O método push adiciona de forma segura um dado ao array
alunos.push('Adelson')
console.log(alunos)
console.log(`Tamanho do array: ${alunos.length}`)
 
// Lendo dados de um array (CRUD read)
console.log("")
console.log('================== CRUD read ==================')
console.log(alunos)
console.table(alunos)
 
// Exibindo um dado específico do array
console.log(`Aluno [2]: ${alunos[2]}`)
 
// Atualizando dados de um array (CRUD update)
// Usar o índice para alterar um dado do vetor
console.log("")
console.log('================== CRUD update ==================')
alunos[3] = 'Ana'
alunos[4] = 'Adeilson'
console.table(alunos)
 
// Excluindo dados de um array (CRUD delete)
console.log("")
console.log('================== CRUD delete ==================')
 
// delete exclui um dado do array (não reduz o tamanho)
delete alunos[2]
console.log(alunos)
console.log(`Tamanho do array: ${alunos.length}`)
 
console.log("")
console.log("------------------------------------------------")
console.log("Percorrendo um array")
 
// Percorrendo um array
//           [0][1][2][3][4][5]
let notas = [3, 8, 5, 9, 2, 7]
console.log(notas)
console.table(notas)
 
// Percorrendo um array com o laço for
console.log("Laço for")
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
 
// Simplificação do laço for (forEach)
console.log("Laço forEach")
notas.forEach((nota) => {
    console.log(nota)
})
 
// Manipulação e filtragem de dados de um array
console.log("")
console.log("------------------------------------------------")
console.log("Manipulação e filtragem de dados")
console.log("")
console.log("Exemplo 1: Adicionar 1 ponto às notas dos alunos")
 
//simpplificação do laço for (for each)
console.log("Laços forEach")
notas.forEach((notas) => {
    console.log(notas)
})
 
//Manipulação e filtragem de dados de um array
console.log("")
console.log("------------------------------------------------")
console.log("Manipulçao e filtragem de dados")
console.log("")
console.log("Exemplo 1: Adiconar 1 ponto as notas dos alunos")
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(`Notas originais: ${notas}`)
console.log(`Notas atualizadas: ${notasAtualizadas}`)
 
console.log("")
console.log("Exemplo 2: Conversão de um sistema de notas(números) para letras(caracteres)")
/*
NA - Não atendeu (nota < 5)
PA - Parcialmente atendido (nota entre 5 e 7)
A - Atendeu (nota > 7)
*/
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})
 
console.log(`Notas originais: ${notas}`)
console.log(`Notas convertidas: ${notasConvertidas}`)
 
let alunosDC = [
 
    {
 
        nome: "bruce",
 
        idade: 42,
 
        bolsista: false
 
    },
 
    {
 
        nome: "clack",
 
        idade: 45,
 
        bolsista: false
 
    },
 
    {
 
        nome: "barry",
 
        idade: 23,
 
        bolsista: true
 
 
    }
 
]
 
console.log("")
console.log("estrutura de dados usando array")
console.log("")
console.log(alunosDC)
console.table(alunosDC)
 
//Filtos
console.log(``)
console.log(`Filtos: Exemplo 1: Alunos bolsistas`)
 
console.log(alunosDC.filter((b) =>{
    return b.bolsista === true
}))
 
console.log(``)
console.log(`Filtos: Exemplo 2: Alunos com idade superior a 40 anos`)
console.log(alunosDC.filter((i) =>{
    return i.idade > 40
}))
 
console.log(``)
console.log(`Filtos: Exemplo 3: Ordenar os alunos`)
// Dica: criar uma cópia do array original para não modificar o index
// [...array] criando uma cópia 
let alunosOrdenados = [...alunosDC] //criar uma cópia
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)