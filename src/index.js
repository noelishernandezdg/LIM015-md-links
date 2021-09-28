/* eslint-disable linebreak-style */
// Acá estoy requiriendo usar File System
const fs = require('fs');

// Acá estoy requiriendo usar path
const path = require('path');

// Estamos declarando
// const route = process.argv[2];
// console.log(route, 1111);

// Función para saber si la ruta existe
const routeExists = (ruta) => fs.existsSync(ruta);
// console.log(routeExists(route), 14);

// Función para saber si la ruta es absoluta y resolverla
const routeAbsolute = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));
// console.log(routeAbsolute(route), 16);

const isFile = (ruta) => fs.statSync(ruta).isFile();
// console.log(isFile(route), 21);

// Función para saber si es un directorio
const isDirectory = (ruta) => fs.statSync(ruta).isDirectory();
// console.log(isDirectory(route), 19);

// Función para saber si es un archivo md
const fileMd = (ruta) => ((path.extname(ruta) === '.md') ? [ruta] : []);
// console.log(fileMd(route), 22);

// función para leer archivos
const readFiles = (ruta) => fs.readFileSync(ruta, 'utf-8');
// console.log(readFiles(route), 26);

// Función para leer directorio
const readDir = (ruta) => fs.readdirSync(ruta);
// console.log(readDir(route), 29);

const getFile = (ruta) => {
  if (isDirectory(ruta)) {
    const documentDir = readDir(ruta);
    return documentDir.reduce((accumulator, e) => {
      const pathAbsolute = path.join(ruta, '\\', e);
      console.log(pathAbsolute, 46);
      return accumulator.concat(getFile(pathAbsolute));
    }, []);
  }
  return (fileMd(ruta));
};

console.log(getFile('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba'), 50);



module.exports = {
  routeExists,
  routeAbsolute,
  isDirectory,
  isFile,
  fileMd,
  readFiles,
  readDir,
};
