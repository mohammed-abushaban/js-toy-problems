// var climbStairs = function (n) {
//   if (n === 0 || n === 1) return 1;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
var climbStairs = function (n) {
  if (n == 1 || n == 0) return 1; // our base cases

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
console.log(climbStairs(2));
console.log(climbStairs(45));
