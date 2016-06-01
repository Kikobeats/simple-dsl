'use strict'

var REGEX = {
  TRIM_QUOTES: /"/g
}

function isKeyValue (str) {
  return str.indexOf(':') !== -1
}

function isText (str) {
  return !isKeyValue(str)
}

function hasQuote (str) {
  return str.toString().indexOf('"') !== -1
}

function addKeyValue (json, item) {
  item = item.split(':')
  json[item[0]] = item[1]
}

var buffer = ''
var bufferCalls = 0

function addText (json, item) {
  if (!hasQuote(item)) {
    json.text += item
    return
  }

  var separator = buffer ? buffer + ' ' : ''
  buffer = separator + item

  if (++bufferCalls === 2) {
    addKeyValue(json, buffer.replace(REGEX.TRIM_QUOTES, ''))
    buffer = null
    bufferCalls = 0
  }
}

function dsl (input) {
  input = input.split(' ')

  var index = -1

  var json = {
    text: ''
  }

  while (input[++index]) {
    var item = input[index]
    if (isKeyValue(item) && !hasQuote(item)) addKeyValue(json, item)
    else addText(json, item)
  }

  return json
}

module.exports = dsl
