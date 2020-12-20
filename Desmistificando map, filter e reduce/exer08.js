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
//Encadeamento do filter com reduce
const dogsSomaIdades = pets.filter((pet) => pet.type === 'dog').reduce((total, pet) => total + pet.age, 0)

console.log(dogsSomaIdades)