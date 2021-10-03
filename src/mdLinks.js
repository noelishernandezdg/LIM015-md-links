const { routeExists, getFile, getLinks, status }
  = require('./Api.js');

const mdLinks = (path, option) => {
  return new Promise(function (resolve, reject) {
    if(routeExists(path)) {
    if (getFile(path) !== 0) {
      if (getLinks(path) !== 0) {
        if (option.validate === true) {
          resolve(status(path));
          // .then((result) => resolve(result))
          // .catch((error) => resolve(error));
        } else {
          resolve(getLinks(path));
        }
      } else {
        rejec('no existen links');
      }
    } else {
      reject('No existen archivos md');
      }
  } else {
    reject('La ruta no existe');
    }
  });
};

// mdLinks('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba', { validate: true })
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

module.exports = {
  mdLinks
}