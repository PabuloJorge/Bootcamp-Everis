// well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag


const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

