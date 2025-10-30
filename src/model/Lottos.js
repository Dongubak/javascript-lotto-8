import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import getRandomLottoNumbers from "../module/getRandomLottoNumbers.js";

class Lottos {
  #lottos;
  #purchase;
  #count;

  constructor(purchase) {
    this.#count = purchase / 1000;
    this.#purchase = purchase;
    this.#lottos = [...Array(this.#count)].map(
      () => new Lotto(getRandomLottoNumbers())
    );
  }

  getLottos() {
    return {
      count: this.#count,
      purchase: this.#purchase,
      lottos: this.#lottos.map((lotto) => lotto.getLotto()),
    };
  }

  getResults(bonusNumber, correctLotto) {
    return this.#lottos.map((lotto) => ({
      match: lotto.countMatches(correctLotto),
      bonus: lotto.hasBonus(bonusNumber),
    }));
  }
}

export default Lottos;
