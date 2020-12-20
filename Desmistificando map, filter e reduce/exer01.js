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

const newPets = pets.filter((pet) => {
    return pet.age < 5
})

console.log(pets)
console.log('---------------------------------------------------------------')
console.log(newPets)