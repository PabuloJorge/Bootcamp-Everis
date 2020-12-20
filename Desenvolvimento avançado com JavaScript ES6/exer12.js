obj = {
    name: 'Pablo', 
    outros: {
        corFavorita: 'Vermelho'
    }
}

var corFavorita = obj.outros.corFavorita
console.log(corFavorita)


//destructurig assigment  com objetos dentro de objetos

var {outros:{corFavorita:corFavorita2}} = obj

console.log(corFavorita2)
 




