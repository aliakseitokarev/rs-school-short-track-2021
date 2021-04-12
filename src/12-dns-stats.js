/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stat = {};
  domains.forEach((element) => {
    let temp = `.${element}`;
    let str = '';
    while (temp.lastIndexOf('.') !== -1) {
      const step = str + temp.slice(temp.lastIndexOf('.'));
      if (step in stat) {
        stat[step] += 1;
      } else {
        stat[step] = 1;
      }
      str += temp.slice(temp.lastIndexOf('.'));
      temp = temp.slice(0, temp.lastIndexOf('.'));
    }
  });
  return stat;
}

module.exports = getDNSStats;
