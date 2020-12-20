//spread com arrays
const arr = [1, 2, 3, 4]
const arr2 = [...arr, 5, 6, 7]
console.log(arr2)

//spread em objetos
const obj = {
    test:'123'
}
const obj2 = {
    ...obj, 
    test2: '345'
}

console.log(obj2)