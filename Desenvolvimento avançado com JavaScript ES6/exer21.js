function* numeros(){
    num = 0;
    while(true){
        yield num;
        num++;
    }
}

const it = numeros();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())