/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Promise resolved after ${n} seconds`);
        } , n * 1000);
    });
}

wait(5)
    .then((result) => {
        console.log(result);   // the resolved value of a promise can be any JavaScript value, such as a string, number, object, or even another promise. The use of result allows you to work with the outcome of the asynchronous operation once it's completed.
    })
    .catch((error) =>{
        console.log(error);
    });