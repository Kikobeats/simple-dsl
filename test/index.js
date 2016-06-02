/* global describe, it */

'use strict'

var dsl = require('..')

describe('simple-dsl', function () {
  describe('simple expressions', function () {
    it('cat type:pr', function () {
      dsl('cat type:pr').should.be.eql({
        text: 'cat',
        type: 'pr'
      })
    })

    it('github commenter:defunkt type:issue', function () {
      dsl('github commenter:defunkt type:issue').should.be.eql({
        text: 'github',
        commenter: 'defunkt',
        type: 'issue'
      })
    })

    it('is:private cupcake', function () {
      dsl('is:private cupcake').should.be.eql({
        is: 'private',
        text: 'cupcake'
      })
    })

    it('user:"kiko beats" cupcake', function () {
      dsl('user:"kiko beats" cupcake').should.be.eql({
        user: 'kiko beats',
        text: 'cupcake'
      })

      dsl('cupcake user:"kiko beats"').should.be.eql({
        user: 'kiko beats',
        text: 'cupcake'
      })
    })
  })

  describe('multiple values in different fields', function () {
    it('user:kiko user:beats', function () {
      dsl('user:kiko user:beats').should.be.eql({
        user: ['kiko', 'beats']
      })
    })

    it('user:"kiko beats" user:"javier baena"', function () {
      dsl('user:"kiko beats" user:"javier baena"').should.be.eql({
        user: ['kiko beats', 'javier baena']
      })
    })

    it('user:"kiko beats" user:"javier baena" user:"alfredo artiles"', function () {
      dsl('user:"kiko beats" user:"javier baena" user:"alfredo artiles"').should.be.eql({
        user: ['kiko beats', 'javier baena', 'alfredo artiles']
      })
    })
  })
})
