const generateTargetNumber = () => {
  let targetNumber = MissionUtils.Random.pickNumberInRange(123, 987).toString(); // default value
  while (
    !isTargetNumberUnique(targetNumber) ||
    isTargetNumberIncludeZero(targetNumber)
  ) {
    targetNumber = MissionUtils.Random.pickNumberInRange(123, 987).toString();
  }
  return targetNumber;
};

const isTargetNumberUnique = (tempTarget) => {
  const uniqueArr = [...new Set(tempTarget.split(''))];
  return uniqueArr.length === 3;
};

const isTargetNumberIncludeZero = (tempTarget) => {
  const regex = /0/g;
  return regex.test(tempTarget);
};

export const saveTargetNumber = () => {
  const generatedTargetNumber = generateTargetNumber();
  localStorage.setItem('targetNumber', generatedTargetNumber);
};

export const getTargetNumber = () => {
  return localStorage.getItem('targetNumber');
};
