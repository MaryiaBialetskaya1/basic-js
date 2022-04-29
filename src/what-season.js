const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here

  if (
    !(date instanceof Date) ||
    Object.getOwnPropertySymbols(date).length !== 0
  ) {
    throw new Error("Invalid date!");
  }
  let monthSeasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "fall",
    "fall",
    "fall",
    "winter",
  ];
  return monthSeasons[date.getMonth()];
}

module.exports = {
  getSeason,
};
