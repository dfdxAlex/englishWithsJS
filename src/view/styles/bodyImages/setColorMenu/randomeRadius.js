import { returnBorderRadius } from '../../../../services/setColorMenu/returnBorderRadius.js';

export function randomeRadius(array)
{

    // Создать массив с выбранными элементами
    array.forEach((el)=>{
        const selected = document.getElementById(el);
        if (selected) {
            selected.style.borderRadius = returnBorderRadius(10, 150); 
        }
    });
}