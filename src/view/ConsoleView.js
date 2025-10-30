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
} from "../module/answer.js";
import {
  CANNOT_BE_SOME_DUPLICATED_WITH_ARRAY,
  isNotDuplicateWithArray,
} from "../module/bonus.js";
import {
  CANNOT_BE_NON_NUMERIC,
  CANNOT_BE_NOT_SOME_RIGHT_RANGE,
  isNumberWithTrim,
  isRightRange,
} from "../module/common.js";
import { print, printLines, promptUntilValid } from "../module/inputOutput.js";
import {
  CANNOT_DIVIDED_THOUSAND,
  CANNOT_INPUT_NEGATIVE,
  CANNOT_INPUT_ZERO,
  isNonZero,
  isPerThousand,
  isPositive,
} from "../module/purchase.js";

const ENTER_PURCHASE_MESSAGE = "구입금액을 입력해 주세요.\n";
const ENTER_CORRECT_LOTTO_NUMBER = "\n당첨 번호를 입력해 주세요.\n";
const ENTER_BONUS_NUMBER = "\n보너스 번호를 입력해 주세요.\n";
const COIN_THREE = "3개 일치 (5,000원)";
const COIN_FOUR = "4개 일치 (50,000원)";
const COIN_FIVE = "5개 일치 (1,500,000원)";
const COIN_BONUS = "5개 일치, 보너스 볼 일치 (30,000,000원)";
const COIN_SIX = "6개 일치 (2,000,000,000원)";

const COIN_MESSAGE = [COIN_THREE, COIN_FOUR, COIN_FIVE, COIN_BONUS, COIN_SIX];

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

  async printPurchasedLotto({ count, lottos }) {
    await print(`\n${count}개를 구매했습니다.`);
    for (const lotto of lottos) {
      await print(`[${lotto.join(", ")}]`);
    }
  }

  async printStat(stats) {
    await print("\n당첨 통계\n---");
    const countArray = stats.getCount();

    countArray.forEach(async (count, idx) => {
      await print(`${COIN_MESSAGE[idx]} - ${count}개`);
    });

    await print(`총 수익률은 ${(stats.yield * 100).toFixed(1)}%입니다.`);
  }
}

export default ConsoleView;
