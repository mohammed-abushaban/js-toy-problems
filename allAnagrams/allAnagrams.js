/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function (string) {
  function repeat(em, str) {
    if (str.length === 1) {
      return [em + str];
    } else {
      var results = [];
      for (var i = 0; i < str.length; i++) {
        var x = repeat(str[i], str.substr(0, i) + str.substr(i + 1));
        for (var j = 0; j < x.length; j++) {
          results.push(em + x[j]);
        }
      }

      return results;
    }
  }

  return repeat('', string);
};

console.log(allAnagrams('abc'));