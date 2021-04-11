/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const arr1 = [...s1];
  const arr2 = [...s2];
  arr1.forEach((elem) => {
    for (let i = 0; i < arr2.length; i++) {
      if (elem === arr2[i]) {
        arr2[i] = '';
        result += 1;
        break;
      }
    }
  });
  return result;
}

module.exports = getCommonCharacterCount;
