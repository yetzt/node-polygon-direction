# Polygon Direction

Determine if a polygon is clockwise or counter-clockwise

## Install

````
npm install polygon-direction
````

## Methods

var polydir = require("point-in-polygon");

### polydir(polygon)

Returns `true` if a polygon is clockwise, `false` if it it counter-clockwise.

`polygon` should be an array of 2-item arrays of coordinates.

## Example

```` javascript

var polydir = require("polygon-direction");

console.log(polydir([[5,0],[6,4],[4,5],[1,5],[1,0]]));

````