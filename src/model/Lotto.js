class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLottoForString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  getLotto() {
    return [...this.#numbers];
  }

  countMatches(correctLotto) {
    return this.#numbers.filter((n) => correctLotto.includes(n)).length;
  }

  hasBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
