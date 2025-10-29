import {
  isAllElementCorrectRange,
  isAllElementNumeric,
  isElementNSix,
  isNotDuplicate,
  splitForComma,
} from "../src/module/answer";

describe("answer 단위 테스트", () => {
  test(", 으로 나눔", () => {
    const input = ["1,2,3,4,5", "1, 2, 3, 4, 5"];

    const expectedOutput = [
      ["1", "2", "3", "4", "5"],
      ["1", " 2", " 3", " 4", " 5"],
    ];

    input.forEach((value, idx) => {
      expect(splitForComma(value)).toEqual(expectedOutput[idx]);
    });
  });

  test("요소의 개수가 6개인지 확인", () => {
    const input = [
      [1, 2, 3, 4, 5, 6],
      [1, 2],
      [1, 1, 1, 1, 1, 1],
    ];

    const expectedOutput = [true, false, true];

    input.forEach((value, idx) => {
      expect(isElementNSix(value)).toBe(expectedOutput[idx]);
    });
  });

  test("요소들이 모두 숫자인지 확인", () => {
    const input = [["1", "2", "3", "4", "5", "6"], ["1", " 2", " 3", " 4"], []];

    const expectedOutput = [true, false, true];

    input.forEach((value, idx) => {
      expect(isAllElementNumeric(value)).toBe(expectedOutput[idx]);
    });
  });

  test("요소들이 1~45범위 내에 있는지 확인", () => {
    const input = [["1", "2", "3", "4", "55", "6"], ["1", "2", "3", "4"], []];

    const expectedOutput = [false, true, true];

    input.forEach((value, idx) => {
      expect(isAllElementCorrectRange(value)).toBe(expectedOutput[idx]);
    });
  });

  test("겹치는 번호가 없는 지 확인", () => {
    const input = [
      ["1", "1", "3", "4", "5", "6"],
      ["1", "2", "3", "4"],
    ];

    const expectedOutput = [false, true, true];

    input.forEach((value, idx) => {
      expect(isNotDuplicate(value)).toBe(expectedOutput[idx]);
    });
  });
});
