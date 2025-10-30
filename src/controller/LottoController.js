import ConsoleView from "../view/ConsoleView";

class LottoController {
  constructor() {
    this.view = new ConsoleView();
  }

  async run() {
    const purchase = await this.view.getPurchaseLotto();
    const lottos = new Lottos(purchase);
    await this.view.printPurchasedLotto(lottos.getLottos());

    const correctLotto = await this.view.getCorrectLottoNumber();
    const bonusNumber = await this.view.getBonusNumber();

    const stats = new Stats(
      lottos.getResult(bonusNumber, correctLotto.getLotto())
    );
    await this.view.printStat(stats);
  }
}

export default LottoController;
