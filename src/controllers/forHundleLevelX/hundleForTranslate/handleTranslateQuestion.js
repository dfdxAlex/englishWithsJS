// функция - обработчик события нажатия на кнопку для перевода
// вопросса.
// обработчик принимает объект события, в котором есть ссылка
// на кнопку и ссылку на объект, в котором присутствуют 
// данные для переводов

import { countHints } from '../../../view/countHints.js';
import { SettingForProgram } from '../../../models/SettingForProgram.js';

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

        // если работает любой тест кроме simple-translate то перевод берется из массива
        if (SettingForProgram.selectTypeTest !== 'simple-translate') {
            event.target.innerText = translateFromArray;
        }
        // если работает simple-translate, то перевод берется из первой кнопки, которая может 
        // быть либо с индексом 5 или 9
        else {
            const levelOne = document.getElementById('option5');
            const levelTwo = document.getElementById('option9');
            if (levelOne) event.target.innerText = levelOne.innerText;
            if (levelTwo) event.target.innerText = levelTwo.innerText;
        }
}
