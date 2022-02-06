import { getTargetNumber, saveTargetNumber } from './targetNumber.js';
import { $submit, $userInput } from './data/elements.js';
import inputPassedValidation from './inputValidation.js';
import getResString from './compareNums.js';
import changeResult from './changeResult.js';
import { resetResult } from './restart';

export default function BaseballGame() {
  const play = (computerInputNumbers, userInputNumbers) => {
    return getResString(computerInputNumbers, userInputNumbers);
  };

  const userInputSubmitted = (e) => {
    e.preventDefault();
    const userInput = inputPassedValidation($userInput.value);
    let resString;
    if (userInput) {
      resString = play(getTargetNumber(), $userInput.value);
    }
    changeResult(resString);
  };

  const init = () => {
    resetResult();
    saveTargetNumber();
    $submit.addEventListener('click', userInputSubmitted);
  };

  init();
}

new BaseballGame();
