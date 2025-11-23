// функция - обработчик события нажатия на кнопку для перевода
// вопросса.
// обработчик принимает объект события, в котором есть ссылка
// на кнопку и ссылку на объект, в котором присутствуют 
// данные для переводов

import { countHints } from '../../../view/countHints.js';

export function handleTranslateQuestion(event) 
{
        // Изменяет число запрошенных подсказок непосредственно на 
        // странице
        countHints();
        let translateFromArray = '';
        // здесь подготавливается перевод для вопросса
        if (localStorage.getItem('EnglishWithJs_lang') === 'ru') {
            translateFromArray = window.DataSet.arrayBD[5];
        }
        if (localStorage.getItem('EnglishWithJs_lang') === 'ua') {
            translateFromArray = window.DataSet.arrayBD[6];
        }
        if (localStorage.getItem('EnglishWithJs_lang') === 'pl') {
            translateFromArray = window.DataSet.arrayBD[7];
        }
        event.target.innerText = translateFromArray;
}
