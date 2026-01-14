// функция считает число верных и не верных ответов и записывает 
// их в свои переменные в локальном хранилище.
// У каждого урока будут свои переменные для хранения верных ответов
// То есть каждый запуск этого обработчика событий увеличивает 
// число верных ответов на одну единицу.
// Функция handleLevelX(); перезапускает рабочее поле 
// для обновления информации
// если использовать как функцию, то handleOkErr(Ok|Error)
// если как обработчик событий, то () => {handleOkErr(Ok|Error)}

// Данные о колличестве правильных и не правильных ответов хранятся
// в локальном хранилище, и у каждого теста есть свои два ключа в хранилище.

//Не удалять!!
import fileDB from '../models/filedb/indexForFileDB.js';

import { Log } from '../models/Log.js';
import { Logs } from '../models/Logs.js';

import { calculateBonusMultiplier } from '../models/calculateBonusMultiplier.js';
import { DataOk } from '../services/data/DataOk.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { setBorderRadiusForWorkingField } from '../services/setColorMenu/setBorderRadiusForWorkingField.js';
import { handleLevelX } from './handleLevelX.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { resetStatistic } from '../models/resetStatistic.js';
import { handleClickError } from './handleClickError.js';
import { resetBottonError } from './resetBottonError.js';
import { buttonOkBlockNoon } from './handleButtonOk/buttonOkBlockNoon.js';

export function handleOkErr(str, event) {
    // выйти из функции если падает бонусный ящик
    if (document.getElementById('scarb')) {
        return;
    }

    // Сохранить координаты места клика по кнопке Проверить
    SettingForProgram.buttonCheckX = event.pageX;
    SettingForProgram.buttonCheckY = event.pageY;
    // Переменные, в которых хранится инфа об верных и не верных 
    // ответак создается так: 
    // слово "level", к нему добавляется уровень, на котором
    // в данный момент времени работает пользователь, он хранится
    // в хранилище  localStorage.getItem('level').
    // дальше добавляется знак "_", и заканчивается имя пересенной
    // либо словом "Ok", либо "Error", эта инфа приходит через
    // входной параметр функции (str)
    const level = localStorage.getItem('level');
       
    let ticTime = parseFloat(localStorage.getItem('level'+level+'_'+str));
    if (!Number.isFinite(ticTime)) ticTime = 0;
    let tic = ticTime;

    // объект с разными данными для подсчёта бонусов
    const propertyForBonus = {
        tic,
        str,
        log:false, // Если true, то calculateBonusMultiplier() пишет логи
        level,
    };
    // Увеличить число ответов
    // функция calculateBonusMultiplier() берет число текущих балов
    // и увеличивает его. Правила смотреть внутри функции
    let ticResult = tic+calculateBonusMultiplier(propertyForBonus);
    localStorage.setItem('level'+level+'_'+str,ticResult);

    // Сброс состояния кнопки Сообщить об ошибке
    resetBottonError();

    // если был ответ ошибочный, то поместить выбранный вариант
    // в поле clicked_element
    let rezult  = event.target.innerText;

    if (str === 'Ok') {
        DataOk.translateStop = false;
        // Если ответ правильный, то в поле clicked_element вывести
        // результат работы последней функции в массиве, если там 
        // есть функция, иначе вывести элемент, на который нажали
        let nameArray = localStorage.getItem('nameArrayDb');
        nameArray = 'fileDB.'+nameArray;
        const workingArray = eval(nameArray);
        const indexArray = localStorage.getItem('randomEl');
        if (typeof workingArray[workingArray.length-1] === "function")
            rezult = workingArray[workingArray.length-1](indexArray);
    }

    // Выбрать html тег, который покажет выбранный неправильный вариант
    // или весь правильный вопрос
    const clickedElement = document.getElementById('clicked_element');
    if (clickedElement) {
        clickedElement.innerHTML = rezult.replace("🔊", "");
    }

    // добавить объект с логами в пулл логов
    Logs.addLog = new Log(str, rezult);

    // Здесь просто прячется нажатая кнопка. Это нужно для того, 
    // чтобы не дублировать неправильные ответы.
    // Добавляется событие возврата кнопки, при клике на любую кнопку из камней внизу
    if (str === 'Error') {
        const btn = event.target;
        btn.style.display = 'none';
        
        // Найти div с динамиком и спрятать его  
        // выбирается div как следующий елемент после кнопки btn, сначала выйти к родителю 
        // а потом взять следующий елемент
        document.getElementById(btn.parentElement.nextElementSibling.id).style.display = 'none';
        
        event.stopPropagation();
        buttonOkBlockNoon(btn);
    }

    // Настроить событие на кнопку Сообщить об ошибке
    // Функция подготавливает информацию о том, с каким словом работаем
    handleClickError();

    // Запомнить содержимое вопросса, для того, чтобы его 
    // продублировать в поле предыдущего вопросса и ответа
    let oldElementText = document.getElementById('question');
    const clickedElementOld = document.getElementById('question_old');
    // Проверить есть ли поле с вопроссом, это поле отсутствует 
    // При втором уровне тестов, сборка предложения по словам
    if (oldElementText !== null)
        clickedElementOld.innerText = oldElementText.innerText.replace("🔊", "");
    else
        // Если не было поля с вопроссом, то инфу про предыдущий ответ
        // можно поймать на этой кнопке в пределах одного цикла.
        // Данная кнопка получает текст последнего ответа, но при перерисовке
        // информация теряется, поэтому на странице её не видно.
        clickedElementOld.innerText = document.querySelector('#button-ok').innerText;

    // Поле со старым или текущим вопроссом
    // Изменить вопрос только если есть правильный ответ на предыдущий
    if (str === 'Ok') {
        handleLevelX(new LevelDataModel(localStorage.getItem('level')));
    }
    
    // пересчитать статистику и записать в хранилище
    resetStatistic(false);
    // перерисовать статус диамантов
    hundleHelpPrime();

    // Функция находит нужные элементы, если они есть, и изменяет для них border-radius
    setBorderRadiusForWorkingField(['question', 'translate', 'option1',
        'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8'
        , 'option9', 'option10', 'option11', 'option12'
    ]);
}

