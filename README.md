# sheetify-less [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

> less plugin for Sheetify.

## CLI
```sh
$ browserify ./test/source.js -t [ sheetify/transform -u sheetify-less ]
```

## API
```js
const browserify = require('browserify')

browserify()
  .transform('sheetify/transform', { use: [ 'sheetify-less' ] })
  .bundle()
```

## Installation
```sh
$ npm install sheetify-less
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/sheetify-less.svg?style=flat-square
[3]: https://npmjs.org/package/sheetify-less
[4]: https://img.shields.io/travis/marionebl/sheetify-less/master.svg?style=flat-square
[5]: https://travis-ci.org/marionebl/sheetify-less
[6]: https://img.shields.io/codecov/c/github/marionebl/sheetify-less/master.svg?style=flat-square
[7]: https://codecov.io/github/marionebl/sheetify-less
[8]: http://img.shields.io/npm/dm/sheetify-less.svg?style=flat-square
[9]: https://npmjs.org/package/sheetify-less
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
