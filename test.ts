import { describe, expect, jest, test } from '@jest/globals';
import 'isomorphic-fetch';
import Towers from './towers.ts';

describe("Towers", () => {
     const towers = new Towers();
     test("defines maxArea()", () => {
          expect(typeof towers.maxArea).toBe("function");
     });
});

/**
 * TOWERS: maxArea
 */
describe('Towers module', () => {
     let towers;
     
     beforeEach(() => {
          jest.resetModules();
          towers = new Towers();
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

describe('Towers module', () => {
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

describe('Towers module', () => {
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

describe('Towers module', () => {
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