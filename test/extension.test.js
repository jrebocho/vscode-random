var assert = require('assert')
var vscode = require('vscode')
var myExtension = require('../extension')

suite('Extension Tests', function () {
  test('Something 1', function () {
    assert.equal(-1, [1, 2, 3].indexOf(5))
    assert.equal(-1, [1, 2, 3].indexOf(0))
  })
})
