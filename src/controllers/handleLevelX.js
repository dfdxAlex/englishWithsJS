// функция обрабатывает нажатие на кнопку правого меню 
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

// параметр dataObj - это екземпляр LevelDataModel(i)
// c входящим парамером определяющим масив с данными.(масив теста)

import { DataOk } from '../services/data/DataOk.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
import { getRandomInt } from '../services/getRandomInt.js';
import { hundleForTranslate } from './forHundleLevelX/hundleForTranslate.js';
import { borderRadiusForLevelTwoAndThree } from './forHundleLevelX/borderRadiusForLevelTwoAndThree.js';
import { setColorForLevelToAndThree } from './forHundleLevelX/setColorForLevelToAndThree.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { selectLightNormalHard } from './selectLightNormalHard.js';
import { setClickForLightNormalHardHelp } from './forHundleLevelX/setClickForLightNormalHardHelp.js';
import { EventController } from './EventController.js';
import { WorkingField } from '../view/WorkingField.js';
import { handleButtonOk } from './handleButtonOk.js';
import { addButtonPlaySound } from './handleLevelX/addButtonPlaySound.js';
import { playSound } from './handleSound/playSound.js';

export const handleLevelX = (dataObj, constIndexArray = false) =>
    {
        // Если Сменили тест, то запомнить номер нового теста и протолкнуть в массиве dataElevator[]
        // дальше по массиву
        if (DataOk.level.int !== dataObj.getLevel()) {
            // Записать в хранилище что работаем на неком уровне
            DataOk.setLevel(dataObj.getLevel());
            SettingForProgram.dataElevator.shift();
        }

        // Блокировка работы с форматом word-assembly если 
        // выбрано изучение слов, там нет предложений, 
        // которые можно собирать по словам
        if (LevelDataModel.mapNameMenu(dataObj.getLevel()-1) === 2) {
            localStorage.setItem('user_select','simple');
        }
    
        // Взять значение индекса текущего вопросса из локального хранилища
        // Используется как дефолтное значение
        let randomEl = localStorage.getItem('randomEl');
        
        // Если работает цикл с новым вопросом, то сгенерировать
        // новый номер вопроса
        // Если нужно использовать старый вопрос, то останется
        // дефолтное значение
        if (constIndexArray === false) {
            // выбрать случайную позицию из массива вопроссов
            // данный массив хранит в себе вопроссы и ответы.
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);
        }

        // Нужно проверить дополнительно входит ли старый
        // значение вопроса в рабочий массив. Если не входит, то пользователь
        // переключил тесты и можно спокойно сгенерировать новый вопрос.
        if (parseInt(randomEl) > dataObj.getArrayDB().length-1) {
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);
        }

        if (randomEl == null) {
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);
        }

        //Записать в сторадж выбранный индекс
        localStorage.setItem('randomEl', randomEl);
        let mas = dataObj.getArrayDB()[randomEl];

        // Блок проверяет есть ли в рабочем массиве свойство nameLeson
        // Если есть, то через одноимённую переменную оно передается
        // Где используется для установки в заголовок теста названия теста.
        const db = dataObj.getArrayDB();
        const nameLeson = db?.nameLeson ?? false;

        // Тест уровня Simple
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (SettingForProgram.selectTypeTest === 'simple') {
            document.getElementById('working_field')
                    .innerHTML = WorkingField.init(mas, nameLeson);
            hundleForTranslate();

            addButtonPlaySound('question_old');
            addButtonPlaySound('clicked_element');
            addButtonPlaySound('question');
            // addButtonPlaySound('translate');
            // addButtonPlaySound('option1');
            // addButtonPlaySound('option2');
            // addButtonPlaySound('option3');
            // addButtonPlaySound('option4');
        }

        // Тест уровня Simple - Translate
        if (SettingForProgram.selectTypeTest === 'simple-translate') {
            document.getElementById('working_field')
                    .innerHTML = WorkingField.initTranslate(mas, nameLeson);
            hundleForTranslate();

            addButtonPlaySound('question_old');
            addButtonPlaySound('clicked_element');
            addButtonPlaySound('question');
            // addButtonPlaySound('translate');
            // addButtonPlaySound('option1');
            // addButtonPlaySound('option2');
            // addButtonPlaySound('option3');
            // addButtonPlaySound('option4');
        }
        
        // Тест уровня Word-assembly
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (SettingForProgram.selectTypeTest === 'word-assembly') {
            const workingFieldC = document.getElementById('working_field');
            workingFieldC.innerHTML = WorkingField.initWordAssembly(mas, nameLeson);
            setClickForLightNormalHardHelp();
            hundleForTranslate();
            borderRadiusForLevelTwoAndThree();
            setColorForLevelToAndThree();
        }

        // Новый тест, удалить коммент когда закончу
        // Тест уровня Word-assembly-translate
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (false) // убрать при начале работы
        if (SettingForProgram.selectTypeTest === 'word-assembly-translate') {
            const workingFieldC = document.getElementById('working_field-translate');
            workingFieldC.innerHTML = WorkingField.initWordAssembly(mas, nameLeson);
        
        setClickForLightNormalHardHelp();
        hundleForTranslate();
        borderRadiusForLevelTwoAndThree();
        setColorForLevelToAndThree();
        }

        // Тест уровня Word-assembly-not-translate
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        const property = {
            constIndexArray
        };
        if (SettingForProgram.selectTypeTest === 'word-assembly-not-translate') {
            const workingFieldC = document.getElementById('working_field');
            workingFieldC.innerHTML = WorkingField.initWordAssemblyNotTranslate(mas, nameLeson, property);
            setClickForLightNormalHardHelp();       
            selectLightNormalHard();
            borderRadiusForLevelTwoAndThree();
            setColorForLevelToAndThree();
        }
        
        // Объект накидывает на кнопки обработчики 
        // соответствующих событий, ответ правильный или нет
        new EventController().init();

        document.getElementById('button-ok')?.addEventListener('click', handleButtonOk);
    };



