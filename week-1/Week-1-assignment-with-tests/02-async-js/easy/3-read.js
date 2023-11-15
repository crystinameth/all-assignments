const fs = require('fs');

function readAndProcessFile(){
    console.log('Start reading file...');

    fs.readFile('abc.txt', 'utf-8', (err,data) =>{
        if(err){
            console.log("Error:", err);
        }
        else{
            console.log('File Data: ', data);
        }

        console.log('Start expensive operation...');
        expensiveOperation();
        console.log('End expensive operation!');
    });

    console.log('After readFile function call, but before file is read!');
    console.log('readfile k bahar wala expensive !');
    expensiveOperation();
    console.log('End task!');
}

function expensiveOperation(){
    var sum = 0;
    for(let i=1; i<1000000000; i++){
        sum += i;
    }
}

readAndProcessFile();