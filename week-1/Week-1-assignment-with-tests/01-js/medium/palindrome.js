/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  /* lower convert
     clean string -> special char , spaces etc
     reverse string
     check and return 
  */
  const lowerStr = str.toLowerCase();

  const cleanStr = lowerStr.replace(/[^a-z]/g,''); // regular expression to exclude everything except lower[a-z], /g -> globally applied to whole string, else will only find first replacement and exit 
 
  const reversedStr = cleanStr.split('').reverse().join('');
 
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
