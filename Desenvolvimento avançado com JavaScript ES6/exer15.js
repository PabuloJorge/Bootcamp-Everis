//destructurig assigment - arrrays como parametro
const sum = ([a, b] = [1, 1]) => a + b

console.log(sum([3, 7]))

//destructurig assigment - objetos como parametro
const sum2 = ({
    a,
    b
} = {
    a: 2,
    b: 2
}) => a + b

console.log(sum2({
    a: 4,
    b: 6
}))