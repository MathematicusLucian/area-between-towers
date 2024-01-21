// CONSTRAINTS
// 2 <= n <= 105
// n == height.length
// 0 <= height[i] <= 104
// const http = require('http'); 
function maxArea(height) {
    var maximum = 0;
    // Loop -> Each Tower (Left to Right)
    // for (let i = 0; i < height.length - 1; i++) {
    // to avoid casting i to integer, another option is arr.forEach(function(item, i)
    height.forEach(function (iValue, i) {
        // For each tower, consider area between it and the ones ahead
        // Determine the lower of the two towers and multiply with X-axis
        // Therefore, store the distance (X-axis)
        // If area between these two buildings is greater than previously stored area, set as stored area
        // Loop -> Each Tower (Left to Right)
        // for (let j = i + 1; j < height.length; j++) {
        // The distance between the tower in question and any tower prior was already considered, 
        // when measuring against it from tower prior in the away
        var cloneBuildingHeights = height.slice(0);
        var buildingsAhead = cloneBuildingHeights.splice(i + 1);
        buildingsAhead.forEach(function (jValue, j) {
            // Determine the lower of the two towers
            var lowestTower = Math.min(iValue, jValue);
            // Determine area
            // Y-axis as lower tower
            // Distance (X-axis):
            // We are comparing two buildings, at Building I and Building J
            // The second array was spliced with the index of Building I
            // :. The second array has the 'height' array values that occur after Building I
            // :. Building J's index in the second array is its distance from Building J
            // Addition of 1 to the value, because computers count from 0
            var current = (lowestTower * (j + 1));
            // If area between these two buildings is greater than previously stored area, set as stored area
            maximum = Math.max(maximum, current);
        });
    });
    return maximum;
}
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var n = height.length;
console.log(maxArea(height));
// const server = http.createServer((req, res) => { res.end(); }); 
// server.listen(3000, () => {
// });
