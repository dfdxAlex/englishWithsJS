
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { generateColorPair } from './generateColorPair.js';
import { getContrastColor } from './getContrastColor.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        const {color1, color2} = generateColorPair();
        el.style.backgroundColor = color1;
        el.style.color = getContrastColor(color1);
    });

    // Отдельно разукрасть кнопку перевода и кнопку Проверить
    const buttonOk = document.getElementById('button-ok');
    buttonOk.style.backgroundColor = generateColorPair().color1;
    buttonOk.style.color = getContrastColor(generateColorPair().color1);
    const translate = document.getElementById('translate');
    translate.style.backgroundColor = generateColorPair().color1;
    translate.style.color = getContrastColor(generateColorPair().color1);
}

