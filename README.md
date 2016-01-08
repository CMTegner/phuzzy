# phuzzy

Perform a fuzzy filter on a collection of items

[![Build status](https://travis-ci.org/CMTegner/phuzzy.svg)](http://travis-ci.org/CMTegner/phuzzy) [![Dependency status](https://david-dm.org/CMTegner/phuzzy.svg)](https://david-dm.org/CMTegner/phuzzy) [![NPM version](https://badge.fury.io/js/phuzzy.svg)](https://npmjs.org/package/phuzzy)

## Installation

``` bash
npm install phuzzy
```

### Alternatives

For usage via AMD / `<script>`, download a UMD bundle from [wzrd.in](http://wzrd.in/standalone/phuzzy@latest).

## Usage

``` javascript
var phuzzy = require('phuzzy')
```

### phuzzy(collection, search[, pick])

Performs a "fuzzy" search on `collection` using `search` as the term. `collection` is a native JavaScript array, or a array-like object that supports `Array#filter`. `pick` is an optional function that can be used to determine which property of the collection's items to evaluate, in the case where the items aren't strings. `pick` can also be specified as a string, see example below. `collection` is never mutated.

Example:

``` js
var beatles = ['paul', 'john', 'ringo', 'george']
var goBeatles = phuzzy(beatles, 'go')
console.log(goBeatles) // [ 'ringo', 'george' ]
```

'george' is included even to there are characters between the 'g' and 'o', since the search is "fuzzy".

Example using `pick`:

``` js
var documents = [
  { text: 'Hello World' },
  { text: 'Hello Lucy' },
  { text: 'Hello Maria' }
]
var filtered = phuzzy(documents, 'maria' item => item.text)
console.log(filtered) // [ { text: 'Hello Maria' ]
```

In this example we could substitute `item => item.text` with `"text"`, using the property name shorthand:

``` js
var filtered = phuzzy(documents, 'maria' 'text')
console.log(filtered) // [ { text: 'Hello Maria' ]
```

## ISC License

Copyright (c) 2016, Christian Maughan Tegnér

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
