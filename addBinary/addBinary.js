/**
 * 
 * Given two binary strings a and b, return their sum as a binary string.
Example 1:
Input: a = "11", b = "1"
Output: "100"
 */

var addBinary = function (a, b) {
  var len1 = a.length;
  var len2 = b.length;
  var max = Math.max(len1, len2);
  var result = "";
  var carry = 0;
  var val = 0;

  for (var i = 0; i < max; i++) {
    val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
    carry = Math.floor(val / 2);
    result = (val % 2) + result;
  }

  if (carry) result = 1 + result;

  return result;
};
