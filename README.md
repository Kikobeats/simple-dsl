# Simple DSL

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/simple-dsl.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/simple-dsl.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/simple-dsl/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/simple-dsl)
[![Dependency status](https://img.shields.io/david/Kikobeats/simple-dsl.svg?style=flat-square)](https://david-dm.org/Kikobeats/simple-dsl)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/simple-dsl.svg?style=flat-square)](https://david-dm.org/Kikobeats/simple-dsl#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/simple-dsl.svg?style=flat-square)](https://www.npmjs.org/package/simple-dsl)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Simple DSL based on <key,value> designed to work together fulltext search engines.

## Why

- Converts a unstructured input into a structued output.
- Makes easy connect with fulltext search engines such as Solr, ElasticSearch, MongoDB, etc.
- Less than 2KB.

I designed this solution for create a rapid and quickly DSL for fulltext search.

It is inspired in other solutions, such as [Github](https://github.com/search) [Search](https://help.github.com/articles/searching-issues/) Engine but **out of the box**.

## Install

```bash
$ npm install simple-dsl --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
$ bower install simple-dsl --save
```

and later link in your HTML:

```html
<script src="bower_components/simple-dsl/dist/simple-dsl.js"></script>
```

## Usage

Basically the DSL works detecting `<key, value>` patterns:

```js
const dsl = require('simple-dsl')
dsl('is:issue status:closed bug fixed')
// {
//   is: 'issue',
//   status: 'closed',
//   text: 'bug fixed'
// }
```

When you don't provide a `<key, value>` pattern (in this example `bug fixed` don't follow the format) you are creating a `text` value.

You can declare multiple values with the same key:

```js
const dsl = require('simple-dsl')
dsl('user:kiko user:javier status:closed bug fixed')
// {
//   is: 'issue',
//   status: 'closed',
//   user: ['kiko', 'javier']
//   text: 'bug fixed'
// }
```

If you want to use spaces, use inside quotes:

```js
const dsl = require('simple-dsl')
dsl('user:"kiko beats" user:"javier baena" status:closed bug fixed')
// {
//   is: 'issue',
//   status: 'closed',
//   user: ['kiko beats', 'javier baena']
//   text: 'bug fixed'
// }
```

## Related

- [Ghost Query Language (GQL)](https://github.com/TryGhost/GQL) – Filter query language for working with Ghost's API.

## License

MIT © [Kiko Beats](http://kikobeats.com)
