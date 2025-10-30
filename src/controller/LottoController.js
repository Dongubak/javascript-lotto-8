import Lottos from "../model/Lottos.js";
import Stats from "../model/Stats.js";
import ConsoleView from "../view/ConsoleView.js";

class LottoController {
  constructor() {
    this.view = new ConsoleView();
  }

  async run() {
    const purchase = await this.view.getPurchaseLotto();
    const lottos = new Lottos(purchase);
    await this.view.printPurchasedLotto(lottos.getLottos());
    const correctLotto = await this.view.getCorrectLottoNumber();
    const bonusNumber = await this.view.getBonusNumber(correctLotto);
    const results = lottos.getResults(bonusNumber, correctLotto);
    const stats = new Stats(results, purchase);
    await this.view.printStat(stats);
  }
}

export default LottoController;
