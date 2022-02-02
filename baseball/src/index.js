export default function BaseballGame() {

  const play = (computerInputNumbers, userInputNumbers) => {
    resultReset();
    const resultString = getResultString(computerInputNumbers, userInputNumbers);
    console.log(computerInputNumbers, userInputNumbers, 'aa')
    console.log(resultString);
    printResult(resultString);
  }

  const init = () => {
    const inputElem = document.getElementById('user-input');
    const submitBtnElem = document.getElementById('submit');
    inputElem.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        getInput();
      }
    });
    submitBtnElem.addEventListener('click', getInput);
    saveTargetNum();
  }

  const getInput = () => {
    const inputVal = document.getElementById('user-input').value;
    const validationStatus = inputValidation(inputVal);
    if (validationStatus === 'three') {
      alert('세자리수의 숫자를 입력해주세요 😁');
      inputReset();
    } else if (validationStatus === 'unique') {
      alert('각기다른 세자리수의 숫자를 입력해주세요 😂');
      inputReset();
    } else {
      play(getTargetNum(), inputVal);
    }
  }

  const inputReset = () => {
    document.getElementById('user-input').value = '';
  }

  const inputValidation = (input) => {
    const uniqueArr = Array.from(new Set(input.split('')));
    let status = '';
    if (input.length !== 3) {
      status = 'three'
    } else if (uniqueArr.length < 3) {
      status = 'unique'
    } else {
      status = 'perfect'
    }

    return status;
  }

  const makeThreeDigitNumsWithNoRepeated = () => {
    let numStr = '';
    let checkArr = [0,0];
    while (checkArr.length < 3) {
      numStr = (Math.floor(Math.random() * (1000 - 100 + 1)) + 100).toString();
      checkArr = Array.from(new Set(numStr.split('')))
    }
    return checkArr.join('');
  }

  const computeCorrectCnt = (targetNum, inputNum) => {
    const target = targetNum.split('');
    const input = inputNum.split('');
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < input.length; i++) {
      if (target[i] === input[i]) {
        strike++;
      } else if (target.includes(input[i])) {
        ball++;
      }
      // no else
    }

    return [ball, strike];
  }

  const getResultString = (target, input) => {
    const strikeBallArr = computeCorrectCnt(target, input)
    const ball = strikeBallArr[0];
    const strike = strikeBallArr[1];
    let resultString = '';
    if (!ball && !strike) {
      resultString = '낫싱';
    } else if (!ball && strike) {
      resultString = `${strike}스트라이크`;
    } else if (ball && !strike) {
      resultString = `${ball}볼`
    } else {
      resultString = `${ball}볼 ${strike}스트라이크`
    }

    return resultString;
  }

  const printResult = resultString => {
    const resBox = document.getElementById('result');
    const res = document.createElement('p');
    if (resultString === '3스트라이크') {
      const restartDesc = document.createElement('span');
      const restartBtn = document.createElement('button');
      restartDesc.innerText = '게임을 새로 시작하시겠습니까?';
      restartBtn.innerText = '게임 재시작';
      res.innerHTML = '🎉 <strong>정답을 맞추셨습니다!</strong> 🎉';
      restartBtn.setAttribute('id', 'game-restart-button');
      restartBtn.onclick = restart;
      resBox.appendChild(res);
      resBox.appendChild(restartDesc);
      resBox.appendChild(restartBtn);
    } else {
      res.innerText = resultString;
      resBox.appendChild(res);
    }
  }

  const resultReset = () => {
    const resBox = document.getElementById('result');
    resBox.innerText = '';
  }

  const saveTargetNum = () => {
    localStorage.setItem('target', makeThreeDigitNumsWithNoRepeated());
  }

  const getTargetNum = () => {
    return localStorage.getItem('target');
  }

  const restart = () => {
    saveTargetNum();
    inputReset();
    resultReset();
  }

  init();
}


new BaseballGame();
