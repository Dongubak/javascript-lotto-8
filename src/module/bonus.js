import { isNumber, isRightRange } from "./common";

export function isNotDuplicateWithArray(value, array) {
  return array.every((num) => num !== value);
}
