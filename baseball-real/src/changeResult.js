import { $result } from './data/elements.js';
import { createElement } from './utils.js';
import { restart } from './restart.js';

export const resetResult = () => {
  $result.innerHTML = '';
};

export const changeResult = (resString) => {
  resetResult();
  if (resString !== '3스트라이크') {
    $result.innerText = resString;
  } else {
    $result.innerHTML = '<p>🎉 정답을 맞추셨습니다! 🎉</p>';
    const restartText = createElement('span', '게임을 새로 시작하시겠습니까?');
    const restartBtn = createElement('button', '게임 재시작');
    restartBtn.setAttribute('id', 'game-restart-button');
    restartBtn.onclick = restart;
    $result.appendChild(restartText);
    $result.appendChild(restartBtn);
  }
};
