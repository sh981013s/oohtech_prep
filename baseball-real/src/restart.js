import { resetResult } from './changeResult.js';
import { saveTargetNumber } from './targetNumber.js';
import { $userInput } from './data/elements.js';

export const restart = () => {
  $userInput.value = '';
  resetResult();
  saveTargetNumber();
};
