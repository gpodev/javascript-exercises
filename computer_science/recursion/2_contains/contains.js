//recursive solution

const contains = function(object, value) {
  if (typeof object === 'object') {
    for (let key in object) {
      if (object[key] === value) {
        return true;
      }
      if (typeof object[key] === 'object') {
        if (contains(object[key], value)) {
          return true;
        }
      }
    }
  }
  return false; 

};
  
// Do not edit below this line
module.exports = contains;
