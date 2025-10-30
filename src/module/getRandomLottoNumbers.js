import { MissionUtils } from "@woowacourse/mission-utils";

const getRandomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

export default getRandomLottoNumbers;
