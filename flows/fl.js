import fs from 'fs';
import { constants } from "fs";
import { open, read, close,createReadStream, createWriteStream,readFile } from 'fs';
import { createGzip } from 'zlib';

// // read all file
let text = fs.readFileSync('readme.txt','utf-8');
fs.writeFileSync('readme.txt', text + 2);
let path = '../start/index.js';
// let data = await fs.promises.readFile(path, 'utf-8');
// console.log(data);
// // read part file
let readableStream = fs.createReadStream(path, 'utf-8');

// readableStream.on('data', function(chunk){
//   console.log(chunk);
// });

// запись в файл ------------------------------------------------------
let writeableStream = fs.createWriteStream('readme.txt');

// writeableStream.write('text1\n');
// writeableStream.write('text2\n');
// writeableStream.write('text3\n');
// // конец записи файла
// writeableStream.end();

// чтение-запись ------------------------------------------------------
// readableStream.on('data', function(chunk){
//   writeableStream.write(chunk);
// });
// console.log(writeableStream);

//  readableStream.pipe(writeableStream);

readableStream.pipe(createGzip()).pipe(writeableStream);