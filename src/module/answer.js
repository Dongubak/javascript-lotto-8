import { isNumber, isRightRange } from "./common";

export const CANNOT_BE_NON_SIX = "Elements' length must be 6";
export const CANNOT_BE_SOME_NON_NUMERIC = "Elements' must be numeric";
export const CANNOT_BE_SOME_INCORRECT_RANGE = "Elements' must be correct range";
export const CANNOT_BE_DUPLICATED =
  "Elements' must not be duplicated each other";

export function splitForComma(arrayLikeString) {
  const splittedArray = arrayLikeString.split(",");
  return splittedArray;
}

export function isElementNSix(array) {
  return array.length === 6;
}

export function isAllElementNumeric(array) {
  return array.every(isNumber);
}

export function isAllElementCorrectRange(array) {
  return array.every(isRightRange);
}

export function isNotDuplicate(array) {
  const afterSet = new Set(array);
  return afterSet.size === array.length;
}
