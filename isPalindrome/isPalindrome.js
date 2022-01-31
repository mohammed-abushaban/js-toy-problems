// 121 true, 123 flase

var isPalindrome = function (x) {
  if (x < 0) return false;
  var l = x;
  var num = 0;
  var r = 0;
  while (x > 0) {
    r = x % 10;
    num = num * 10 + r;
    x = (x - r) / 10;
  }
  if (l == num) return true;
  return false;
};
