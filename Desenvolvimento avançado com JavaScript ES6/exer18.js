// well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const str = 'JavaScript'
const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();


while (true) {
    let {
        value,
        done
    } = it.next();


    if (done) {
        break;
    }
    console.log(value)
}
//or 
console.log('----------------------------')
for (let value of arr) {
    console.log(value)
}

console.log('----------------------------')

for (let value of str) {
    console.log(value)
}
