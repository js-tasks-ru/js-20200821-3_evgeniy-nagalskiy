/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let acc = []
  return arr
    ? arr.filter((item) => {
        if (!acc.includes(item)) {
          acc.push(item)
          return true
        }
      })
    : []
}
