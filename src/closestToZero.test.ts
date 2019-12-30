const closestZero = require("./closestToZero");

describe("Closest To Zero Function", () => {
  test("it is a function ", () => {
    expect(typeof closestZero).toBe("function");
  });

  test("it returns the closest number to 0 when a single input is passed ", () => {
    expect(closestZero([5])).toBe(5);
    expect(closestZero([-5])).toBe(-5);
  });

  test("it returns the positive element closer to 0 ", () => {
    expect(closestZero([-3, 2])).toBe(2);
    expect(closestZero([8, 5, 10])).toBe(5);
  });

  test("it returns the negative element closer to 0 ", () => {
    expect(closestZero([-2, 3])).toBe(-2);
    expect(closestZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
  });

  test("it returns the positive element closer to 0 if its opposite sign is present  ", () => {
    expect(closestZero([8, 2, 3, -2])).toBe(2);
    expect(closestZero([1, -1])).toBe(1);
    expect(closestZero([-1, 1])).toBe(1);
    expect(closestZero([0, 1, -1])).toBe(1);
    expect(closestZero([1, 0, -1])).toBe(1);
    expect(closestZero([1, -1, 0])).toBe(1);
    expect(closestZero([0, -1, 1])).toBe(1);
    expect(closestZero([-1, 0, 1])).toBe(1);
    expect(closestZero([-1, 1, 0])).toBe(1);
  });

  test("it returns the absolute value of a number only one time", () => {
    expect(closestZero([5, -5, 5, -5, 4, 3, 2, 2, 2, -2, -2])).toBe(2);
  });

  test("it returns the closest number to 0 when input contains only the same sign", () => {
    expect(closestZero([4, 2, 3])).toBe(2);
    expect(closestZero([-4, -2, -3])).toBe(-2);
  });

  test("it returns 0 if an empty array is passed or if array contains only 0 or if input is undefined", () => {
    expect(closestZero([])).toBe(0);
    expect(closestZero()).toBe(0);
    expect(closestZero(null)).toBe(0);
    expect(closestZero([0, 0, 0, 0])).toBe(0);
  });

  test("it returns the closest number to 0 regardless of its position", () => {
    expect(closestZero([2, 0, -2, 0, -3])).toBe(2);
    expect(closestZero([-2, 0, 2, 0, -3])).toBe(2);
    expect(closestZero([-2, 0, -3, 0, 2])).toBe(2);
  });
});
