function hello() {
    console.log('Hello')
    console.log('From')
    console.log('Function!')
}

hello();
console.log('---------------------')

//generators

function* hello2() {
    console.log('Hello')
    yield 1
    console.log('From')
    const value = yield 2
    console.log(value)
}

const it = hello2();

console.log(it.next())
console.log(it.next())
console.log(it.next('Function!'))