//Operador spread faz
//funciona com String, Array, objeto literal e objeto iteravel
const str = 'Pablo Jorge'
const arr = [1, 2, 3, 4]

const logArgs = (...args) => console.log(args)

logArgs(...str) // Operador spread faz o contrario do rest
logArgs(...arr)