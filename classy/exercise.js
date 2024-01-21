"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var towers_1 = require("./towers");
// Exercise from Repl
/**
 * Height Values
 *
 * [0] will be node, and [1] will be the script's name
 * */
var first_value = process.argv[2];
var height = first_value.split(',').map(Number);
console.log("Received: ", height);
// Create a new object from the Towers class
var t = new towers_1.default();
// The result is printed to the console
console.log("Maximum area: ", t.maxArea(height));
