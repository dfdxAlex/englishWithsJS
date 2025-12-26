import '../styles/createBoxScarb.scss';
import { scarbClick } from './scarbClick.js';

export function createBoxScarb()
{
    const divCreateForBonusBox = document.createElement("div");
    divCreateForBonusBox.innerHTML = '<span class="scarb" id="scarb">🎁</span>';
    document.body.appendChild(divCreateForBonusBox);

    divCreateForBonusBox.addEventListener('click', () => {
      scarbClick(2);
    });

}