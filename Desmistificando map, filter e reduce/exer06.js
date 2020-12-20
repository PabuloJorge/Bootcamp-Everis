const pets = [{
    nome: 'rex',
    type: 'dog',
    age: 10
},
{
    nome: 'miau',
    type: 'cat',
    age: 2
},
{
    nome: 'pexin',
    type: 'fish',
    age: 3
},

]

const resumo = pets.reduce((total, pet) => {
return {
    names: total.names + pet.nome +' ',
    idades: total.idades + pet.age
}

}, {names: '', idades: 0})

console.log(pets)
console.log('---------------------------------------------------------------')
console.log(idadeTotal)