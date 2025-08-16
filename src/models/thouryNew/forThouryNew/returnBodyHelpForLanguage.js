// Эта функция должна вернуть конкретный элемент в виде строки
// Функция возвращает строку конкретного языка

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

import { returnStringHelpForLanguage } from './returnStringHelpForLanguage.js';
import { ThouryH2 } from '../../../view/thouryNew/forThouryPattern/ThouryH2.js';
import { ThouryP } from '../../../view/thouryNew/forThouryPattern/ThouryP.js';
import { ThouryUl } from '../../../view/thouryNew/forThouryPattern/ThouryUl.js';
import { ThouryLi } from '../../../view/thouryNew/forThouryPattern/ThouryLi.js';
import { ThouryDiv } from '../../../view/thouryNew/forThouryPattern/ThouryDiv.js';
import '../../styles/thouryNew.scss';

export function returnBodyHelpForLanguage(id)
{
    let str = returnStringHelpForLanguage(id);

    let strToArray = str.split('\n');

    let strRez = '';

    let findedBlock = '';
    let textBlockRightNow = '';
    let index=0;

    for (let value of strToArray) {
        index++;
        // если нашли пустую строку то заканчиваем обработку блока
        if (value.trim() == '') {
            if (findedBlock == 'h2' && textBlockRightNow !== '') {
                textBlockRightNow = ThouryH2('start', index) + textBlockRightNow + ThouryH2('');
                strRez = strRez + textBlockRightNow + '<hr>';
            }
            if (findedBlock == 'P' && textBlockRightNow !== '') {
                textBlockRightNow = ThouryP('start', index) + textBlockRightNow + ThouryP('');
                strRez = strRez + textBlockRightNow;
            }
            if (findedBlock == 'ul' && textBlockRightNow !== '') {
                textBlockRightNow = ThouryUl('start', index) + textBlockRightNow + ThouryUl('');
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

        if (value.includes('P')) {
            findedBlock = 'P';
            continue;
        }

        if (value.includes('ul')) {
            findedBlock = 'ul';
            continue;
        }

        if (findedBlock == 'h2' || findedBlock == 'P' || findedBlock == 'ul') {
            if (findedBlock == 'h2' || findedBlock == 'P')
                textBlockRightNow += value;
            if (findedBlock == 'ul') {
                textBlockRightNow += ThouryLi('start', index) + value + ThouryLi('');
            }
        }

    }

    return ThouryDiv() + strRez + ThouryDiv('');
}


