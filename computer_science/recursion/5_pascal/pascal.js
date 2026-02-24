const pascal = function(n) {
 
    const currentLine = [1];
    if (n === 1) {
      return currentLine;
    }
  
    const previousLine = pascal(n - 1);
    previousLine.forEach((Number, i) => {
        const rightNeighbour = previousLine[i + 1] ?? 0;
        currentLine.push(Number + rightNeighbour);
    })
    return currentLine;
}


  
// Do not edit below this line
module.exports = pascal;
