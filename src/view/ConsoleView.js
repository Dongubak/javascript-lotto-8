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
import { CANNOT_BE_NON_NUMERIC, isNumberWithTrim } from "../module/common";
import createError from "../module/createError";
import { print, readLine } from "../module/inputOutput";
import {
  CANNOT_DIVIDED_THOUSAND,
  CANNOT_INPUT_NEGATIVE,
  CANNOT_INPUT_ZERO,
  isNonZero,
  isPerThousand,
  isPositive,
} from "../module/purchase";

const ENTER_PURCHASE_MESSAGE = "구입금액을 입력해 주세요.";

class ConsoleView {
  constructor() {}

  async getPurchaseLotto() {
    this.errorFlag = false;
    let purchase;
    while (1) {
      try {
        purchase = await readLine(ENTER_PURCHASE_MESSAGE);
        if (!isNumberWithTrim(purchase)) throw new Error(CANNOT_BE_NON_NUMERIC);
        if (!isPerThousand(+purchase)) throw new Error(CANNOT_DIVIDED_THOUSAND);
        if (!isPositive(+purchase)) throw new Error(CANNOT_INPUT_NEGATIVE);
        if (!isNonZero(+purchase)) throw new Error(CANNOT_INPUT_ZERO);
        this.errorFlag = false;
      } catch (e) {
        this.errorFlag = true;
        await print(createError(e.message));
      } finally {
        if (!this.errorFlag) return +purchase;
      }
    }
  }

  async getCorrectLottoNumber() {
    this.errorFlag = false;
    let correctLottoNumberString;
    let splittedLottoNumber;
    while (1) {
      try {
        correctLottoNumberString = await readLine(ENTER_PURCHASE_MESSAGE);
        splittedLottoNumber = splitForComma(correctLottoNumberString);
        if (!isElementNSix(splittedLottoNumber))
          throw new Error(CANNOT_BE_NON_SIX);
        if (!isAllElementNumeric(splittedLottoNumber))
          throw new Error(CANNOT_BE_SOME_NON_NUMERIC);
        if (!isAllElementCorrectRange(splittedLottoNumber))
          throw new Error(CANNOT_BE_SOME_INCORRECT_RANGE);
        if (!isNotDuplicate(splittedLottoNumber))
          throw new Error(CANNOT_BE_DUPLICATED);
        this.errorFlag = false;
      } catch (e) {
        this.errorFlag = true;
        await print(createError(e.message));
      } finally {
        if (!this.errorFlag) return splittedLottoNumber;
      }
    }
  }
}

export default ConsoleView;
