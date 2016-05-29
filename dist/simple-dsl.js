/**
 * simple-dsl - Simple String <key,value> DSL.
 * @version v0.0.0
 * @link    https://github.com/Kikobeats/simple-dsl
 * @license MIT
 */require=function r(e,t,n){function i(u,f){if(!t[u]){if(!e[u]){var s="function"==typeof require&&require;if(!f&&s)return s(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var p=t[u]={exports:{}};e[u][0].call(p.exports,function(r){var t=e[u][1][r];return i(t?t:r)},p,p.exports,r,e,t,n)}return t[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({"simple-dsl":[function(r,e,t){"use strict";function n(r){for(var e="{",t="}",n="",i=r.length-1,o=0;o<r.length;++o){var u=r[o].split(":"),f=u[0],s=u[1],c=o===i?"":",";n+='"'+f+'":"'+s+'"'+c}return JSON.parse(e+n+t)}function i(r){return r=r.split(" "),n(r)}e.exports=i},{}]},{},[]);