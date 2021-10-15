/* eslint-disable linebreak-style */
// Acá estoy requiriendo usar File System
const fs = require('fs');

// Acá estoy requiriendo usar path
const path = require('path');

// Acá estay requieriendo marked
const marked = require('marked');

const fetch = require('node-fetch');

const routeExists = (ruta) => fs.existsSync(ruta);

const routeAbsolute = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));

const isFile = (ruta) => fs.statSync(ruta).isFile();

const isDirectory = (ruta) => fs.statSync(ruta).isDirectory();

const fileMd = (ruta) => ((path.extname(ruta) === '.md') ? ruta : false);

const readFiles = (ruta) => fs.readFileSync(ruta, 'utf-8');

const readDir = (ruta) => fs.readdirSync(ruta);

const getFile = (ruta) => {
  let arrFile = [];
  if (isDirectory(ruta)) {
    readDir(ruta).forEach((e) => {
      const newRoute = path.join(ruta, e);
      const recursive = getFile(newRoute);
      arrFile = arrFile.concat(recursive);
    });
  } else {
    fileMd(ruta) ? arrFile.push(routeAbsolute(ruta)) : false;
  }
  return arrFile;
};


const getLinks = (ruta) => {
  let arrLinks = [];
  const renderer = new marked.Renderer();
  getFile(ruta).forEach((e) => {
    const readFileMd = readFiles(e);
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
  return arrLinks;
};


const status = (ruta) => {
  const promiseFetch = getLinks(ruta).map((objLink) => {
    return fetch(objLink.href)
      .then((res) => {
      const objRes = {
        href: objLink.href,
        text: objLink.text,
        file: objLink.file,
        status: res.status,
        message: (res.status >= 200 && res.status < 400) ? 'ok' : 'fail',
      }
      return objRes;
    })
    .catch((err) => {
      const objErr = {
        href: objLink.href,
        text: objLink.text,
        file: objLink.file,
        status: err.status,
        message: 'Error request:' + err.statusText,
      }
      return objErr;
    });
});
return Promise.all(promiseFetch);
};

// status('../LIM015-md-links/src/prueba/pepito.md')
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

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
  status,
};
