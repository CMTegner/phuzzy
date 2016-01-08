import test from 'tape'
import phuzzy from './index.js'

test('(collection, search) input should yield filtered collection', t => {
  const result = phuzzy(['one', 'two', 'three'], 'e')
  t.equals(result.length, 2)
  t.equals(result[0], 'one')
  t.equals(result[1], 'three')
  t.end()
})

