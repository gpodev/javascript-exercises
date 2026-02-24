const permutations = function(array) {
  if (array.length === 0) return [[]];
  const first = array[0];
  const rest = array.slice(1);
  const subPerms = permutations(rest);
  const result = [];
  subPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const newPerm = [...perm.slice(0, i), first, ...perm.slice(i)];
      result.push(newPerm);
    }
  });
  return result;
};
  
// Do not edit below this line
module.exports = permutations;
