const {
  routeExists, routeAbsolute, isDirectory, isFile, fileMd, readFiles, readDir,
} = require('../src/index.js');

describe('If routeExists', () => {
  it('es una función', () => {
    expect(typeof routeExists).toBe('function');
  });
});

describe('If routeAbsolute', () => {
  it('es una función', () => {
    expect(typeof routeAbsolute).toBe('function');
  });
  it('si la ruta es relativa pasar a absoluta', () => {
    expect(routeAbsolute('../Prueba/hola.txt')).toEqual('C:\\Users\\USUARIO\\Documents\\ProyectosLAB\\Prueba\\hola.txt');
  });
});

describe('If isDirectory', () => {
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

describe('If file', () => {
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

describe('If fileMd', () => {
  it('es una función', () => {
    expect(typeof fileMd).toBe('function');
  });
  it('si es un archivo md', () => {
    expect(fileMd('../LIM015-md-links/src/prueba/pepito.md')).toEqual('../LIM015-md-links/src/prueba/pepito.md');
  });
  it('si la ruta no es un archivo md', () => {
    expect(isFile('../LIM015-md-links/src/prueba/hola.txt')).toEqual([]);
  });
});
