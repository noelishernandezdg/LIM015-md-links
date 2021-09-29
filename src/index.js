/* eslint-disable linebreak-style */
// Acá estoy requiriendo usar File System
const fs = require('fs');

// Acá estoy requiriendo usar path
const path = require('path');

// Acá estay requieriendo marked
const marked = require('marked');

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
const fileMd = (ruta) => ((path.extname(ruta) === '.md') ? ruta : false);
// console.log(fileMd(route), 22);

// función para leer archivos
const readFiles = (ruta) => fs.readFileSync(ruta, 'utf-8');
// console.log(readFiles('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba\\pepito.md'), 26);

// Función para leer directorio
const readDir = (ruta) => fs.readdirSync(ruta);
// console.log(readDir(route), 29);

const getFile = (ruta) => {
  let arrFile = [];
  if (isDirectory(ruta)) {
    readDir(ruta).forEach((e) => {
      const newRoute = path.join(ruta, e);
      const recursive = getFile(newRoute);
      arrFile = arrFile.concat(recursive);
    });
  } else {
    fileMd(ruta) ? arrFile.push(ruta) : false;
  }
  return arrFile;
};

// console.log(getFile('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba'), 50);

const getLinks = (ruta) => {
  let arrLinks = [];
  const renderer = new marked.Renderer();
  getFile(ruta).forEach((e) => {
    const readFileMd = readFiles(e);
    console.log(readFileMd);
    renderer.link = (href, title, text) => {
      const obj = {
        href: href,
        text: text,
        file: ruta,
      }
      arrLinks.push(obj);
    };
    marked(readFileMd, { renderer });
  });
  // const filterLinks = arrLinks.filter(url => url.href.slice(0, 4) == 'http');
  return arrLinks;
};

// console.log(getLinks('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba\\pepito.md'), 77);


module.exports = {
  routeExists,
  routeAbsolute,
  isFile,
  isDirectory,
  fileMd,
  readFiles,
  readDir,
  getFile,
  getLinks,
};
