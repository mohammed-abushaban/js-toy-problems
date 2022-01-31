/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
 */

var longestCommonPrefix = function (strs) {
  let result = "";
  if (strs === null || strs.length === 0) return result;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // loop through all characters of the very first string.

    for (let j = 1; j < strs.length; j++) {
      // loop through all other strings in the array
      if (strs[j][i] !== char) return result;
    }
    result = result + char;
  }

  return result;
};
