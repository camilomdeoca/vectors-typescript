import { expect, test } from "vitest";
import { Vector2 } from "../src/index.js";

test("rotate 90 degrees", () => {
  const vec = new Vector2(0, 1).rotateDegrees(90);
  const expectedVec = new Vector2(-1, 0);
  expect(vec.x).toBeCloseTo(expectedVec.x, 15);
  expect(vec.y).toBeCloseTo(expectedVec.y, 15);
});

test("rotate 0 degrees", () => {
  const vec = new Vector2(0, 1).rotateDegrees(0);
  const expectedVec = new Vector2(0, 1);
  expect(vec.x).toBeCloseTo(expectedVec.x, 15);
  expect(vec.y).toBeCloseTo(expectedVec.y, 15);
});

test("rotate -90 degrees", () => {
  const vec = new Vector2(0, 1).rotateDegrees(-90);
  const expectedVec = new Vector2(1, 0);
  expect(vec.x).toBeCloseTo(expectedVec.x, 15);
  expect(vec.y).toBeCloseTo(expectedVec.y, 15);
});

test("rotate -90 degrees with fast function", () => {
  const vec = new Vector2(0, 1).rotate90Clockwise();
  const expectedVec = new Vector2(1, 0);
  expect(vec.x).toBeCloseTo(expectedVec.x, 15);
  expect(vec.y).toBeCloseTo(expectedVec.y, 15);
});
