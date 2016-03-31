# was-unpublished
[![NPM](https://nodei.co/npm/was-unpublished.png)](https://nodei.co/npm/was-unpublished/)

Small pacakge to test if a specified version of a package on npm was unpublished.

```js
var unpublished = require('was-unpublished')

unpublished(name, version, function (err, isUnpublished) {
  if (err) return console.error(err) // if the package was never published: error
  if (isUnpublished) {
    // unpublished
  } else {
   // still published
  }
})
```

## CLI

`npm install was-unpublished -g`
```
usage: was-unpublished <pacakge> <version>
```

Example
```bash
$ was-unpublished was-unpublished 1.0.0
Yes, was-unpublished 1.0.0 was unpublished.
$ was-unpublished was-unpublished 1.0.1
No, was-unpublished 1.0.1 is still published.
```
