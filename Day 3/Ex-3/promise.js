// Demonstration of a Promise

function myNew() {

    const variable = new Promise(function (resolve, reject) {
        const x = "hello"
        const y = "hello"

        if (x === y) {
            resolve('Strings are same')
        }
        else {
            reject('Strings are not same')
        }
    })

    return variable;
}

async function demoPromise() {
    try {
        let result = await myNew()
        console.log(result)
    }
    catch (error) {
        console.log("Error : " + error)
    }
}

demoPromise()

// Another Example of Promise

function myNew2() {

    const variable = new Promise(function (resolve, reject) {
        const x = "hello"
        const y = "Hello"

        if (x === y) {
            resolve('Strings are same')
        }
        else {
            reject('Strings are not same')
        }
    })

    return variable;
}

myNew2().then(function (result) {
    console.log(result)
}
).catch(function (error) {
    console.log("Error : " + error)
})




