
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { generateColorPair } from './generateColorPair.js';
import { getContrastColor } from './getContrastColor.js';
import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';
import { getBoxShadow } from './getBoxShadow.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        const color1 = generateColorPair();
        el.style.backgroundColor = color1;
        el.style.color = getContrastColor(color1);
        el.style.boxShadow = getBoxShadow();
    });

    // Отдельно разукрасть кнопку Проверить
    const buttonOk = document.getElementById('button-ok');
    buttonOk.style.backgroundColor = generateColorPair();
    buttonOk.style.color = getContrastColor(generateColorPair());
    buttonOk.style.borderRadius = returnBorderRadius(10, 150); 
    buttonOk.style.boxShadow = getBoxShadow(); 

    // Отдельно разукрасть кнопку перевода
    const translate = document.getElementById('translate');
    translate.style.backgroundColor = generateColorPair();
    translate.style.color = getContrastColor(generateColorPair());
    translate.style.boxShadow = getBoxShadow();
}

