export const CANNOT_BE_NON_NUMERIC = "This must be numeric";
export const CANNOT_BE_NOT_SOME_RIGHT_RANGE = "This must be right range";

export function isNumberWithTrim(str) {
  const s = String(str).trim();
  return /^[-+]?\d+$/.test(s);
}

export function isNumber(str) {
  return /^[-+]?\d+$/.test(str);
}

export function isRightRange(str) {
  const num = +str;
  return num >= 1 && num <= 45;
}
