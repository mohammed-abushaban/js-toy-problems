// return the length of the last word in a string
var lengthOfLastWord = function (s) {
  var arr = s.split(" ");
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "") return arr[i].length;
  }
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
