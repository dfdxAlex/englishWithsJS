
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
        el.style.boxShadow = getBoxShadow(color1);
    });

    // Отдельно разукрасть кнопку Проверить
    const buttonOk = document.getElementById('button-ok');
    if (buttonOk) {
        const colorButtonOk = generateColorPair();
        buttonOk.style.backgroundColor = colorButtonOk;
        buttonOk.style.color = getContrastColor(colorButtonOk);
        buttonOk.style.borderRadius = returnBorderRadius(10, 150); 
        buttonOk.style.boxShadow = getBoxShadow(colorButtonOk); 
    }
    // Отдельно разукрасть кнопку перевода
    const translate = document.getElementById('translate');
    if (translate) {
        const colorTranslate = generateColorPair();
        translate.style.backgroundColor = colorTranslate;
        translate.style.color = getContrastColor(colorTranslate);
        translate.style.boxShadow = getBoxShadow(colorTranslate);
    }

}

