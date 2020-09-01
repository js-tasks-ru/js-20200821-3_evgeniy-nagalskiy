/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const chunks = string.split('').reduce(
    (acc, curLetter, ind, arr) => {
      const isSameLetter = acc.lastLetter === curLetter
      if (isSameLetter) {
        acc.lastChunk = [...acc.lastChunk, curLetter]
      } else {
        acc.lastLetter = curLetter
        acc.chunks = [...acc.chunks, acc.lastChunk]
        acc.lastChunk = [curLetter]
      }
      return ind < arr.length - 1 ? acc : [...acc.chunks, acc.lastChunk]
    },
    { chunks: [], lastChunk: [], lastLetter: string[0] },
  )
  return string === ''
    ? ''
    : chunks.map((chunk) => chunk.join('').substring(0, size)).join('')
}
