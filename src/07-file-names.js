/**
 * There's a list of file, since two files cannot have equal files,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of files that will be given to the files.
 *
 * @param {Array} files
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const files = [...names];
  const result = [];
  names.forEach((el, index) => {
    let i = 0;
    let count = 0;
    let element = el;
    if (element.slice(-1) === ')') {
      while (i < index) {
        if (files[i] === element) {
          count++;
          files[i] = `${element}(${count})`;
          element = `${element}(${count})`;
        }
        i++;
      }
    } else {
      while (i < index) {
        if (files[i] === element) {
          count++;
          if (files[i].slice(-1) === ')') {
            files[i] = `${files[i].slice(0, -3)}(${count})`;
            element = `${files[i].slice(0, -3)}(${count})`;
          } else {
            files[i] = `${element}(${count})`;
            element = `${element}(${count})`;
          }
        }
        i++;
      }
    }
    result.push(element);
  });
  return result;
}

module.exports = renameFiles;
