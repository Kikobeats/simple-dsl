# simple-dsl

<p align="center">
  <br>
  <img src="https://i.imgur.com/Mh13XWB.gif" alt="simple-dsl">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/simple-dsl.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/simple-dsl/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/simple-dsl)
[![Dependency status](https://img.shields.io/david/Kikobeats/simple-dsl.svg?style=flat-square)](https://david-dm.org/Kikobeats/simple-dsl)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/simple-dsl.svg?style=flat-square)](https://david-dm.org/Kikobeats/simple-dsl#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/simple-dsl.svg?style=flat-square)](https://www.npmjs.org/package/simple-dsl)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

**NOTE:** more badges availables in [shields.io](https://shields.io/)

> Simple String <key,value> DSL.

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

```js
const simpleDsl = require('simple-dsl')

simpleDsl('do something')
//=> return something
```

## API

### simpleDsl(input, [options])

#### input

*Required*
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`
Default: `false`

Lorem ipsum.

## License

MIT © [Kiko Beats](http://kikobeats.com)
