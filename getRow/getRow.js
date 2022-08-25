/**Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1] */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  var result = [[1], [1, 1]];
  for (let i = 2; i < rowIndex + 1; i++) {
    let arr = [1];
    for (let x = 0, y = 1; x < result[i - 1].length - 1; x++, y++) {
      let num = result[i - 1][x] + result[i - 1][y];
      arr.push(num);
    }
    arr.push(1);
    result.push(arr);
  }
  return result[result.length - 1];
};
console.log(getRow(3));
