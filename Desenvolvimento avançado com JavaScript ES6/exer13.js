obj = {
    name: 'Pablo',
    outros: {
        cores: ['azul', 'vermelho', 'preto']

    }
}

var azul = obj.outros.cores[0]
console.log(azul)

//destructurig assigment com arrays dentro de objetos

var {outros:{cores:[azul2, vermelho2, preto2]}}= obj

console.log(azul2)
console.log(vermelho2)
console.log(preto2)