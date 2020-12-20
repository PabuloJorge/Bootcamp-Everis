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
    {
        nome: 'pretinho',
        type: 'dog',
        age: 15
    },

]

const idadeDog = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total

    return total + pet.age

}, 0)

console.log(pets)
console.log('---------------------------------------------------------------')
console.log(idadeDog)