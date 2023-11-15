/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  const sortedStr1 = lowerStr1.split('').sort().join();
  const sortedstr2 = lowerStr2.split('').sort().join();

  return sortedStr1 === sortedstr2;
}

module.exports = isAnagram;
