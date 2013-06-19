#!/usr/bin/env node

var polydir = require(__dirname+'/index.js');

console.log(polydir([[5,0],[6,4],[4,5],[1,5],[1,0]]));
console.log(polydir([[1,0],[1,5],[4,5],[6,4],[5,0]]));
