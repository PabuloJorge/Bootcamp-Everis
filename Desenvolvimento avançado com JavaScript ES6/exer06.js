//operador rest
var sum = (...args) => args.reduce((total, value) => total += value, 0) //possibilita o recebimento de vários valores como argumento, sem precisar especificar a quantidade. 

console.log(sum(5, 5, 5))
console.log(sum(sum(5, 5, 5), sum(10, 10, 10, 50)))