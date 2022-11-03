import fs from 'fs';
import { constants } from "fs";
import { open, read, close,createReadStream, createWriteStream,readFile } from 'fs';
import { createGzip } from 'zlib';
import http from 'http';

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

// архивируем файл
// readableStream.pipe(createGzip()).pipe(writeableStream);
// запуск сервера  для остановки ctr + C ------------------------------
// let time = new Date();
// http.createServer((request, response)=>{
// // response.statusCode = 200;
// response.setHeader('Content-Type', 'text/html');
// response.statusCode = 200;

// response.write(`<b>${time}</b>`);
// 	response.end();
// }).listen(3000);

// http.createServer((request, response) => {
// 	response.writeHead(200, {'Content-Type': 'text/html'});
// 	response.end();
// }).listen(3000);


// подсчет запросов к серверу -----------------------------------------
// let i = 0;
// http.createServer((request, response) => {
// 	response.setHeader('Content-Type', 'text/html');
// 	response.statusCode = 200;
// 	response.write(String(++i));
//   if(i==3){
//     response.write('<p>wrode tak</p>');
   
//   }
// 	 response.end();
// }).listen(3000);

// http.createServer((request, response) => {
// 	console.log(request.url.host);
// 	console.log(request.method);
// 	console.log(request.headers);
	
//   // console.log(response.text);

// 	response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write('text');
// 	// response.write(`<p>${GET}`);

// 	response.end();
// }).listen(3000);


http.createServer((request, response) => {
	if (request.url != '/favicon.ico') {
		let text;
		let status = 200;
		
		if (request.url == '/page1') {
			text = '1';
		}
		else if (request.url == '/page2') {
			text = '2';
		}
		else if (request.url == '/page3') {
			text = '3';
		} else {
			text = 'page not found';
			status = 404;
		}
		
		response.writeHead(status, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(3000);
