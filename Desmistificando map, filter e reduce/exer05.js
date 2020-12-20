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

const idadeTotal = pets.reduce((total, pet) => {
    return total + pet.nome + ' - '

}, '')

console.log(pets)
console.log('---------------------------------------------------------------')
console.log(idadeTotal)