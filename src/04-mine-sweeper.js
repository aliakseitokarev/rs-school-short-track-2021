/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {temp<temp>} matrix
 * @return {temp<temp>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const temp = matrix.map((el) => el.map((elem) => (elem || 0)));
  temp.forEach((elem, index) => {
    elem.forEach((el, i) => {
      if (el !== true) {
        if (!index) {
          if (temp[index + 1][i] === true) temp[index][i]++;
          if (!i) {
            if (temp[index + 1][i + 1] === true) temp[index][i]++;
            if (elem[i + 1] === true) temp[index][i]++;
          } else if (i === elem.length - 1) {
            if (temp[index + 1][i - 1] === true) temp[index][i]++;
            if (elem[i - 1] === true) temp[index][i]++;
          } else {
            if (temp[index + 1][i - 1] === true) temp[index][i]++;
            if (elem[i - 1] === true) temp[index][i]++;
            if (temp[index + 1][i + 1] === true) temp[index][i]++;
            if (elem[i + 1] === true) temp[index][i]++;
          }
        } else if (index === temp.length - 1) {
          if (temp[index - 1][i] === true) temp[index][i]++;
          if (!i) {
            if (temp[index - 1][i + 1] === true) temp[index][i]++;
            if (elem[i + 1] === true) temp[index][i]++;
          } else if (i === elem.length - 1) {
            if (temp[index - 1][i - 1] === true) temp[index][i]++;
            if (elem[i - 1] === true) temp[index][i]++;
          } else {
            if (temp[index - 1][i - 1] === true) temp[index][i]++;
            if (elem[i - 1] === true) temp[index][i]++;
            if (temp[index - 1][i + 1] === true) temp[index][i]++;
            if (elem[i + 1] === true) temp[index][i]++;
          }
        } else if (!i) {
          if (temp[index + 1][i] === true) temp[index][i]++;
          if (temp[index - 1][i] === true) temp[index][i]++;
          if (temp[index + 1][i + 1] === true) temp[index][i]++;
          if (temp[index - 1][i + 1] === true) temp[index][i]++;
          if (elem[i + 1] === true) temp[index][i]++;
        } else if (i === elem.length - 1) {
          if (temp[index + 1][i] === true) temp[index][i]++;
          if (temp[index - 1][i] === true) temp[index][i]++;
          if (temp[index + 1][i - 1] === true) temp[index][i]++;
          if (temp[index - 1][i - 1] === true) temp[index][i]++;
          if (elem[i - 1] === true) temp[index][i]++;
        } else {
          if (temp[index + 1][i] === true) temp[index][i]++;
          if (temp[index - 1][i] === true) temp[index][i]++;
          if (temp[index + 1][i + 1] === true) temp[index][i]++;
          if (temp[index + 1][i - 1] === true) temp[index][i]++;
          if (temp[index - 1][i + 1] === true) temp[index][i]++;
          if (temp[index - 1][i - 1] === true) temp[index][i]++;
          if (elem[i - 1] === true) temp[index][i]++;
          if (elem[i + 1] === true) temp[index][i]++;
        }
      }
    });
  });
  const result = temp.map((el) => el.map((elem) => {
    if (elem === true) return 1;
    return elem;
  }));
  return result;
}

module.exports = minesweeper;
