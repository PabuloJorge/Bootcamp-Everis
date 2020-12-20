//Symbols 
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello')

console.log(uniqueId);
console.log(uniqueId === uniqueId2) //identificadores únicos

const obj = {
    [uniqueId]: 'Hello'
}

console.log(Object.keys(obj))
console.log(Object.getOwnPropertySymbols(obj))