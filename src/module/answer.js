import { isNumber, isRightRange } from "./common";

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
