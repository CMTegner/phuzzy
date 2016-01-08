import escape from 'lodash.escaperegexp'

/**
 * Create a filtered copy of `collection`, using `search` as a fuzzy search term.
 *
 * @param {Array|*} collection array, or array-like collection
 * @param {String} search search term
 * @param {Function|String} [pick] function (or string shorthand) that returns
 * the item property to evaluate, defaults to returning the item itself (identity)
 * @returns {Array|*} a copy of the input collection, containing only the elements
 * that match the search term
 */
module.exports = (collection, search, pick = v => v) => {
  if (typeof pick === 'string') {
    let attr = pick
    pick = item => item[attr]
  }
  let exp = search.split('').map(escape).join('.*')
  let matcher = new RegExp(exp, 'i')
  return collection.filter(item => matcher.test(pick(item)))
}

