export function isPerThousand(value) {
  return !(value % 1000);
}

export function isPositive(value) {
  return value > 0;
}

export function isNonZero(value) {
  return value !== 0;
}
