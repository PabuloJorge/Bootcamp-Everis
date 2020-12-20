var arr = ['maça', 'banana', 'morango', ['abacaxi']]

var maca = arr[0]
var banana = arr[1]
var morango = arr[2]
var abacaxi = arr[3][0]

console.log(maca)
console.log(banana)
console.log(morango)
console.log(abacaxi)

console.log("-------------------------------------------")

//destructurig assigment

var [maca2, banana2, morango2, [abacaxi2]] = arr

console.log(maca2)
console.log(banana2)
console.log(morango2)
console.log(abacaxi2)