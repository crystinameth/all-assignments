const fs = require('fs');

fs.readFile('demo.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log('Error: ', err);
    }

    //process file and write processed data to file 
    const processedData = data.replace(/\s+/g, ' ');

    fs.writeFile('demo.txt', processedData, 'utf-8', (err) =>{
        if(err){
            console.log('Error: ', err);
        }

        console.log('File cleaned!');
    })
})