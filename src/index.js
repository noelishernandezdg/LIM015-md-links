/* eslint-disable linebreak-style */
// Acá estoy requiriendo usar File System
const fs = require('fs');

// Acá estoy requiriendo usar path
const path = require('path');

// Estamos declarando
const route = process.argv[2];
console.log(route, 1111);

// Función para saber si la ruta existe
const routeExists = (ruta) => fs.existsSync(ruta);
console.log(routeExists(route), 14);

// Función para saber si la ruta es absoluta y resolverla
const routeAbsolute = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));
console.log(routeAbsolute(route), 16);

const isFile = (ruta) => fs.statSync(ruta).isFile();
console.log(isFile(route), 21);

// Función para saber si es un directorio
const isDirectory = (ruta) => fs.statSync(ruta).isDirectory();
console.log(isDirectory(route), 19);

// Función para saber si es un archivo md
const fileMd = (ruta) => ((path.extname(ruta) === '.md'));
console.log(fileMd(route), 22);

// función para leer archivos
const readFiles = (ruta) => fs.readFileSync(ruta, { encoding: 'utf8', flag: 'r' });
// console.log(readFiles(route), 26);

// Función para leer directorio
const readDir = (ruta) => fs.readdirSync(ruta, { encoding: 'utf8' });
// console.log(readDir(route), 29);

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

const getFile = (ruta) => {
  const newArr = [];
  let file;
  if (isDirectory(ruta)) {
    readDir(ruta).filter((element) => {
      if (element.includes('.md')) {
        newArr.push(element);
      }
      console.log(newArr, 63);
      return newArr; // Falta leer los archivos que encontramos
    });
  } if (isFile(ruta)) {
    // newArr.push(route);
    file = readFiles(ruta);
  }
  return file;
};

console.log(getFile(route), 68);

module.exports = {
  routeExists,
  routeAbsolute,
  isDirectory,
};
