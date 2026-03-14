import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// printing the base name of a path
console.log(path.basename('C://temp/Rajat/index.js')); // index.js

// printing the directory name of a path
console.log(path.dirname('C://Temp/Rajat/index.js'));  // C://Temp/Rajat

// if you want the name of the file you're working on
console.log(__filename);   // gives the path of the file you're working on
console.log(path.extname(__filename)); // gives the extension of the file you're working on.