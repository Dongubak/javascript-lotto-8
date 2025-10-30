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
}

export default ConsoleView;
