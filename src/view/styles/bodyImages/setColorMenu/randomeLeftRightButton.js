import { getRandomNumber } from '../../../../services/setColorMenu/getRandomNumber.js';

export function randomeLeftRightButton(array)
{
    // Создать массив с выбранными элементами
    array.forEach((el)=>{
        const selected = document.getElementById(el);
        if (selected) {
            selected.style.bottom = `${50/getRandomNumber(10,20)*0.2}em`;
            selected.style.right = `${50/getRandomNumber(10,20)*0.2}em`;
        }
    });
}