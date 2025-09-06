// Класс содержит информацию о том, на каком уровне 
// используется какой массив.
// Информация добавляется в метод getArrayDB()
// Добавляется уровень здесь

// Чтобы добавить новый тест необходимо создать массив, пример 
// Добавить запись в arrayNameButton() по аналогии с предыдущими
// В этот массив arrayForButton добавить цифру для определения куда попадает соответствующий пункт
// И заполнить getArrayDB().
// Массив с данными достаточно положить в папку 1 или 2

// Дополнительные данные в массиве с тестами
// --Если это свойство есть, то оно попадает в заголовок теста
// ----haveAndHaveGot.nameLeson = "Have and Have Got";
// --Свойство показывает сколько индексов содержат правильные предложения
// --Если его нет, то будет считаться, что правильные предложения 
// --только индекс 0 и 1. Если 5 - это индексы 0,1,2,3,4 с правильно
// --созданными предложениями.
// ----unit23.lengthTrue = 5;
// Заменяет многоточие словом
// function (id) {
//    return replaceEllipsisWithWord(id, presentSimple);
// }

import './styles/LevelDataModel.scss';
import { DataOk } from '../services/data/DataOk.js';
import { Exercise } from '../view/Exercise.js';
import { getTranslate } from '../models/forFactoryRegistr/getTranslate.js';
import { setStatisticForButton } from '../view/forLevelDataModel/setStatisticForButton.js';
// Не УДАЛЯТЬ!!!
import  fileDB  from './filedb/indexForFileDB.js';

export class LevelDataModel
{
    constructor(level = 1)
    {
        
        // setLevel делает число числом, записывает его в объект
        // и возвращает это число. 
        this.level = DataOk.setLevel(level);
        this.rez = false;
        this.ex = new Exercise();
        this.translate = getTranslate();
        this.lang = localStorage.getItem('EnglishWithJs_lang');
        this.propertyArrayNameButton = [];
        this.tic = 0;
        // опережающий запуск формирования массива для меню верхнего
        this.arrayNameButton();

    }

    // Здесь заполняется вариант надписи название теста
    // на кнопке навигационного меню
    arrayNameButton()
    {
        this.propertyArrayNameButton.push(setStatisticForButton(1)); // 100 слов о еде  // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(2)); // 100 слов про спорт  // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(3)); // 100 слов про путешествия // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(4)); // 100 слов // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(5)); // 300 слов // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(6)); // 500 слов // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(7)); // 50 глаголов  // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(8)); // 300 глаголов // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(9));  // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(10));   // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(11));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(12));  // Вопросительные слова // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(13)); // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(14));  // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(15));                // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(16));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(17));     // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(18));        // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(19));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(20)); // Вторая группа неправильных глаголов // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(21));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(22));// A1 Beginer text пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(23));// пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Собрано алмазов:'));// пункт 4
        this.propertyArrayNameButton.push(this.translate.translate('Ошибок:'));// пункт 4
        this.propertyArrayNameButton.push(this.translate.translate('Успех:'));// пункт 4
        this.propertyArrayNameButton.push(this.translate.translate('Сброс'));// пункт 4
        this.propertyArrayNameButton.push(this.translate.translate('Переводов:'));// пункт 4
        this.propertyArrayNameButton.push('');//Задание теста:'));// пункт 3
        this.propertyArrayNameButton.push('');/// пункт 3
        this.propertyArrayNameButton.push(setStatisticForButton(31));//'Прошедшее простое'));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(32));  //Past Simple отрицательные и вопросы  пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(33));// Present Simple He, She, It пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(34));//'Past Continuous' пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(35)); // Past Continuous Or Simple // пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(36)); // нерегулярные глаголы 3 // пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(37)); //Present Perfect пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(38)); //PrPerf, PrCont, PsSimpl пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(39)); //for, since, ago пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(40)); //PrPerf or PsSimpl пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(41));// Animals 100 (RU) пункт 2
        this.propertyArrayNameButton.push(setStatisticForButton(42));//Is Done Was Done (passive 1)'));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(43)); //Is Being Done Has Been Done (passive 2)'));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(44)); //be/have/do in present and past tenses'));// пункт 1
        this.propertyArrayNameButton.push(setStatisticForButton(45) + 'Unit 24'); // unit 24 пункт 1
        this.tic = this.propertyArrayNameButton.length;
    }

    // Это массив с набором цифр, каждая цифра - это пункт в меню.
    // Каждая цифра в массиве - это расположение соответствующего 
    // пункта. Первый элемент находится в меню 2, второй тоже и т.д.
    static mapNameMenu(test) 
    {
        const arrayForButton = [2,2,2,2,2,2,2,2,1,1,
                                1,2,1,1,1,1,1,1,1,2,
                                1,2,1,4,4,4,4,4,3,3,
                                1,1,2,1,1,2,1,1,1,1,
                                2,1,1,1,5];

        return arrayForButton[test];
    }
    
    selectLevel(exercise = "Выбрать правильный перевод", nameArray, level, lang = true)
    {
        if (SettingForProgram.selectTypeTest === "word-assembly" || SettingForProgram.selectTypeTest === "word-assembly-not-translate")
            exercise = "В этом тесте нужно собрать предложение из предложенных слов. Имейте в виду, что иногда собранное предложение может не совпадать с общей темой теста.";
        if (level == this.level && (lang === true || lang === this.lang)) {
            this.ex.init(this.translate.translate(exercise));
            localStorage.setItem('nameArrayDb',nameArray);
            window.Thoury.handleThoury(level);
            // поместить в this.rez нужный массив с данными. getArrayDB() запускает данный метод
            // и потом возвращает переменную this.rez
            nameArray = 'fileDB.'+nameArray;
            this.rez = eval(nameArray);
        }
    }
    getArrayDB()
    {
        // 1 параметр - Задание для теста
        // 2 параметр - Массив с содержимым теста
        // 3 параметр - позиция пункта меню в своей категории.
        // 4 параметн - язык теста. Необходим если есть один тест для разных языков
        this.selectLevel(undefined,'commonFood100',1,'ru');
        this.selectLevel(undefined,'commonFood100ua',1,'ua');
        this.selectLevel(undefined,'commonFood100pl',1,'pl');
        this.selectLevel(undefined,'commonSport100',2,'ru');
        this.selectLevel(undefined,'commonSport100pl',2,'pl');
        this.selectLevel(undefined,'commonWalk100',3,'ru');
        this.selectLevel(undefined,'commonWords100',4,'ru');
        this.selectLevel(undefined,'commonWords300',5,'ru');
        this.selectLevel(undefined,'commonWords500',6,'ru');
        this.selectLevel(undefined,'verbs50',7,'ru');
        this.selectLevel(undefined,'verbs50pl',7,'pl');
        this.selectLevel(undefined,'verbs300',8,'ru');
        this.selectLevel('Выбрать правильный вариант сокращенной формы глагола to Be','toBeForms',9);
        this.selectLevel('Выбрать правильный вариант сокращенной формы глагола to Be','toBeSentences',10);
        this.selectLevel('Выбрать правильный вариант ответа','questionsWithAnswers',11);
        this.selectLevel('Вставить правильное слово','whereThat',12);
        this.selectLevel('Вставить правильное слово','presentContinuous',13);
        this.selectLevel('Выбрать правильный вопрос','presetnContiniusQuestion',14);
        this.selectLevel('Вставить правильное слово','presentSimple',15);
        this.selectLevel('Выберите правильно составленное предложение.','presentSimpleNever',16);
        this.selectLevel('Вставить правильное слово','presentSimpleNegative',17);
        this.selectLevel('Подобрать правильно вопрос или ответ','presentSimpleQuestions',18);
        this.selectLevel('Выбрать правильное время PS or PC','presentSimpleOrContinius',19);
        this.selectLevel('Подобрать пару правильный - неправильный глагол. Тест разбавлен небольшим числом правильных глаголов.','irregularVerbsPastSimple',20);
        this.selectLevel('Выбрать правильную пару.','haveAndHaveGot',21);
        this.selectLevel('Text A1 Beginer.','textA1Begginer',22);
        this.selectLevel('Выбрать правильную пару.','wasOrWere',23);
        this.selectLevel('Вставьте глагол вместо троеточия или подберите правильное предложение в простом прошедшем времени.','pastSimpleSentences',31);
        this.selectLevel('Вставьте глагол вместо троеточия или подберите правильное предложение в простом прошедшем времени.','pastSimpleNegativeAndQuestions',32);
        this.selectLevel('Выбрать правильную пару.','presentSimpleHeSheIt',33);
        this.selectLevel('Вставьте глагол вместо троеточия или подберите правильное предложение в продолженном прошедшем времени.','pastContinuousArray',34);
        this.selectLevel('Выбрать правильную пару.','pastContinuousOrSimple',35);
        this.selectLevel('Выбрать правильную пару.','irregularVerbsV3',36);
        this.selectLevel('Выбрать правильную пару.','presentPerfectIHaveDone',37);
        this.selectLevel('Выбрать правильную пару.','presentPerfectAndSimpleAndContinius',38);
        this.selectLevel('Выбрать правильную пару.','forSinceAgoPrPerfPastSimple',39);
        this.selectLevel('Выбрать правильную пару.','presentPerfectOrPastSimple',40);
        this.selectLevel('Выбрать правильную пару.','animals100',41);
        this.selectLevel('Выбрать правильную пару.','passiveIsDoneWasDone',42);
        this.selectLevel('Выбрать правильную пару.','prContiniusPerfectPassive',43);
        this.selectLevel('Выбрать правильную пару.','unit23',44);
        this.selectLevel('Выбрать правильную пару.','unit24',45);
        return this.rez;
    }

    getArrayNameButton()
    {
        return this.propertyArrayNameButton;
    }

    getLevel()
    {
        return this.level;
    }

    getTic()
    {
        return this.tic;
    }
}