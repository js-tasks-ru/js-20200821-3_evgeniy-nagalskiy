/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let propsArr = path.split('.')
  return (obj) =>
    Object.keys(obj).length
      ? propsArr.reduce((acc, cur) => acc && acc[cur], obj)
      : undefined
}
