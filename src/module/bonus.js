import { isNumber, isRightRange } from "./common.js";

export const CANNOT_BE_SOME_DUPLICATED_WITH_ARRAY =
  "This must be unique for lotto array";

export function isNotDuplicateWithArray(value, array) {
  return array.every((num) => num !== value);
}
