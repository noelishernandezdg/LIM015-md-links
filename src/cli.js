#!/usr/bin/env node

// const { validate } = require('jest-validate');
const { mdLinks } = require('./mdLinks.js');
const { total, unique, broken, } = require('./option');
const { help } = require('./message.js');

const path = process.argv[2];
const options = process.argv.slice(3);

const optionValidate = options.includes('--validate');
const optionStats = options.includes('--stats');
const thereIsNoRoute = path === '' || path === '--help' || path === '--Valitade' || path === '--stats';
const optionHelp = options.includes('--help');

// mdLinks(path, { validate: false })
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => {
//     if (reject === 'La ruta no existe') {
//       console.log(pathDoesNotExist)
//     } else if (reject === 'No tiene archivos md') {
//       console.log(doesNotHaveMdFiles)
//     } else if (reject === 'No hay links') {
//       console.log(thereAreNoLinks)
//     } else {
//       console.log(help)
//     }
// });

// Si el usuario no ingresa una ruta
if (thereIsNoRoute) {
  console.log(help);
// si hay una ruta solamente
} else if (path !== '' && options.length === 0) {
  mdLinks(path, { validate: false })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
// si hay una ruta y option --validate
} else if (optionValidate && !optionStats) {
  mdLinks(path, { validate: true })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
// si hay una ruta y option --stats
} else if (optionStats && !optionValidate) {
  mdLinks(path, { validate: true })
    .then((resolve) => {
      console.log(total(resolve));
      console.log(unique(resolve));
    })
    .catch((reject) => console.log(reject));
// si hay una ruta y options --validate y --stats
} else if (optionValidate && optionStats || optionStats && optionValidate) {
  mdLinks(path, { validate: true })
    .then((resolve) => {
      console.log(total(resolve));
      console.log(unique(resolve));
      console.log(broken(resolve));
    })
    .catch((reject) => console.log(reject));
} else {
  console.log(help);
};
