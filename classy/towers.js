"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Towers = /** @class */ (function () {
    function Towers() {
        // Stub
    }
    /**
     * Scans a list of heights that represent towers,
     * and returns the maximum possible area between tower pairs
     * @param {number[]} height a list of tower heights
     * @returns {number} maximum area possible
     */
    Towers.prototype.maxArea = function (height) {
        var _this = this;
        this.validateInputs(height);
        var maximumPossibleArea = 0;
        // Loop -> Each Tower (Left to Right)
        /**
         * One could use ``for (let i = 0; i < height.length - 1; i++) {``
         * but ``forEach`` is cleaner
         * Could also use ``arr.forEach(function(item, i)``
         * Another option would be to use ``map``
         */
        height.forEach(function (iValue, iXAxis) {
            /**
             * This current index is Building I
             *
             * We will compare it to the other buildings, with a second loop, where the index is Building J
             *
             * There is no pointing comparing to:-
             * Itself, i.e. where Building I and Building J are the same index/value in heights array
             * Avoid duplication of effort; a more efficient algorithm:
             * As the index of Building I increases, there is no point comparing to those before it,
             * because these were considered when they were Building I and the current location was then Building J
             * :. For each tower, consider area ONLY between it and the towers AHEAD
             *
             * Determine the towers ahead of Building I
             */
            var buildingsAhead = _this.determineBuildingsAhead(height, iXAxis);
            // Loop -> Each Tower (Left to Right)
            buildingsAhead.forEach(function (jValue, jXAxis) {
                var areaAtCurrentIndices = _this.calculateLargestAreaForIndex(iValue, jValue, jXAxis);
                /**
                 * If the result is greater than that between previous tower pairs,
                 * updated store maximumPossibleArea value
                 * */
                maximumPossibleArea = Math.max(maximumPossibleArea, areaAtCurrentIndices);
            });
        });
        return maximumPossibleArea;
    };
    /**
     * Returns the maximum possible area between all pairs with an index
     * @param {number} iValue height of Building I
     * @param {number} jValue height of Building J
     * @param {number} jXAxis location of Building J
     * @returns {number} largest area for index
     */
    Towers.prototype.calculateLargestAreaForIndex = function (iValue, jValue, jXAxis) {
        /**
         * We need the X-axis value, if we are to calculate the area
         */
        var lowestTower = this.determineMaxHeightForPairs(iValue, jValue);
        /**
         * Determine area:
         * Multiply:
         *      Y-axis as lower tower
         * With:
         *   Distance (X-axis):
         */
        return (lowestTower * (jXAxis + 1));
    };
    /**
     * Returns height (maximum shared) of two towers
     * @param {number} iValue height of Building I
     * @param {number} jValue height of Building J
     * @returns {number} height of area
     */
    Towers.prototype.determineMaxHeightForPairs = function (iValue, jValue) {
        /**
         * Determine the lower of the two towers
         */
        return Math.min(iValue, jValue);
    };
    /**
     * Returns the maximum possible area between tower pairs from a list of tower heights
     * @param {number[]} height a list of tower heights
     * @param {number} iXAxis location of Building I
     * @returns {number[]} list of buildings ahead of the index
     */
    Towers.prototype.determineBuildingsAhead = function (height, iXAxis) {
        /**
         * Clone to avoid mutating the original area
         * Then add 1 because we do not want to include the current Building I
         */
        var cloneBuildingHeights = height.slice(0);
        /**
         * We are comparing two buildings, at Building I and Building J
         * The second array was spliced with the index of Building I
         * :. The second array has the 'height' array values that occur after Building I
         * :. Building J's index in the second array is its distance from Building J
         * Addition of 1 to the value, because computers count from 0
         */
        return cloneBuildingHeights.splice(iXAxis + 1);
    };
    /**
     * Throws error if out of range
     */
    Towers.prototype.outOfRange = function () {
        try {
            throw new RangeError();
        }
        catch (e) {
            console.log('Out of range:', e);
        }
    };
    /**
     * Validates whether the length of the height variable,
     * and the values within, are within constraints
     *
     * CONSTRAINTS
     * 2 <= n <= 105
     * n == height.length
     * 0 <= height[i] <= 104
     *
     * @param {number[]} height a list of tower heights
     */
    Towers.prototype.validateInputs = function (height) {
        if (height.length < 2 || height.length > 105)
            this.outOfRange();
        if (this.areTowerHeightsOutOfRange(height))
            this.outOfRange();
    };
    /**
     * Validates whether the values within, are within constraints
     *
     * CONSTRAINTS
     * 0 <= height[i] <= 104
     *
     * @param {number[]} height a list of tower heights
     */
    Towers.prototype.areTowerHeightsOutOfRange = function (height) {
        return height.some(function (iValue) {
            return (iValue < 0 || iValue > 104);
        });
    };
    return Towers;
}());
exports.default = Towers;
