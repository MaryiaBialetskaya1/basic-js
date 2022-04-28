const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.slice();
  let position = [];
  let i = -1;
  while ((i = arr.indexOf(-1, i + 1)) > -1) {
    position.push(i);
  }
  let newPos = position.slice();
  while (newPos.length) {
    newArr.splice(newPos.pop(), 1);
  }

  newArr.sort((arr, newArr) => arr - newArr);
  while (position.length) {
    newArr.splice(position.shift(), 0, -1);
  }
  return newArr;
}
module.exports = {
  sortByHeight,
};
