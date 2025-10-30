import { isNotDuplicateWithArray } from "../src/module/bonus.js";
import { isNumber, isRightRange } from "../src/module/common.js";

describe("answer 단위 테스트", () => {
  test("보너스 숫자가 숫자인가", () => {
    const input = ["12", "a", "-1"];

    const expectedOutput = [true, false, true];

    input.forEach((value, idx) => {
      expect(isNumber(value)).toBe(expectedOutput[idx]);
    });
  });
  test("보너스 숫자의 범위가 적절한가", () => {
    const input = ["43", "46", "0"];

    const expectedOutput = [true, false, false];

    input.forEach((value, idx) => {
      expect(isRightRange(value)).toBe(expectedOutput[idx]);
    });
  });

  test("보너스 숫자가 대상 배열과 겹치지 않는가", () => {
    const param1 = ["22", "22", "1"];
    const param2 = [
      ["1", "22", "3"],
      ["1", "2", "3"],
      ["1", "1", "3"],
    ];

    const expectedOutput = [false, true, false];

    param1.forEach((value, idx) => {
      expect(isNotDuplicateWithArray(value, param2[idx])).toBe(
        expectedOutput[idx]
      );
    });
  });
});
