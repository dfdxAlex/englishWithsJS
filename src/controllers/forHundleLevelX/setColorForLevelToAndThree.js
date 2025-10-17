
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { generateColorPair } from './generateColorPair.js';
import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';
import { getBoxShadow } from './getBoxShadow.js';
import { getContrastColorTwo } from './getContrastColorTwo.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        const color1 = generateColorPair();
        el.style.boxShadow = getBoxShadow(color1);
        getContrastColorTwo(el);
    });

    // Отдельно разукрасть кнопку Проверить
    const buttonOk = document.getElementById('button-ok');
    if (buttonOk) {
        const colorButtonOk = generateColorPair();
        getContrastColorTwo(buttonOk);
        buttonOk.style.borderRadius = returnBorderRadius(10, 150); 
        buttonOk.style.boxShadow = getBoxShadow(colorButtonOk); 
    }
    // Отдельно разукрасть кнопку перевода
    const translate = document.getElementById('translate');
    if (translate) {
        const colorTranslate = generateColorPair();
        getContrastColorTwo(buttonOk);
        translate.style.boxShadow = getBoxShadow(colorTranslate);
        translate.style.borderRadius = returnBorderRadius(10, 150); 
    }

}

