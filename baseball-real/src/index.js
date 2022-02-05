import { getTargetNumber, saveTargetNumber } from './targetNumber.js';
import { $submit, $userInput } from './data/elements.js';
import { inputPassedValidation } from './inputValidation.js';
import { getResString } from './compareNums.js';
import { changeResult, resetResult } from './changeResult.js';

export default function BaseballGame() {
  const init = () => {
    resetResult();
    saveTargetNumber();
    $submit.addEventListener('click', userInputSubmitted);
  };

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

  init();
}

new BaseballGame();
