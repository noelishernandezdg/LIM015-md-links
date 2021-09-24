/* eslint-disable linebreak-style */
// Acá estoy requiriendo usar File System
const fs = require('fs');

// Acá estoy requiriendo usar path
const path = require('path');

// Estamos declarando
const route = process.argv[2];
console.log(route, 1111);

// Función para saber si la ruta existe
const routeExists = () => fs.existsSync(route);

// Función para saber si la ruta es absoluta y resolverla
const routeAbsolute = () => (path.isAbsolute(route) ? route : path.resolve(route));
console.log(routeAbsolute(route), 16);

const isDirectory = () => fs.statSync(route).isDirectory();
console.log(isDirectory(route), 19);

const fileMd = () => ((path.extname(route) === '.md'));
console.log(fileMd(route), 22);

// const getFile = (route) => {
//   let newArr = [];
//   const readDir = fs.readdir(route);
//   if (isDirectory(route)) {
//     readDir.forEach((element => {
//       console.log(element, 26);
//       path.join(route, '/', element);
//       const elementFile = getFile(path.resolve(route, '/', element));
//       elementFile.concat(newArr);
//     });
//   } else {
//     newArr.push(route);
//   }
//   return newArr;
// };

// const getFile = (route) => {
//   let newArr = [];
//   const readDir = fs.readdir(route);
//   if (isDirectory(route)) {

//   } else {

//   }
// }

module.exports = {
  routeExists,
  routeAbsolute,
  isDirectory,
};
