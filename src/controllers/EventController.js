// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

import { handleOkErr } from './handleOkErr.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { handleLevelX } from './handleLevelX.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
import { handleClickTestTwo } from './handleClickTestTwo.js';

// объект достаточно просто создать в нужном месте
export class EventController {
    init() {

        // Оригинальные обработчики для первого варианта теста
        if (SettingForProgram.selectTypeTest === "simple") {
            // Найти уже готовые рендернутые кнопки.
            let optionsOne = document.getElementById('option1');
            let optionsTwo = document.getElementById('option2');
            let optionsThree = document.getElementById('option3');
            let optionsFour = document.getElementById('option4');

            // Сделать образец правильной строки без пробелов. Нужен для:
            // иногда в тестах есть два одинаковых варианта ответов, чтобы они оба сработали, на 
            // них должен быть статус "Ок". Чтобы этот статус повесить на дополнительные варианты
            // ответов нужно эти варианты ответов сравнить с заведомо правильным. Если он такой-же,
            // то дать статус Ok, если отличается то Error
            let optionsOneString = optionsOne.innerText.replaceAll(' ','');
            let optionsTwoString = optionsTwo.innerText.replaceAll(' ','');
            let optionsThreeString = optionsThree.innerText.replaceAll(' ','');
            let optionsFourString = optionsFour.innerText.replaceAll(' ','');


            // Всегда правильный вариант ответа, по определению.
            optionsOne.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsTwoString)
                optionsTwo.onclick = handleOkErr.bind(null,'Error');
            else 
                optionsTwo.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsThreeString)
                optionsThree.onclick = handleOkErr.bind(null,'Error');
            else
                optionsThree.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsFourString)
                optionsFour.onclick = handleOkErr.bind(null,'Error');
            else
                optionsFour.onclick = handleOkErr.bind(null,'Ok');
        }

        if (SettingForProgram.selectTypeTest === "simple-translate") {
            // Первая часть теста, в качестве вопросса вытупает сам вопрос
            let optionsOne = document.getElementById('option5');
            let optionsTwo = document.getElementById('option6');
            let optionsThree = document.getElementById('option7');
            let optionsFour = document.getElementById('option8');

            // Вторая часть теста, в качестве выступает работает перевод
            if (!optionsOne) {
                optionsOne = document.getElementById('option9');
                optionsTwo = document.getElementById('option10');
                optionsThree = document.getElementById('option11');
                optionsFour = document.getElementById('option12');
            }

            // Сделать образец правильной строки без пробелов. Нужен для:
            // иногда в тестах есть два одинаковых варианта ответов, чтобы они оба сработали, на 
            // них должен быть статус "Ок". Чтобы этот статус повесить на дополнительные варианты
            // ответов нужно эти варианты ответов сравнить с заведомо правильным. Если он такой-же,
            // то дать статус Ok, если отличается то Error
            let optionsOneString = optionsOne.innerText.replaceAll(' ','');
            let optionsTwoString = optionsTwo.innerText.replaceAll(' ','');
            let optionsThreeString = optionsThree.innerText.replaceAll(' ','');
            let optionsFourString = optionsFour.innerText.replaceAll(' ','');


            // Всегда правильный вариант ответа, по определению.
            optionsOne.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsTwoString)
                optionsTwo.onclick = handleOkErr.bind(null,'Error');
            else 
                optionsTwo.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsThreeString)
                optionsThree.onclick = handleOkErr.bind(null,'Error');
            else
                optionsThree.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsFourString)
                optionsFour.onclick = handleOkErr.bind(null,'Error');
            else
                optionsFour.onclick = handleOkErr.bind(null,'Ok');
        }



        // Оригинальные обработчики событий для второго варианта теста
        if (SettingForProgram.selectTypeTest === "word-assembly") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }
            // вернуть все кнопки обратно вниз, если был клик по любой кнопку
            let containerForRezult = document.querySelector('#container-for-rezult');
            if (containerForRezult) {
                containerForRezult.onclick = (el) => {
                    el.stopPropagation();
                    const i = localStorage.getItem('level');
                    const obj = new LevelDataModel(i);
                    // перерисовать рабочее поле.
                    // параметр true отключает генерацию нового вопросса
                    handleLevelX(obj, true);
                };
            }
        }

        // Оригинальные обработчики событий для третьего варианта теста
        // По возможности объеденить этот блок с предыдущим
        if (SettingForProgram.selectTypeTest === "word-assembly-not-translate") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }
            // вернуть все кнопки обратно вниз, если был клик по любой кнопку
            let containerForRezult = document.querySelector('#container-for-rezult');
            if (containerForRezult) {
                containerForRezult.onclick = (el) => {
                    el.stopPropagation();
                    const obj = new LevelDataModel(DataOk.level.int);
                    // перерисовать рабочее поле.
                    // параметр true отключает генерацию нового вопросса
                    handleLevelX(obj, true);
                };
            }
        }
        
        // обработчик события клика по кнопке логов
        document.getElementById('log').onclick = window.handleLog;
    }
}
