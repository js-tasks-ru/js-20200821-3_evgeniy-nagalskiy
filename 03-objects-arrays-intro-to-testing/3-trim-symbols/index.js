/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const { breaks } = string
    .split('')
    .reduce(
      (acc, curLetter, ind) =>
        acc.prevLetter === curLetter
          ? acc
          : { breaks: [...acc.breaks, ind], prevLetter: curLetter },
      { breaks: [0], prevLetter: string[0] },
    )
  return breaks
    .map((b, ind, arr) => string.substring(b, arr[ind + 1]))
    .map((word) => word.substring(0, size))
    .join('')
}
