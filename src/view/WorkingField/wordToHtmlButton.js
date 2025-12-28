// Функция принимает на вход массив с разобранными в слова предложениями.
// Возвращает слова в HTML разметке в виде кнопок.
// flag нужен для информации о том, откуда запуск функции.

import { getStrStart } from './getStrStart.js';
import { getStrFinish } from './getStrFinish.js';

export function wordToHtmlButton(arrayButton, flag)
{
    let indexMax;
    const buttonOption = [];

            arrayButton.forEach((element, index) => {
                buttonOption.push(getStrStart(flag)
                                    +`" data-index="${index}" id="word${index}"> `
                                      +element+getStrFinish());
                indexMax = index;
            });
    return {
        buttonOption,
        indexMax
    }
}

wordToHtmlButton.help = `
Функция принимает на вход массив с разобранными в слова предложениями.
Возвращает слова в HTML разметке в виде кнопок.
flag нужен для информации о том, откуда запуск функции.
`;