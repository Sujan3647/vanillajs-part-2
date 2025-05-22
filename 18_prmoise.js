// fetch('https://www.something.com').then().catch().finally()



const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task completed');
        resolve()
    }, 1000)

})
promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("asyn task 2");
        resolve
    }, 1000)
}).then(function () {
    console.log("asyn 2 resolve");

})



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "sujan@tech.hg" })
    }, 1000)

})
promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hiro", password: "1232" })
        }
        else {
            reject('ERROR: something went wrong ')
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
})
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    }).finally(() => {
        console.log('The promise is either resolve or rejected');

    })

const promiseFive = new promiseFour(function (resolve, reject) {

    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        }
        else {
            reject('ERROR: JS went wrong ')
        }
    }, 2000)

})

async function consumerPromiseFive() {

    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log('error');

    }
}
consumerPromiseFive()