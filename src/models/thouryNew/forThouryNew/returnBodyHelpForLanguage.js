// Эта функция должна вернуть конкретный элемент в виде строки
// Функция возвращает строку конкретного языка

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

import { returnStringHelpForLanguage } from './returnStringHelpForLanguage.js';
import { ThouryH2 } from '../../../view/thouryNew/forThouryPattern/ThouryH2.js';
import { ThouryH3 } from '../../../view/thouryNew/forThouryPattern/ThouryH3.js';
import { ThouryH4 } from '../../../view/thouryNew/forThouryPattern/ThouryH4.js';
import { ThouryUl } from '../../../view/thouryNew/forThouryPattern/ThouryUl.js';
import { ThouryLi } from '../../../view/thouryNew/forThouryPattern/ThouryLi.js';
import { ThouryDiv } from '../../../view/thouryNew/forThouryPattern/ThouryDiv.js';
import '../../styles/thouryNew.scss';

export function returnBodyHelpForLanguage(id)
{
    let str = returnStringHelpForLanguage(id);
    if (str == '') return '';
    
    let strToArray = str.split('\n');

    let strRez = '';

    let findedBlock = '';
    let textBlockRightNow = '';
    let index=0;

    for (let value of strToArray) {
        index++;
        // если нашли пустую строку то заканчиваем обработку блока
        if (value.trim() == '' && textBlockRightNow !== '') {
            if (findedBlock == 'h2') {
                textBlockRightNow = ThouryH2('start', index) + textBlockRightNow + ThouryH2('');
                strRez = strRez + textBlockRightNow + '<hr>';
            }

            if (findedBlock == 'ul') {
                textBlockRightNow = ThouryUl('start', index) + textBlockRightNow + ThouryUl('');
                strRez = strRez + textBlockRightNow;
            }
            if (findedBlock == 'h3') {
                textBlockRightNow = ThouryH3('start', index) + textBlockRightNow + ThouryH3('');
                strRez = strRez + textBlockRightNow;
            }
            if (findedBlock == 'h4') {
                textBlockRightNow = ThouryH4('start', index) + textBlockRightNow + ThouryH4('');
                strRez = strRez + textBlockRightNow;
            }
            findedBlock = '';
            textBlockRightNow = '';
            continue;
        }
        // если нашли h2 то записываем признак того что нашли
        if (value.includes('h2')) {
            findedBlock = 'h2';
            continue;
        }

        if (value.includes('h3')) {
            findedBlock = 'h3';
            continue;
        }

        if (value.includes('h4')) {
            findedBlock = 'h4';
            continue;
        }

        if (value.includes('ul')) {
            findedBlock = 'ul';
            continue;
        }
        if (findedBlock == 'h4' || findedBlock == 'h3' || findedBlock == 'h2' || findedBlock == 'ul') {
            if (findedBlock == 'h4' || findedBlock == 'h3' || findedBlock == 'h2' || findedBlock == 'P')
                textBlockRightNow += value;
            if (findedBlock == 'ul') {
                textBlockRightNow += ThouryLi('start', index) + value + ThouryLi('');
            }
        }

    }

    return ThouryDiv() + strRez + ThouryDiv('');
}


