import {
  CANNOT_BE_DUPLICATED,
  CANNOT_BE_NON_SIX,
  CANNOT_BE_SOME_INCORRECT_RANGE,
  CANNOT_BE_SOME_NON_NUMERIC,
  isAllElementCorrectRange,
  isAllElementNumeric,
  isElementNSix,
  isNotDuplicate,
  splitForComma,
} from "../module/answer";
import {
  CANNOT_BE_SOME_DUPLICATED_WITH_ARRAY,
  isNotDuplicateWithArray,
} from "../module/bonus";
import {
  CANNOT_BE_NON_NUMERIC,
  CANNOT_BE_NOT_SOME_RIGHT_RANGE,
  isNumberWithTrim,
  isRightRange,
} from "../module/common";
import { print, printLines, promptUntilValid } from "../module/inputOutput";
import {
  CANNOT_DIVIDED_THOUSAND,
  CANNOT_INPUT_NEGATIVE,
  CANNOT_INPUT_ZERO,
  isNonZero,
  isPerThousand,
  isPositive,
} from "../module/purchase";

const ENTER_PURCHASE_MESSAGE = "구입금액을 입력해 주세요.";
const ENTER_CORRECT_LOTTO_NUMBER = "당첨 번호를 입력해 주세요.";
const ENTER_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";

class ConsoleView {
  constructor() {}

  async getPurchaseLotto() {
    return promptUntilValid(
      ENTER_PURCHASE_MESSAGE,
      (raw) => {
        if (!isNumberWithTrim(raw)) throw new Error(CANNOT_BE_NON_NUMERIC);
        const v = +raw;
        if (!isPerThousand(v)) throw new Error(CANNOT_DIVIDED_THOUSAND);
        if (!isPositive(v)) throw new Error(CANNOT_INPUT_NEGATIVE);
        if (!isNonZero(v)) throw new Error(CANNOT_INPUT_ZERO);
      },
      (raw) => +raw
    );
  }

  async getCorrectLottoNumber() {
    return promptUntilValid(
      ENTER_CORRECT_LOTTO_NUMBER,
      (raw) => {
        const arr = splitForComma(raw);
        if (!isElementNSix(arr)) throw new Error(CANNOT_BE_NON_SIX);
        if (!isAllElementNumeric(arr))
          throw new Error(CANNOT_BE_SOME_NON_NUMERIC);
        if (!isAllElementCorrectRange(arr))
          throw new Error(CANNOT_BE_SOME_INCORRECT_RANGE);
        if (!isNotDuplicate(arr)) throw new Error(CANNOT_BE_DUPLICATED);
      },
      (raw) => splitForComma(raw)
    );
  }

  async getBonusNumber(correctLottoNumbers) {
    return promptUntilValid(ENTER_BONUS_NUMBER, (raw) => {
      if (!isNumberWithTrim(raw)) throw new Error(CANNOT_BE_NON_NUMERIC);
      if (!isRightRange(raw)) throw new Error(CANNOT_BE_NOT_SOME_RIGHT_RANGE);
      if (!isNotDuplicateWithArray(raw, correctLottoNumbers))
        throw new Error(CANNOT_BE_SOME_DUPLICATED_WITH_ARRAY);
    });
  }

  async printPurchasedLotto(lottos) {
    await print(`${lottos.count}개를 구매했습니다.`);
    await printLines(lottos.lottos.map((lotto) => `[${lotto.join(", ")}]`));
  }
}

export default ConsoleView;
