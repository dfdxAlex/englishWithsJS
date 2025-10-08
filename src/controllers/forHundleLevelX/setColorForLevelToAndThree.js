
import { arrayButtonForLevelTwoAndThree } from './arrayButtonForLevelTwoAndThree.js';
import { generateColorPair } from './generateColorPair.js';

export function setColorForLevelToAndThree()
{
    arrayButtonForLevelTwoAndThree().forEach((el)=>{
        const {color1, color2} = generateColorPair();
        el.style.backgroundColor = color1;
        el.style.color = color2;
    });

    // Отдельно разукрасть кнопку перевода и кнопку Проверить
    const buttonOk = document.getElementById('button-ok');
    buttonOk.style.backgroundColor = generateColorPair().color1;
    buttonOk.style.color = generateColorPair().color2;
    const translate = document.getElementById('translate');
    translate.style.backgroundColor = generateColorPair().color1;
    translate.style.color = generateColorPair().color2;
}