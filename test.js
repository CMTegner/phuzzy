import test from 'tape'
import phuzzy from './index.js'

test('(collection, search) input should yield filtered collection', t => {
  const result = phuzzy(['one', 'two', 'three'], 'e')
  t.equals(result.length, 2)
  t.equals(result[0], 'one')
  t.equals(result[1], 'three')
  t.end()
})

test('Will return new array instead of mutating input', t => {
  const collection = ['one', 'two', 'three']
  const result = phuzzy(collection, 'e')
  t.equals(result.length, 2)
  t.equals(collection.length, 3)
  t.end()
})

test('RegExp special chars will be escaped properly', t => {
  const result = phuzzy(['baa', 'bba', 'b.a'], 'b.a')
  t.equals(result.length, 1)
  t.equals(result[0], 'b.a')
  const result2 = phuzzy(['(alpha)', '(beta)', '(charlie)'], 'e)')
  t.equals(result2.length, 2)
  t.equals(result2[0], '(beta)')
  t.equals(result2[1], '(charlie)')
  t.end()
})

test('Treat search term as fuzzy', t => {
  const result = phuzzy(['baa', 'bba', 'b.a'], 'ba')
  t.equals(result.length, 3)
  t.equals(result[0], 'baa')
  t.equals(result[1], 'bba')
  t.equals(result[2], 'b.a')
  t.end()
})

test('Ignore case when matching', t => {
  const result = phuzzy(['bAA', 'Bba', 'b.a'], 'bA')
  t.equals(result.length, 3)
  t.equals(result[0], 'bAA')
  t.equals(result[1], 'Bba')
  t.equals(result[2], 'b.a')
  t.end()
})

test('Configurable search target via pick-like function', t => {
  const collection = [{ text: 'bar' }, { text: 'baz' }]
  const result = phuzzy(collection, 'bz', item => item.text)
  t.equals(result.length, 1)
  t.equals(result[0], collection[1])
  t.end()
})

test('Configurable search target via property name shorthand', t => {
  const collection = [{ text: 'bar' }, { text: 'baz' }]
  const result = phuzzy(collection, 'bz', 'text')
  t.equals(result.length, 1)
  t.equals(result[0], collection[1])
  t.end()
})

