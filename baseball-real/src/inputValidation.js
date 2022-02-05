export const isInputPassedValidation = (userInput) => {};

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
