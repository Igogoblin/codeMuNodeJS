import { square, cube } from "./math.js";
import fs from 'fs';
import { open, read, close } from 'fs';
import { CLIENT_RENEG_WINDOW } from "tls";
// import _ from 'underscore';
// import _ from 'lodash';
// import { isGeneratorFunction } from "util/types";


// импорт и использование другого файла  --------------------------------
// let res = square(2)+cube(3);
// console.log(res);
// console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
// let text  = fs.readFileSync('readme.txt','utf-8');
// console.log(text);


// синхронное чтение файлов --------------------------------------------
// let a = fs.readFileSync('first.txt', 'utf-8');
// let b = fs.readFileSync('second.txt', 'utf-8');
// console.log(Number(a)+Number(b));

// синхронная запись файлов --------------------------------------------
// fs.writeFileSync('readme.txt', a+b);

// запись в файл с интервалом времени ----------------------------------
// setInterval(function(){
//   let rep = fs.readFileSync('readme.txt','utf-8');
// fs.writeFileSync('readme.txt', rep+"!" );
// },1000);

// обязательно через оброботчика событий -------------------------------
// try{
//   let tex = fs.readFileSync('readme.txt', 'utf-8');
//   console.log(tex);
// } catch(err) {
//   console.log('при чтении файла возникла ошибка', err);
// }

// обработчит событий при асинхронном чтении -----------------------------
//   let checkAsinc = fs.readFile('first.txt','utf-8', function(err, tex){
//     if(!err){
//       console.log('last message');
//     console.log(square(tex));
//     } else {
//       console.log('error', err);
//     }
    
//   });
//    console.log("!!!");

// правильное чтение при умножении двух файлов асинхронно -------------
  // fs.readFile('first.txt', 'utf8', function(err, data1){
  //   if(!err) {
  //     fs.readFile('second.txt', 'utf8', function(err,data2){
  //       if(!err) {
  //         console.log(data1*data2);
  //       } else {
  //         console.log('error read file second');
  //       }
  //     });
  //   }else {
  //     console.log('error read file first');
  //   }
  // });

  // чтение и перезапись из файла --------------------------------
// fs.readFile('third.txt','utf-8', function(err,da1){
//   let b =  Math.pow(+da1,+da1);
//   if(!err){
    
    
//     fs.writeFile('third.txt',b, function(err){
//       if(err){
//         console.log('error write third file');
//       }
//     });
//   } else {
// console.log('error read rhird file');
//   }
// });


// sum three files -----------------------------------------
// fs.readFile('first.txt','utf-8', function(err, data1){
//   if(!err){
//     fs.readFile('second.txt','utf-8', function(err,data2){
//       if(!err){
//         fs.readFile('third.txt','utf-8',function(err,data3){
//           if(!err){
//             console.log(data1+data2+data3);
//           }else{
//             console.log('error read third file');
//           }
//         });
//       }else {
//         console.log('error read second file');
//       }
//     });
//   } else {
//     console.log('error read first file');
//   }  
// });

// read files translation promise ----------------------------------------
// fs.promises.readFile('readme.txt','utf-8').then(data=>{
//   console.log(typeof +data);
// }).catch(err=> {
//   console.log('error');
// });

// read file do with it operation and writen back -----------------------
// fs.promises.readFile('readme.txt','utf-8').then(data=>{
//   return fs.promises.writeFile('readme.txt', data+8);
// }).catch(err=>{
//   console.log('error');
// });

// do with arr files ----------------------------------------------------
// let names = ['first.txt','second.txt','third.txt'];
// let files = [];

// for(let name of names){
//   files.push(fs.promises.readFile(name,'utf-8'));
//   // console.log(fs.promises.readFile('first.txt','utf-8'));
// }

// Promise.all(files).then(data=>{
//   fs.promises.writeFile('res.txt',data.join(''));
// }).catch(err=>{
//   console.log('что-то пошло не так');
// });
// console.log(files);


// async function func() {
//   try {
//     let data = await fs.promises.readFile('readme.txt','utf-8');
//   console.log(data);
//   } catch (err){
//     console.log('что-то пошло не так');
//   }
  
// }
// func();

async function func() {
	try {
		let data1 = await fs.promises.readFile('first.txt', 'utf8');
		let data2 = await fs.promises.readFile('second.txt', 'utf8');
		let data3 = await fs.promises.readFile('third.txt', 'utf8');
		
		console.log(data1 + data2 + data3);
	} catch (err) {
		console.log('что-то пошло не так');
	}
}

func();
