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
  let count = 1;
  const arrOfLetters = str.split('');
  result = arrOfLetters.reduce((accum, currVal, i) => {
    let adder = accum;
    if (arrOfLetters[i] === arrOfLetters[i + 1]) {
      count++;
      return accum;
    }
    adder += `${count > 1 ? count : ''}${currVal}`;
    count = 1;
    return adder;
  }, '');
  return result;
}

module.exports = encodeLine;
