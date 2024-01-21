/**
 * Scans a list of heights that represent towers, 
 * and returns the maximum possible area between tower pairs
 * @param {number[]} height a list of tower heights
 * @returns {number} maximum area possible
 */
function maxArea(height: number[]): number {

    validateInputs(height);
  
    let maximumPossibleArea: number = 0;
  
    // Loop -> Each Tower (Left to Right)
    /**  
     * One could use ``for (let i = 0; i < height.length - 1; i++) {`` 
     * but ``forEach`` is cleaner
     * Could also use ``arr.forEach(function(item, i)`` 
     * Another option would be to use ``map`` 
     */
    height.forEach((iValue: number, iXAxis: number) => {
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
    let buildingsAhead: number[] = determineBuildingsAhead(height, iXAxis);
  
    // Loop -> Each Tower (Left to Right)
    buildingsAhead.forEach((jValue: number, jXAxis: number) => {
        const areaAtCurrentIndices: number = calculateLargestAreaForIndex(iValue, jValue, jXAxis);
        /** 
         * If the result is greater than that between previous tower pairs,
         * updated store maximumPossibleArea value 
         * */ 
        maximumPossibleArea = Math.max(maximumPossibleArea, areaAtCurrentIndices);
        });
    });
  
    return maximumPossibleArea;
  }
  
  /**
   * Returns the maximum possible area between all pairs with an index
   * @param {number} iValue height of Building I
   * @param {number} jValue height of Building J
   * @param {number} jXAxis location of Building J
   * @returns {number} largest area for index
   */
  function calculateLargestAreaForIndex(iValue: number, jValue: number, jXAxis: number): number {
      /** 
       * We need the X-axis value, if we are to calculate the area
       */
      let lowestTower = determineMaxHeightForPairs(iValue, jValue);
      /**
       * Determine area: 
       * Multiply:
       *      Y-axis as lower tower
       * With:
       *   Distance (X-axis): 
       */
      return (lowestTower * (jXAxis + 1));
  }
  
  /**
   * Returns height (maximum shared) of two towers
   * @param {number} iValue height of Building I
   * @param {number} jValue height of Building J
   * @returns {number} height of area
   */
  function determineMaxHeightForPairs(iValue: number, jValue: number): number {
      /** 
       * Determine the lower of the two towers
       */ 
      return Math.min(iValue, jValue);
  }
  
      /**
       * Returns the maximum possible area between tower pairs from a list of tower heights
       * @param {number[]} height a list of tower heights
       * @param {number} iXAxis location of Building I
       * @returns {number[]} list of buildings ahead of the index
       */
  function determineBuildingsAhead(height: number[], iXAxis: number): number[] {
      /**
       * Clone to avoid mutating the original area
       * Then add 1 because we do not want to include the current Building I 
       */
      let cloneBuildingHeights: number[] = height.slice(0);
      /**
       * We are comparing two buildings, at Building I and Building J
       * The second array was spliced with the index of Building I
       * :. The second array has the 'height' array values that occur after Building I
       * :. Building J's index in the second array is its distance from Building J
       * Addition of 1 to the value, because computers count from 0
       */
      return cloneBuildingHeights.splice(iXAxis + 1);
  }
  
  /**
   * Throws error if out of range
   */
  function outOfRange(): void {
      try {
          throw new RangeError();
      }
      catch (e){
          console.log('Out of range:', e);
      }
  }
  
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
  function validateInputs(height: number[]): void {
      if(height.length < 2 || height.length > 105) outOfRange();
  
      if(areTowerHeightsOutOfRange(height)) outOfRange();
  }
  
  /**
   * Validates whether the values within, are within constraints
   * 
   * CONSTRAINTS
   * 0 <= height[i] <= 104 
   * 
   * @param {number[]} height a list of tower heights
   */
  function areTowerHeightsOutOfRange(height: number[]): boolean {
      return height.some((iValue: number) => {
          return (iValue < 0|| iValue > 104);
      });
  }