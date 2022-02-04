export const targetNumber = () => {
  let targetNumber = 111; // default value
  const a = MissionUtils.Random.pickNumberInRange(123, 987).toString();
};

const isTargetNumberUnique = (tempTarget) => {
  const uniqueArr = [...new Set(tempTarget.split(''))];
  return uniqueArr.length === 3;
};
