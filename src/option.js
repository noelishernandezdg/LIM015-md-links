// Contidad total de links
const total = (links) => 'total: ' + links.length; 

// contidad de links únicos
const unique = (links) => {
  const mySet = new Set();
  links.forEach((link) => mySet.add(link.href));
  return 'Unique: ' + mySet.size;
};

// Contidad de links rotos
const broken = (links) => {
  const brokenResult = links.filter((link) => link.status >= 400);
  return 'Broken: ' + brokenResult.length;
};

// const stats = (links) => {
//   return total + unique;
// }

// const validateStats = (links) => {
//   return total + unique + broken;
// }

module.exports = {
  total,
  unique,
  broken,
  // stats,
  // validateStats,
};
