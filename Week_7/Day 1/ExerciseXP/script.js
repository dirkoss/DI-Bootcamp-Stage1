// 🌟 Exercise 1 

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("Success")
        } else {
            reject("Error")
        }
    })
}

compareToTen(15)
    .catch(error => console.log(error));


// 🌟 Exercise 2 : 

const success = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("“success”")
    }, 4 * 1000);
})


success.then(function(value){console.log(value)})


// 🌟 Exercise 3 

let resolvePromise = new Promise((resolve, reject) => {
    resolve(3)
})

resolvePromise.then(function(value){console.log(value)})


let rejectPromise = new Promise((resolve, reject) => { reject("Boo!")
})


rejectPromise.catch(function(value){console.log(value)})


