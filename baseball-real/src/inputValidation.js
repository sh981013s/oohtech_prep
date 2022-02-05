import { INPUT_ERROR_MSG } from './data/constants.js';
import { $userInput } from './data/elements.js';

export const inputPassedValidation = (userInput) => {
  if (!isInputLengthThree(userInput)) {
    alert(INPUT_ERROR_MSG.LENGTH_ERR);
    $userInput.value = '';
  } else if (!isInputNotIncludeZero(userInput)) {
    alert(INPUT_ERROR_MSG.INCLUDE_ZERO_ERR);
    $userInput.value = '';
  } else if (!isInputUnique(userInput)) {
    alert(INPUT_ERROR_MSG.NO_REPEAT_ERR);
    $userInput.value = '';
  } else {
    return true;
  }
};

const isInputLengthThree = (userInput) => {
  return userInput.length === 3;
};

const isInputNotIncludeZero = (userInput) => {
  const regex = /0/g;
  return !regex.test(userInput);
};

const isInputUnique = (userInput) => {
  const uniqueArr = [...new Set(userInput.split(''))];
  return uniqueArr.length === 3;
};
