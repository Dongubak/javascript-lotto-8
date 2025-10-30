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
}

export default Lotto;
