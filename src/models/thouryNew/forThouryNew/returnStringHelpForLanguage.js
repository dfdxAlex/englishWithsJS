// Эта функция должна вернуть конкретный элемент в виде строки
// Функция возвращает строку конкретного языка

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

import { returnDataArrayForStr } from './returnDataArrayForStr.js';
import { searchLabel } from '../../../services/searchLabel.js';

export function returnStringHelpForLanguage(id)
{

    // Полуить строку со всеми языками
    const strAll = returnDataArrayForStr(id);
    if (strAll == undefined) return '';

    // найти позиции маркеров в строке strAll
    let pozObj = {
        ru : searchLabel(strAll, 'ru'),  // Найти позицию ru
        ua : searchLabel(strAll, 'ua'),  // Найти позицию ua
        pl : searchLabel(strAll, 'pl'),  // Найти позицию pl
        en : searchLabel(strAll, 'en'),  // Найти позицию en
        strLenght : strAll.length,
        get start() {  // по текущему языку найти его начальную позицию в строке
            if (localStorage.getItem('EnglishWithJs_lang') === 'ru') return this.ru;
            else if (localStorage.getItem('EnglishWithJs_lang') === 'ua') return this.ua;
            else if (localStorage.getItem('EnglishWithJs_lang') === 'pl') return this.pl;
            else return this.en;
        },
        // Отсортировать массив по возрастанию и начать его перебирать.
        // конечная точка конкретного языка - это первая точка в возрастающем массиве,
        // которая окажется больше стартовой точки.
        // если стартовая точка окажется самой большой, то конечной точкой будет длина строки
        get finish() { 
            const arrayLabel = [this.ru, this.ua, this.pl, this.en];
            arrayLabel.sort((a, b) => a - b);
            let rez = arrayLabel.find( item => item > this.start);
            if (rez == undefined) rez = this.strLenght;
            return rez;
        }
    }

    // Вырезать часть строки описывающая помощь в нужном языке
    let strOutput = strAll.slice(pozObj.start, pozObj.finish);
    return strOutput;
}

