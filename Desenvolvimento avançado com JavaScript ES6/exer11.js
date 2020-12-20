obj = {
    name: 'Pablo', 
    age: 21
}

var name = obj.name
var age = obj.age
 
console.log(`${name} - ${age}`)

//destructurig assigment 

var { name: name2, age: age2 } = obj;

console.log(`${name2} - ${age2}`)



