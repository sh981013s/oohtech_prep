import { saveTargetNumber } from './targetNumber.js';
import { $result, $userInput } from './data/elements.js';

export const resetResult = () => {
  $result.innerHTML = '';
};

export const restart = () => {
  $userInput.value = '';
  resetResult();
  saveTargetNumber();
};
