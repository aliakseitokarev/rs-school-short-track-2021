/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array[middleIndex] !== value) {
      if (value < array[middleIndex]) endIndex = middleIndex;
      else startIndex = middleIndex;
      middleIndex = Math.floor((startIndex + endIndex) / 2);
    }
    if (array[middleIndex] === value) return middleIndex;
  }
  return middleIndex;
}

module.exports = findIndex;
