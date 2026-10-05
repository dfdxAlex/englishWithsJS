import '../styles/createBonusLevel.scss';
import { addElToDinamicMenu } from '../addElToDinamicMenu.js';

// функция вставляет индикатор наполнения текущего уровня

export function createBonusLevel(levelInput)
{
    const str = `<span class="level-create-bonus-level__fill"></span>`;
    addElToDinamicMenu(str,'level-create-bonus-level','level-create-bonus-level');

setTimeout(() => {
    const level = document.getElementById('level-create-bonus-level');
     
    level.style.setProperty('--level', `${levelInput.percent}%`);

    level.style.setProperty('--level-color', `${levelInput.color}`);

}, 0);

}