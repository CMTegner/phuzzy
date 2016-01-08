import escape from 'lodash.escaperegexp'

module.exports = (collection, search, pick = v => v) => {
  if (typeof pick === 'string') {
    let attr = pick
    pick = item => item[attr]
  }
  let exp = search.split('').map(escape).join('.*')
  let matcher = new RegExp(exp, 'i')
  return collection.filter(item => matcher.test(pick(item)))
}

