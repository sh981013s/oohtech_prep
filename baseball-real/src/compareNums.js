import { getTargetNumber } from './targetNumber';

export const getResString = (userInputNum) => {
  const [strike, ball] = computeRes(userInputNum);
  let resString = '';
  if (strike === 0 && ball === 0) {
    resString = '낫싱';
  } else if (!strike && ball) {
    resString = `${ball}볼`;
  } else if (strike && !ball) {
    resString = `${strike}스트라이크`;
  } else {
    resString = `${ball}볼 ${strike}스트라이크`;
  }
  return resString;
};

const computeRes = (userInputNum) => {
  const targetArr = getTargetNumber().split('');
  const userInputArr = userInputNum.split('');
  const cnt = [0, 0]; // strike, ball
  for (let i = 0; i < userInputNum.length; i++) {
    if (targetArr[i] === userInputArr[i]) {
      cnt[0]++;
    } else if (targetArr.includes(userInputArr[i])) {
      cnt[1]++;
    }
  }
  return cnt;
};
