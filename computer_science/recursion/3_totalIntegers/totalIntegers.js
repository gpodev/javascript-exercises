const totalIntegers = function(array) {
  const values = array.values();
    let count = 0;
    for (const value of values) {
      if (Number.isInteger(value)) {
        count++;
      }
      if (Array.isArray(value)) {
        count += totalIntegers(value);
      }
  return count;
};
}

  
// Do not edit below this line
module.exports = totalIntegers;
