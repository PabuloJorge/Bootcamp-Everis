//operador rest
var sum = (a, b, ...args) => {  //pega o restante dos argumentos
    console.log(a, b, args)
}

console.log(sum(5, 5, 5, 2))