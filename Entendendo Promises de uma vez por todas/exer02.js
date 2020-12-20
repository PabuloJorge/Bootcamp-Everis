const promise = new Promise((resolve, reject) => Math.random() < 0.5 ? resolve('True') : reject('False'))

promise.then((data) => console.log(data))
    .then(() => console.log('Dalle'))
    .catch((err) => console.log(err)) //Caso a promise 'falhe', será executado o proximo catch, então o que estiver entre o 'then' que falhou e o 'catch' não será executado.


promise.then((data) => console.log(data))
    .catch((err) => console.log(err)) 
    .then(() => console.log('Dalle')) //Como este 'then' está depois do 'catch', mesmo o primeiro 'then' falhando, ele será executado
