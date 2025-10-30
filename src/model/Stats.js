const PRIZE = {
  3: 5_000,
  4: 50_000,
  5: 1_500_000,
  "5+bonus": 30_000_000,
  6: 2_000_000_000,
};

class Stats {
  constructor(results, purchase) {
    // results: [{ match: number, bonus: boolean }, ...]
    this.counts = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };

    for (const result of results) {
      if (result.match === 6) this.counts[6]++;
      else if (result.match === 5 && result.bonus) this.counts["5+bonus"]++;
      else if (result.match >= 3 && result.match <= 5)
        this.counts[result.match]++;
    }

    this.totalPrize = 0;
    for (const [match, count] of Object.entries(this.counts)) {
      this.totalPrize += PRIZE[match] * count;
    }

    this.purchase = purchase;
    this.yield = this.totalPrize / purchase;
  }

  // View에서 쓰기 좋게 가공 메서드 예시
  getCount() {
    return [
      this.counts[3],
      this.counts[4],
      this.counts[5],
      this.counts["5+bonus"],
      this.counts[6],
    ];
  }
}

export default Stats;
