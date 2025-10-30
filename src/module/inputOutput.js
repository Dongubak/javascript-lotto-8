import { MissionUtils } from "@woowacourse/mission-utils";

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
