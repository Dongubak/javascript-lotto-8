import { MissionUtils } from "@woowacourse/mission-utils";

const getRandomLottoNumbers = () => {
  const randNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return randNumbers.map((num) => String(num));
};

export default getRandomLottoNumbers;
