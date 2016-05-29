'use strict'

function stringify (key, value) {
  return '"' + key + '":"' + value + '"'
}

function JSONify (input, index, lastIndex) {
  input = input.split(':')
  var key = input[0]
  var value = input[1]
  var separator = index !== lastIndex ? ',' : ''
  return stringify(key, value) + separator
}

function dsl (str) {
  str = str.split(' ')

  var open = '{'
  var close = '}'
  var result = ''
  var size = str.length
  var lastIndex = size - 1
  var index = -1

  while (str[++index] && str[index].indexOf(':') !== -1) {
    result += JSONify(str[index], index, lastIndex)
  }

  if (str[index]) {
    var text = str.slice(index, size).join(' ')
    result += stringify('text', text)
  }

  return JSON.parse(open + result + close)
}

module.exports = dsl
