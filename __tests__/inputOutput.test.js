import { MissionUtils } from "@woowacourse/mission-utils";
import { print, printLines, readLine } from "../src/module/inputOutput";
import ConsoleView from "../src/view/ConsoleView";
import {
  CANNOT_BE_NON_NUMERIC,
  CANNOT_BE_NOT_SOME_RIGHT_RANGE,
} from "../src/module/common";
import { CANNOT_DIVIDED_THOUSAND } from "../src/module/purchase";
import {
  CANNOT_BE_DUPLICATED,
  CANNOT_BE_NON_SIX,
  CANNOT_BE_SOME_INCORRECT_RANGE,
  CANNOT_BE_SOME_NON_NUMERIC,
} from "../src/module/answer";
import { CANNOT_BE_SOME_DUPLICATED_WITH_ARRAY } from "../src/module/bonus";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("입출력 단위 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test("출력 테스트", async () => {
    // given
    const logSpy = getLogSpy();
    const printMsgs = ["Hello", "world", "!"];

    await printLines(printMsgs);
    const logs = ["Hello", "world", "!"];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.skip("입력 테스트", async () => {
    const logSpy = getLogSpy();
    const inputMsgs = ["Hello", "world", "!"];
    const logs = ["Hello", "world", "!"];

    mockQuestions(inputMsgs);

    Array(3).forEach(async () => {
      const input = await readLine();
      await print(input);
    });

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("입력 테스트 - 로또 금액 입력 (에러 발생 후 재 입력)", async () => {
    const logSpy = getLogSpy();
    const inputMsgs = ["Hello", "1200", "1000"];

    mockQuestions(inputMsgs);

    const view = new ConsoleView();
    const output = await view.getPurchaseLotto();

    const logs = [CANNOT_BE_NON_NUMERIC, CANNOT_DIVIDED_THOUSAND];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    expect(output).toBe(1000);
  });

  test("입력 테스트 - 당첨 로또 번호 입력 (에러 발생 후 재 입력)", async () => {
    const logSpy = getLogSpy();
    const inputMsgs = [
      "1,2,3,4",
      "1,2,3,a,5,6",
      "1,2,3,4,5,56",
      "1,2,3,4,5,5",
      "1,2,3,4,5,6",
    ];

    mockQuestions(inputMsgs);

    const view = new ConsoleView();
    const output = await view.getCorrectLottoNumber();

    const logs = [
      CANNOT_BE_NON_SIX,
      CANNOT_BE_SOME_NON_NUMERIC,
      CANNOT_BE_SOME_INCORRECT_RANGE,
      CANNOT_BE_DUPLICATED,
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

    expect(output).toEqual(["1", "2", "3", "4", "5", "6"]);
  });

  test("입력 테스트 - 보너스 번호 입력 (에러 발생 후 재 입력)", async () => {
    const logSpy = getLogSpy();
    const inputMsgs = ["a", "46", "1", "10"];
    const correctLottoNumbers = ["1", "2", "3", "4", "5", "6"];

    mockQuestions(inputMsgs);

    const view = new ConsoleView();
    const output = await view.getBonusNumber(correctLottoNumbers);

    const logs = [
      CANNOT_BE_NON_NUMERIC,
      CANNOT_BE_NOT_SOME_RIGHT_RANGE,
      CANNOT_BE_SOME_DUPLICATED_WITH_ARRAY,
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    expect(output).toEqual("10");
  });
});
