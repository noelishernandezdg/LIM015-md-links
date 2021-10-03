const {
  routeExists, routeAbsolute, isFile, isDirectory, fileMd, readFiles, readDir, getFile, getLinks, status
} = require('../src/Api.js');

describe('routeExists', () => {
  it('es una función', () => {
    expect(typeof routeExists).toBe('function');
  });
  it('si la ruta existe', () => {
    expect(routeExists('../LIM015-md-links/src/prueba/hola.txt')).toBe(true);
  });
  it('si laruta no existe', () => {
    expect(routeExists('../LIM015-md-links/src/hola.txt')).toBe(false);
  });
});

describe('routeAbsolute', () => {
  it('es una función', () => {
    expect(typeof routeAbsolute).toBe('function');
  });
  it('si la ruta es relativa pasar a absoluta', () => {
    expect(routeAbsolute('../Prueba/hola.txt')).toEqual('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\Prueba\\hola.txt');
  });
  it('si la ruta es absoluta debe devolver la misma ruta', () => {
    expect(routeAbsolute('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\Prueba\\hola.txt')).toEqual('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\Prueba\\hola.txt');
  });
});

describe('isDirectory', () => {
  it('es una función', () => {
    expect(typeof isDirectory).toBe('function');
  });
  it('si la ruta es un directorio', () => {
    expect(isDirectory('../LIM015-md-links')).toBe(true);
  });
  it('si la ruta no es un directorio', () => {
    expect(isDirectory('../LIM015-md-links/src/prueba/hola.txt')).toBe(false);
  });
});

describe('file', () => {
  it('es una función', () => {
    expect(typeof isFile).toBe('function');
  });
  it('si la ruta es un archivo', () => {
    expect(isFile('../LIM015-md-links/src/prueba/pepito.md')).toBe(true);
  });
  it('si la ruta es un archivo', () => {
    expect(isFile('../LIM015-md-links')).toBe(false);
  });
});

describe('fileMd', () => {
  it('es una función', () => {
    expect(typeof fileMd).toBe('function');
  });
  it('si es un archivo md', () => {
    expect(fileMd('../LIM015-md-links/src/prueba/pepito.md')).toEqual('../LIM015-md-links/src/prueba/pepito.md');
  });
  it('si la ruta no es un archivo md', () => {
    expect(fileMd('../LIM015-md-links/src/prueba/hola.txt')).toEqual(false);
  });
});

describe('readFiles', () => {
  it('es una función', () => {
    expect(typeof readFiles).toBe('function');
  });
  it('debería leer el archivo', () => {
    expect(readFiles('../LIM015-md-links/src/prueba/noelis.md')).toBe('Solo hice este archivo a ver si por fin me pasa el test de readFile auida.');
  });
});

describe('readDir', () => {
  it('es una función', () => {
    expect(typeof readDir).toBe('function');
  });
  it('debería leer un directorio', () => {
    expect(readDir('../LIM015-md-links/src/prueba')).toEqual(['hola.txt', 'noelis.md', 'pepito.md', 'portafolio-samy.md', 'pruebaDos']);
  });
});

describe('getFile', () => {
  it('es una función', () => {
    expect(typeof getFile).toBe('function');
  });
  it('debería devolver un arr de arr de chivos md', () => {
    expect(getFile('../LIM015-md-links/src/prueba')).toEqual([
      "C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba\\noelis.md",
      "C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba\\pepito.md",
      "C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba\\portafolio-samy.md",
      "C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\LIM015-md-links\\src\\prueba\\pruebaDos\\hola.md",
    ]);
  });
});

describe('getLinks', () => {
  it('es una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('debería retornar un objeto con los links', () => {
    const resultado = [
      {
        href: 'https://www.tabnine.com/code/javascript/functions/marked/Renderer',
        text: 'marked',
        file: '../LIM015-md-links/src/prueba/pepito.md'
      },
      {
        href: 'https://markjs.io/',
        text: 'mark.js',
        file: '../LIM015-md-links/src/prueba/pepito.md'
      }
    ];
    expect(getLinks('../LIM015-md-links/src/prueba/pepito.md')).toEqual(resultado);
  });
});

describe('status', () => {
  it('es una función', () => {
    expect(typeof status).toBe('function');
  });
  it('debería retornar una promesa que al resolverse trae un objeto con los links y sus estatus', () => {
    const resultado = [
      {
        href: 'https://www.tabnine.com/code/javascript/functions/marked/Renderer',
        text: 'marked',
        file: '../LIM015-md-links/src/prueba/pepito.md',
        status: 200,
        message: 'ok'
      },
      {
        href: 'https://markjs.io/',
        text: 'mark.js',
        file: '../LIM015-md-links/src/prueba/pepito.md',
        status: 200,
        message: 'ok'
      }
    ];
    expect(status('../LIM015-md-links/src/prueba/pepito.md')).toEqual(resultado);
  });
});