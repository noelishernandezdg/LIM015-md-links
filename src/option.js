// Contidad total de links
const total = (links) => 'total: ' + links.length; 

// contidad de links únicos
const unique = (links) => {
  const mySet = new Set();
  links.forEach((link) => mySet.add(link.href));
  return 'Unique: ' + mySet.size;
};

//cantidad de links rotos
const broken = (links) => {
  const brokenResult = links.filter((link) => link.status >= 400);
  return 'Broken: ' + brokenResult.length;
};


module.exports = {
  total,
  unique,
  broken,
};
