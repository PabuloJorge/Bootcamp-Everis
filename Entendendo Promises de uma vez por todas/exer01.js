const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('end'), 2000)
})

console.log('Begin')

promise.then((data) => console.log(data)).catch((err) => console.log('ops', err))

promise.then(console.log)

//{
promise.then((res) => {}, (rej) => {})
//or
promise.then((res) => {})
promise.then((rej) => {})
//}