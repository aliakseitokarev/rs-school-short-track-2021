/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const hashOfLetters = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in hashOfLetters) {
      hashOfLetters[str[i]] += 1;
    } else {
      hashOfLetters[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (hashOfLetters[str[i]] === 1) {
      result += str[i];
      hashOfLetters[str[i]] = 0;
    } else if (hashOfLetters[str[i]] > 1) {
      result += `${hashOfLetters[str[i]]}${str[i]}`;
      hashOfLetters[str[i]] = 0;
    }
  }
  return result;
}

module.exports = encodeLine;
