const fs = require('fs');

const contentToWrite = 'Hello Beautiful People!';
const contentToAppend = '\nThis content will be appended to the file.';

fs.writeFile('abc.txt', contentToWrite, 'utf-8', (err) =>{
    if(err)
    console.log('Error:', err);
    else
    console.log('Writing successful')
})

fs.appendFile('abc.txt', contentToAppend, 'utf-8', (err) =>{
    if(err)
    console.log('Error:', err);
    else
    console.log('Appending successful')
})