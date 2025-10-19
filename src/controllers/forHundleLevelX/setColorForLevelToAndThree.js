
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { generateColorPair } from './generateColorPair.js';
import { returnBorderRadius } from '../../services/setColorMenu/returnBorderRadius.js';
import { getContrastColorTwo } from './getContrastColorTwo.js';
// import { SettingForProgram } from '../../models/SettingForProgram.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        const color1 = generateColorPair();
        getContrastColorTwo(el);
    });

    // Отдельно разукрасть кнопку Проверить
    const buttonOk = document.getElementById('button-ok');
    if (buttonOk) {
        const colorButtonOk = generateColorPair();
        getContrastColorTwo(buttonOk);
        buttonOk.style.borderRadius = returnBorderRadius(10, 150); 
    }
    // Отдельно разукрасть кнопку перевода
    const translate = document.getElementById('translate');
    if (translate) {
        const colorTranslate = generateColorPair();
        getContrastColorTwo(buttonOk);
        translate.style.borderRadius = returnBorderRadius(10, 150); 
    }

}

