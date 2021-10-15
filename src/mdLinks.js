const { routeExists, getFile, getLinks, status } = require('./Api.js');

const { pathDoesNotExist, doesNotHaveMdFiles, thereAreNoLinks } = require('./message.js');

const mdLinks = (path, option) => {
  return new Promise(function (resolve, reject) {
    if(routeExists(path)) {
    if (getFile(path).length > 0) {
      if (getLinks(path).length > 0) {
        if (option.validate === true) {
          resolve(status(path));
        } else {
          resolve(getLinks(path));
        }
      } else {
        reject(thereAreNoLinks);
      }
    } else {
      reject(doesNotHaveMdFiles);
      }
  } else {
      reject(pathDoesNotExist);
    }
  });
};

module.exports = {
  mdLinks
}