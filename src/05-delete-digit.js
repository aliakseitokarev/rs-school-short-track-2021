/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const temp = [];
  for (let i = 0; i < str.length; i++) {
    const st = str.split('');
    st[i] = '';
    temp.push(st.join(''));
  }
  const result = temp.sort((a, b) => a - b)[temp.length - 1];
  return parseInt(result, 10);
}

module.exports = deleteDigit;
