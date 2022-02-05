import { $result } from './data/elements';

export const resetResult = () => {
  $result.innerHTML = '';
};

const createElement = (tagName, text) => {
  const newElem = document.createElement(tagName);
  newElem.innerText = text;
  return newElem;
};
