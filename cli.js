#!/usr/bin/env node

var unpublished = require('./')

if (process.argv.length < 4) {
  console.error('usage: was-unpublished <pacakge> <version>')
  process.exit(1)
}

var name = process.argv[2]
var version = process.argv[3]
unpublished(name, version, function (err, isUnpublished) {
  if (err) {
    console.error(err)
    process.exit(2)
  }
  if (isUnpublished) {
    console.log('Yes,', name, version, 'was unpublished.')
  } else {
    console.log('No,', name, version, 'is still published.')
  }
})
