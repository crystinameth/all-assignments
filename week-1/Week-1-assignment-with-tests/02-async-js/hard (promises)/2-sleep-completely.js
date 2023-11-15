/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (milliseconds) {

    const start = Date.now();
    while(Date.now() - start < milliseconds){
        //do nothing
    }
}

console.log('Before buy wait');
sleep(5000);
console.log('After busy wait');