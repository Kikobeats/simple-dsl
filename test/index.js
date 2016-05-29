/* global describe, it */

'use strict'

var dsl = require('..')

describe('simple-dsl', function () {
  it('simple key value', function () {
    dsl('kiko:beats').should.be.eql({kiko: 'beats'})
  })

  it('more than one key ', function () {
    dsl('kiko:beats beats:kiko').should.be.eql({kiko: 'beats', beats: 'kiko'})
  })

  it('detect primary text', function () {
    dsl('is:issue status:closed bug fixed').should.be.eql({
      is: 'issue',
      status: 'closed',
      text: 'bug fixed'
    })
  })
})
