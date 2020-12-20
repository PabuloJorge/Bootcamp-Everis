//Promises 

const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            //did something
            resolve('First data')
        }, 1000)
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            //did something
            resolve('Second data')
        }, 1000)
    });

//Tratamento de velocidade(a primera que resolver retornar os valores)
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data)
})