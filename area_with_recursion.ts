/** CONSTRAINTS
2 <= n <= 105
n == height.length
0 <= height[i] <= 104 */

function maxArea(height: number[]): number {

    let maximumPossibleArea = 0;
 
    // Loop -> Each Tower (Left to Right)
    /**  One could use ``for (let i = 0; i < height.length - 1; i++) {`` 
     * but ``forEach`` is cleaner
    Could also use ``arr.forEach(function(item, i)`` */
    height.forEach((iHeight, iXAxis) => {
        if(iXAxis > 0) {
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
            let buildingsAhead = cloneBuildingHeights.splice(iXAxis);

            console.log("\n", iXAxis);

            const maximumPossibleAreaForIndex = compareTowerPairs(iHeight, 0, buildingsAhead, maximumPossibleArea);
            console.log("\n maximumPossibleAreaForIndex", maximumPossibleAreaForIndex);

            maximumPossibleArea = Math.max(maximumPossibleAreaForIndex, maximumPossibleArea);
        }
    });

    return maximumPossibleArea;
}

function compareTowerPairs(iHeight: number, jXAxis: number, buildingsAhead: any, maximumPossibleArea: number): number {

    if(buildingsAhead){
        console.log(jXAxis + ": ", buildingsAhead);

        // First Building in Array
        const buildingJHeight: number = buildingsAhead[0];

        // Determine the lower of the two towers
        let lowestTower = Math.min(iHeight, buildingJHeight);
        console.log("iHeight: "+iHeight, "buildingJHeight:"+ buildingJHeight);

        /** We need the X-axis value, if we are to calculate the area
        We are comparing two buildings, at Building I and Building J
        The second array was spliced with the index of Building I
        :. The second array has the 'height' array values that occur after Building I
        :. Building J's index in the second array is its distance from Building J
        Addition of 1 to the value, because computers count from 0 
        
        Determine area. Multiply:
            Y-axis as lower tower
        With:
            Distance (X-axis):
        */
        console.log("lowestTower: "+lowestTower,"jXAxis: "+jXAxis);
        let areaAtCurrentIndices = (lowestTower * (jXAxis));
        console.log("areaAtCurrentIndices", areaAtCurrentIndices);

        console.log("l: ", buildingsAhead.length >= 2);
        
        const temp = jXAxis;

        /** If the result is greater than that between previous tower pairs, 
        updated store maximumPossibleArea value */ 
        console.log("\n"+jXAxis+" compare: "+maximumPossibleArea, areaAtCurrentIndices);
        maximumPossibleArea = Math.max(maximumPossibleArea, areaAtCurrentIndices);
        console.log(jXAxis+" compare- outcome: ",maximumPossibleArea+"\n");

        let maximumPossibleAreaForIndex: number = 0;

        // Pop the leftmost tower, then proceed to those on the right
        if(buildingsAhead.length >= 2) {
            // Remove areaAtCurrentIndices building
            jXAxis++;
            let buildingsAheadUnscanned: number[] = buildingsAhead.splice(1);
            console.log("j++: "+jXAxis, buildingsAheadUnscanned);
            maximumPossibleAreaForIndex = compareTowerPairs(iHeight, jXAxis, buildingsAheadUnscanned, maximumPossibleArea);
        }

        return Math.max(maximumPossibleAreaForIndex, maximumPossibleArea);
    }
}
     
let height: number[] = [1,8,6,2,5,4,8,3,7];
let n: number = height.length;
console.log("\n\n", maxArea(height));