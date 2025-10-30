export const CANNOT_DIVIDED_THOUSAND = "Purchase must be divided to thousand.";
export const CANNOT_INPUT_NEGATIVE = "Purchase must be positive.";
export const CANNOT_INPUT_ZERO = "Purchase must not be zero.";

export function isPerThousand(value) {
  return !(value % 1000);
}

export function isPositive(value) {
  return value > 0;
}

export function isNonZero(value) {
  return value !== 0;
}
