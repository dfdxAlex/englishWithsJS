// функция обрабатывает нажатие на кнопку правого меню 
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

// параметр dataObj - это екземпляр LevelDataModel(i)
// c входящим парамером определяющим масив с данными.(масив теста)

import { noonMenu } from '../services/noonMenu.js';
import { DataOk } from '../services/data/DataOk.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
import { getRandomInt } from '../services/getRandomInt.js';
import { hundleForTranslate } from './forHundleLevelX/hundleForTranslate.js';
import { borderRadiusForLevelTwoAndThree } from './forHundleLevelX/borderRadiusForLevelTwoAndThree.js';
import { setColorForLevelToAndThree } from './forHundleLevelX/setColorForLevelToAndThree.js';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { selectLightNormalHard } from './handleButtonLightNormHardHelp.js';
import { setClickForLightNormalHardHelp } from './forHundleLevelX/setClickForLightNormalHardHelp.js';

export const handleLevelX = (dataObj, constIndexArray = false) =>
    {
        noonMenu('.dropdown-content');
        // Сменили тест
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
    
        // Взять значение индекса из локального хранилища
        // Используется как дефолтное значение
        let randomEl = localStorage.getItem('randomEl');
        
        // Если работает цикл с новым вопросом, то сгенерировать
        // новый номер вопроса
        // Если нужно использовать старый вопрос, то останется
        // дефолтное значение
        if (constIndexArray === false)
            // выбрать случайную позицию из массива вопроссов
            // данный массив хранит в себе вопроссы и ответы.
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);

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
        // Если есть, то через одноимённую переменную оно передается в WorkingField
        // Где используется для установки в заголовок теста названия теста.
        const db = dataObj.getArrayDB();
        const nameLeson = db?.nameLeson ?? false;

        // Тест уровня Simple
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (SettingForProgram.selectTypeTest === 'simple') {
            document.getElementById('working_field')
                    .innerHTML = FactoryRegistr.getObject('WorkingField').init(mas, nameLeson);
        hundleForTranslate();
        }
        
        // Тест уровня Word-assembly
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (SettingForProgram.selectTypeTest === 'word-assembly') {
            const workingField = document.getElementById('working_field');
            workingField.innerHTML = FactoryRegistr.getObject('WorkingField').initWordAssembly(mas, nameLeson);
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
            const workingField = document.getElementById('working_field');
            workingField.innerHTML = FactoryRegistr.getObject('WorkingField').initWordAssemblyNotTranslate(mas, nameLeson, property);
            setClickForLightNormalHardHelp();       

        selectLightNormalHard();
        borderRadiusForLevelTwoAndThree();
        setColorForLevelToAndThree();
        }
        
        // Объект накидывает на кнопки обработчики 
        // соответствующих событий, ответ правильный или нет
        FactoryRegistr.getObject('EventController').init();
    };




