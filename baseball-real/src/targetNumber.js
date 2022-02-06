const generateTargetNumber = () => {
  // eslint-disable-next-line no-undef
  const randomUtils = MissionUtils.Random.pickNumberInRange;
  const targetNumber = new Set();
  while (targetNumber.size < 3) {
    targetNumber.add(randomUtils(1, 9));
  }
  return [...targetNumber];
};

export const saveTargetNumber = () => {
  const generatedTargetNumber = generateTargetNumber();
  console.log(generatedTargetNumber.join(''));
  localStorage.setItem('targetNumber', generatedTargetNumber.join(''));
};

export const getTargetNumber = () => {
  return localStorage.getItem('targetNumber');
};
