var random = () => Math.random() * 10

var sum2 = (a, b = random()) => a + b //Atribuindo valor padrão através de uma função


console.log(sum2(3).toFixed(2))