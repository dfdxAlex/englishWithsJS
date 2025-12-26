import { infoForPresentBox } from './infoForPresentBox.js';
import { addElToDinamicMenu } from '../addElToDinamicMenu.js';

export function createBoxForInfoBonus()
{
    addElToDinamicMenu('🎁', 'box-for-info-bonus', 'box-for-info-bonus');
    document.getElementById('box-for-info-bonus').addEventListener('click', infoForPresentBox);
}