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

//Tratamento paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
})