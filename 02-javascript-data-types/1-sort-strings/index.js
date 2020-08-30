/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  const sortFunc = (array, sortDirection) =>
    [...array].sort(
      (stringA, stringB) =>
        sortDirection *
        stringA.localeCompare(stringB, 'default', { caseFirst: 'upper' }),
    )

  switch (param) {
    case 'asc':
      return sortFunc(arr, 1)
    case 'desc':
      return sortFunc(arr, -1)
    default:
      return sortFunc(arr, 1)
  }
}
