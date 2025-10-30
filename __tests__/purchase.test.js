import {
  isNonZero,
  isPerThousand,
  isPositive,
} from "../src/module/purchase.js";

describe("로또 구입금액 단위모듈 테스트", () => {
  test("1000원 단위 검증", () => {
    const input = [1000, 1800, 0, -1000];
    const expectedOutput = [true, false, true, true];
    input.forEach((value, idx) => {
      expect(isPerThousand(value)).toBe(expectedOutput[idx]);
    });
  });
  test("양수인지 검증", () => {
    const input = [1000, -1800, 0];
    const expectedOutput = [true, false, false];
    input.forEach((value, idx) => {
      expect(isPositive(value)).toBe(expectedOutput[idx]);
    });
  });
  test("0 아닌지 검증", () => {
    const input = [1000, 0];
    const expectedOutput = [true, false];
    input.forEach((value, idx) => {
      expect(isNonZero(value)).toBe(expectedOutput[idx]);
    });
  });
});
