/** CONSTRAINTS
2 <= n <= 105
n == height.length
0 <= height[i] <= 104 */

function maxArea(height: number[]): number {
    // ^ Shame this does not allow for recursion

    let maximumPossibleArea = 0;
 
    // Loop -> Each Tower (Left to Right)
    /**  One could use ``for (let i = 0; i < height.length - 1; i++) {`` 
     * but ``forEach`` is cleaner
    Could also use ``arr.forEach(function(item, i)`` */
    height.forEach((iValue, iXAxis) => {

        /** This current index is Building I

        We will compare it to the other buildings, with a second loop, where the index is Building J

        There is no pointing comparing to:-
        Itself, i.e. where Building I and Building J are the same index/value in heights array
        Avoid duplication of effort; a more efficient algorithm:
        As the index of Building I increases, there is no point comparing to those before it,
        because these were considered when they were Building I and the current location was then Building J
        :. For each tower, consider area ONLY between it and the towers AHEAD

        Determine the towers ahead of Building I */
        let cloneBuildingHeights = height.slice(0);
        let buildingsAhead = cloneBuildingHeights.splice(iXAxis + 1);
        
        // Loop -> Each Tower (Left to Right)
        buildingsAhead.forEach((jValue, jXAxis) => {

            // Determine the lower of the two towers
            let lowestTower = Math.min(iValue,jValue);

            /** We need the X-axis value, if we are to calculate the area
            We are comparing two buildings, at Building I and Building J
            The second array was spliced with the index of Building I
            :. The second array has the 'height' array values that occur after Building I
            :. Building J's index in the second array is its distance from Building J
            Addition of 1 to the value, because computers count from 0 */
            let current = (lowestTower * (jXAxis + 1));

            /** Determine area. Multiply:
                Y-axis as lower tower
            With:
                Distance (X-axis):
            If the result is greater than that between previous tower pairs, updated store maximumPossibleArea value */ 
            maximumPossibleArea = Math.max(maximumPossibleArea, current);

        });

    });

    return maximumPossibleArea;
}
     
let height = [1,8,6,2,5,4,8,3,7];
let n = height.length;
console.log(maxArea(height)); 