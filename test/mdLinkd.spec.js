const mdLinks = require('../src/mdLinks.js');

describe('Funcion para validar options', () => {
  it('mdLinks() debe ser una función', () => {
    expect(typeof (mdLinks.mdLinks)).toBe('function');
  });
  it('valite: false: debería devolver href, text, file', () => {
    const routeFile = '../LIM015-md-links/src/prueba/pepito.md';
    const validateFalse = [
      {
        href: 'https://www.tabnine.com/code/javascript/functions/marked/Renderer',
        text: 'marked',
        file: '../LIM015-md-links/src/prueba/pepito.md'
      }
    ];
    expect(mdLinks.mdLinks(routeFile, { validate: false })).resolves.toEqual(validateFalse);
  });
  it('valite true: debería retornar href, text, file, status, messages', () => {
    const routeFile = '../LIM015-md-links/src/prueba/pepito.md';
    const validateTrue = [
      {
        href: 'https://www.tabnine.com/code/javascript/functions/marked/Renderer',
        text: 'marked',
        file: '../LIM015-md-links/src/prueba/pepito.md',
        status: 200,
        message: 'ok',
      },
    ];
    expect(mdLinks.mdLinks(routeFile, { validate: true })).resolves.toEqual(validateTrue);
  });
  it('mensaje de error si no existe ruta', () => {
    const fakeRoute = '../LIM015-md-links/src/prueba/pepito.md1111'
    const result = `

██╗░░░░░░█████╗░  ██████╗░██╗░░░██╗████████╗░█████╗░  ███╗░░██╗░█████╗░
██║░░░░░██╔══██╗  ██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗  ████╗░██║██╔══██╗
██║░░░░░███████║  ██████╔╝██║░░░██║░░░██║░░░███████║  ██╔██╗██║██║░░██║
██║░░░░░██╔══██║  ██╔══██╗██║░░░██║░░░██║░░░██╔══██║  ██║╚████║██║░░██║
███████╗██║░░██║  ██║░░██║╚██████╔╝░░░██║░░░██║░░██║  ██║░╚███║╚█████╔╝
╚══════╝╚═╝░░╚═╝  ╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝  ╚═╝░░╚══╝░╚════╝░

███████╗██╗░░██╗██╗░██████╗████████╗███████╗
██╔════╝╚██╗██╔╝██║██╔════╝╚══██╔══╝██╔════╝  ***Ingresa una ruta válida***
█████╗░░░╚███╔╝░██║╚█████╗░░░░██║░░░█████╗░░
██╔══╝░░░██╔██╗░██║░╚═══██╗░░░██║░░░██╔══╝░░
███████╗██╔╝╚██╗██║██████╔╝░░░██║░░░███████╗
╚══════╝╚═╝░░╚═╝╚═╝╚═════╝░░░░╚═╝░░░╚══════╝
`;
    expect(mdLinks.mdLinks(fakeRoute)).rejects.toEqual(result);
  });
  it('mensaje de error si existe la ruta pero no hay archivos', () => {
    const fakeFile = '../LIM015-md-links/src/prueba/hola.txt'
    const result1 = `

███╗░░██╗░█████╗░  ████████╗██╗███████╗███╗░░██╗███████╗
████╗░██║██╔══██╗  ╚══██╔══╝██║██╔════╝████╗░██║██╔════╝
██╔██╗██║██║░░██║  ░░░██║░░░██║█████╗░░██╔██╗██║█████╗░░
██║╚████║██║░░██║  ░░░██║░░░██║██╔══╝░░██║╚████║██╔══╝░░
██║░╚███║╚█████╔╝  ░░░██║░░░██║███████╗██║░╚███║███████╗
╚═╝░░╚══╝░╚════╝░  ░░░╚═╝░░░╚═╝╚══════╝╚═╝░░╚══╝╚══════╝

░█████╗░██████╗░░█████╗░██╗░░██╗██╗██╗░░░██╗░█████╗░░██████╗  ███╗░░░███╗██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░░██║██║██║░░░██║██╔══██╗██╔════╝  ████╗░████║██╔══██╗
███████║██████╔╝██║░░╚═╝███████║██║╚██╗░██╔╝██║░░██║╚█████╗░  ██╔████╔██║██║░░██║
██╔══██║██╔══██╗██║░░██╗██╔══██║██║░╚████╔╝░██║░░██║░╚═══██╗  ██║╚██╔╝██║██║░░██║
██║░░██║██║░░██║╚█████╔╝██║░░██║██║░░╚██╔╝░░╚█████╔╝██████╔╝  ██║░╚═╝░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░░╚═╝░░░░╚════╝░╚═════╝░  ╚═╝░░░░░╚═╝╚═════╝░
`;
    expect(mdLinks.mdLinks(fakeFile)).rejects.toEqual(result1);
  });
  it('mensaje de error si existe la ruta pero no hay links', () => {
    const fakeLinks = '../LIM015-md-links/src/prueba/pruebaDos/hola.md'
    const result2 = `

███╗░░██╗░█████╗░  ██╗░░██╗░█████╗░██╗░░░██╗  ██╗░░░░░██╗███╗░░██╗██╗░░██╗░██████╗
████╗░██║██╔══██╗  ██║░░██║██╔══██╗╚██╗░██╔╝  ██║░░░░░██║████╗░██║██║░██╔╝██╔════╝
██╔██╗██║██║░░██║  ███████║███████║░╚████╔╝░  ██║░░░░░██║██╔██╗██║█████═╝░╚█████╗░
██║╚████║██║░░██║  ██╔══██║██╔══██║░░╚██╔╝░░  ██║░░░░░██║██║╚████║██╔═██╗░░╚═══██╗
██║░╚███║╚█████╔╝  ██║░░██║██║░░██║░░░██║░░░  ███████╗██║██║░╚███║██║░╚██╗██████╔╝
╚═╝░░╚══╝░╚════╝░  ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═════╝░
`;
    expect(mdLinks.mdLinks(fakeLinks)).rejects.toEqual(result2);
  });
});