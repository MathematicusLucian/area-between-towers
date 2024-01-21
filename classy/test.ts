import { describe, expect, jest, test } from '@jest/globals';
import 'isomorphic-fetch';
import Towers from './towers.ts';

/**
 * TOWERS: areTowerHeightsOutOfRange
 */
describe('Towers module: validateInputs', () => {
     let towers;
     
     beforeEach(() => {
          jest.resetModules();
          towers = new Towers();
     });

     // Positive test scenario
     test('output should be true', async() => {
          const height: number[] = [1,22,5,4,8,3,20];
          expect(await towers.areTowerHeightsOutOfRange(height)).toBe(false);
     });

     // Positive test scenario
     test('output should be true', async() => {
          const height: number[] = [1,2002,5,4,8,3,20];
          expect(await towers.areTowerHeightsOutOfRange(height)).toBe(true);
     });
});

/**
 * TOWERS: maxArea
 */

describe('Towers module: maxArea', () => {
     let towers;
     
     beforeEach(() => {
          jest.resetModules();
          towers = new Towers();
     });
     
     test("defines maxArea()", () => {
          expect(typeof towers.maxArea).toBe("function");
     });

     // Positive test scenario
     test('output should be 100', async() => {
          const height: number[] = [1,22,5,4,8,3,20];
          expect(await towers.maxArea(height)).toBe(100);
     });

     // Positive test scenario
     test('output should be 49', async() => {
          const height: number[] = [1,8,6,2,5,4,8,3,7];
          expect(await towers.maxArea(height)).toBe(49);
     });

     // Negative test scenario
     test('output should not be 1', async() => {
          const height: number[] = [1,8,6,2,5,4,8,3,7];
          expect(await towers.maxArea(height)).not.toBe(1);
     });

     // Negative test scenario
     test('output should not be 35', async() => {
          const height: number[] = [1,8,6,2,5,4,8,3,7];
          expect(await towers.maxArea(height)).not.toBe(35);
     });
});

/**
 * TOWERS: calculateLargestAreaForIndex
 */

describe('Towers module: calculateLargestAreaForIndex', () => {
     let towers;
     
     beforeEach(() => {
          jest.resetModules();
          towers = new Towers();
     });
     
     // Positive test scenario
     test('output should be 35', () => {
          let iValue: number = 7;
          let jValue: number = 10;
          let jXAxis: number = 4;
          const result = towers.calculateLargestAreaForIndex(iValue, jValue, jXAxis);
          expect(result).toBe(35);
     });

     // Positive test scenario
     test('output should be 36', () => {
          let iValue: number = 20;
          let jValue: number = 12;
          let jXAxis: number = 2;
          const result = towers.calculateLargestAreaForIndex(iValue, jValue, jXAxis);
          expect(result).toBe(36);
     });

     // Negative test scenario
     test('output should not be 10', () => {
          let iValue: number = 7;
          let jValue: number = 10;
          let jXAxis: number = 4;
          const result = towers.calculateLargestAreaForIndex(iValue, jValue, jXAxis);
          expect(result).not.toBe(10);
     });
});

/**
 * TOWERS: determineMaxHeightForPairs
 */

describe('Towers module: determineMaxHeightForPairs', () => {
     const towers = new Towers();

     // Positive test scenario
     test('output should be 12', () => {
          let iValue: number = 20;
          let jValue: number = 12;
          const result = towers.determineMaxHeightForPairs(iValue, jValue);
          expect(result).toBe(12);
     });

     // Negative test scenario
     test('output should not be 10', () => {
          let iValue: number = 7;
          let jValue: number = 10;
          const result = towers.determineMaxHeightForPairs(iValue, jValue);
          expect(result).not.toBe(10);
     });
});

/**
 * TOWERS: determineBuildingsAhead
 */

describe('Towers module: determineBuildingsAhead', () => {
     const towers = new Towers();

     // Positive test scenario
     test('output should be [6,2,5,4,8,3,7]', () => {
          let height: number[] = [1,8,6,2,5,4,8,3,7];
          let iXAxis: number = 1;
          let expectedResult: number[] = [6,2,5,4,8,3,7];
          const result = towers.determineBuildingsAhead(height, iXAxis);
          expect(result).toStrictEqual(expectedResult);
     });
     
     // Positive test scenario
     test('output should be [4,8,3,7]', () => {
          let height: number[] = [1,8,6,2,5,4,8,3,7];
          let iXAxis: number = 4;
          let expectedResult: number[] = [4,8,3,7];
          const result = towers.determineBuildingsAhead(height, iXAxis);
          expect(result).toStrictEqual(expectedResult);
     });
     
     // Negative test scenario
     test('output should not be [5,4,8,3,7]', () => {
          let height: number[] = [1,8,6,2,5,4,8,3,7];
          let iXAxis: number = 4;
          let notExpectedResult: number[] = [5,4,8,3,7];
          const result = towers.determineBuildingsAhead(height, iXAxis);
          expect(result).not.toStrictEqual(notExpectedResult);
     });
});