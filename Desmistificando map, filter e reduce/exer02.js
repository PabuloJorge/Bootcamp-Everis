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

function menorQueCinco(num) {
    return num < 5
}

const maiorQueNove = (num) => {
    return num > 9
}

const newPets = pets.filter(({
    age
}) => menorQueCinco(age))

const newPets2 = pets.filter(({
    age
}) => maiorQueNove(age))



console.log(pets)
console.log('---------------------------------------------------------------')
console.log(newPets)
console.log('---------------------------------------------------------------')
console.log(newPets2)
