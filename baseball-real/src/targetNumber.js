const generateTargetNumber = () => {
  const randomUtils = MissionUtils.Random.pickNumberInRange;
  const targetNumber = new Set();
  while (targetNumber.size < 3) {
    targetNumber.add(randomUtils(1, 9));
  }
  return [...targetNumber];
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
  console.log(generatedTargetNumber.join(''));
  localStorage.setItem('targetNumber', generatedTargetNumber.join(''));
};

export const getTargetNumber = () => {
  return localStorage.getItem('targetNumber');
};
