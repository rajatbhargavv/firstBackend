// importing the fs module
import { error } from 'console';
import fs from 'fs';

// writing in a file
fs.writeFileSync('writtenFile.txt', 'hello world 2', (err)=>{
    if(err) throw err;
    console.log("Successfully written.");
});
// creates a new file if it doesn't already exists.

// reading from a file
fs.readFile('writtenFile.txt', 'utf-8', (err, data)=>{
    console.log(err, data);
})
// returns an error if the file with the given name does not exists.
// .readFile stops the execution till it gets all the data of file ready to print.
// it works with a little time delay, and till that time, code ahead of this gets printed.

// whereas, we also have readFileSync, which stops the further execution of file.
const readedFile = fs.readFileSync('writtenFile.txt', 'utf-8');
console.log(readedFile);


console.log("Should print after reading file with readFileSync()");

// readFile and readFileSync 
// writeFile and writeFileSync

// both the sync functions work in the same way, they stop the execution of the code that is ahead.