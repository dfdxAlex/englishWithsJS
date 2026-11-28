// import { returnBorderRadius } from '../../../../services/setColorMenu/returnBorderRadius.js';

export function setColorBlackOrWhite(array,color)
{

    // Создать массив с выбранными элементами
    array.forEach((el)=>{
        const selected = document.getElementById(el);
        if (selected) {
            selected.style.color = color; 
        }
    });
}