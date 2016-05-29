'use strict'

var dsl = require('..')

describe('simple-dsl', function () {
  it('simple key value', function () {
    dsl('kiko:beats').should.be.eql({kiko: 'beats'})
  })
})
