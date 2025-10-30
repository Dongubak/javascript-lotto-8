import { MissionUtils } from "@woowacourse/mission-utils";
import createError from "./createError.js";

export async function printLines(lines) {
  for (const line of lines) {
    await print(line);
  }
}

export async function print(msg = "") {
  await MissionUtils.Console.print(msg);
}

export async function readLine(msg = "") {
  const input = await MissionUtils.Console.readLineAsync(msg);
  return input;
}

export async function promptUntilValid(ask, validate, map = (v) => v) {
  const value = await readLine(ask);
  try {
    validate(value); // 검증 실패 시 throw
    return map(value); // 필요하면 변환해서 리턴
  } catch (e) {
    await print(createError(e.message));
    return promptUntilValid(ask, validate, map); // 재시도
  }
}
