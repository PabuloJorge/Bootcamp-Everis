obj1 = {
    sum: function sum(a, b) {
        return a + b;
    }
}


obj2 = {
    sum(a, b) {
        return a + b; //forma simplificada de ter uma função dentro de um objeto
    }
}

console.log(obj1.sum(1, 5))
console.log(obj2.sum(1, 2))