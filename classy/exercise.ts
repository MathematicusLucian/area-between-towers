import Towers from './towers';

// Exercise from Repl

/** 
 * Height Values
 * 
 * [0] will be node, and [1] will be the script's name
 * */ 
const first_value = process.argv[2];
let height: number[] = first_value.split(',').map(Number);

console.log("Received: ", height);

// Create a new object from the Towers class
let t = new Towers();

// The result is printed to the console
console.log("Maximum area: ", t.maxArea(height));