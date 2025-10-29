export function splitForComma(arrayLikeString) {
  const splitedArray = arrayLikeString.split(",");
  return splitedArray;
}

export function isElementNSix(array) {
  return array.length === 6;
}

function isNumberWithTrim(str) {
  const s = String(str).trim();
  return /^[-+]?\d+$/.test(s);
}

function isNumber(str) {
  return /^[-+]?\d+$/.test(str);
}

export function isAllElementNumeric(array) {
  return array.every(isNumber);
}

function isRightRange(str) {
  const num = +str;
  return num >= 1 && num <= 45;
}

export function isAllElementCorrectRange(array) {
  return array.every(isRightRange);
}

export function isNotDuplicate(array) {
  const afterSet = new Set(array);
  return afterSet.size === array.length;
}
