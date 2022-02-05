export const $ = (selector) => document.querySelector(selector);

export const createElement = (tagName, text) => {
  const newElem = document.createElement(tagName);
  newElem.innerText = text;
  return newElem;
};
