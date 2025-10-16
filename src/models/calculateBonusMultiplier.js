// функция должна подсчитать коэффициент коррекции стоимости балла
// за правильный ответ.

import { LevelDataModel } from './LevelDataModel.js';
import { SettingForProgram } from './SettingForProgram.js';

export function calculateBonusMultiplier(propertyForBonus)
{
    // Если была использована помощь, то обнулить балл
    if (localStorage.getItem('was_click_help') === 'true') 
        {
            localStorage.setItem('was_click_help','false');
            // поместить инфу в статическую переменную для использования
            // в остальной части кода.
            SettingForProgram.diamant = "0";
            return 0;
        }

    // пока просто дублирую - деструктуризирую объект для
    // упрощения кода
    let {str, level, log:logView} = propertyForBonus;

    // объект для логов
    const log = {};
    log.propertyForBonus_input = propertyForBonus; //logs
    log.levelTest = level;

    // На случай если произошел ошибочный ответ, то вернуть 1
    // Штрафы оставляю на будущее
    if (str === "Error") {
        // поместить инфу в статическую переменную для использования
        // в остальной части кода.
            SettingForProgram.diamant = "-1";
        return 1;
    }

    // вычислить нахождение числа ошибок
    log.errorName = DataOk.levelNameError;
    
    // Узнать число правильных и не правильных ответов
    const {ok, error} = DataOk;
    log.ok = ok;
    log.error = error;

    // Узнать число существующих тестов
    const levelDataModel = new LevelDataModel([DataOk.level.int]);
    const numberTest = levelDataModel.getArrayNameButton().length;
    log.numberTest = numberTest;

    // для третьего бонуса
    // Массив с пунктами меню, нужен просто для обхода всех сохраненных 
    // данных касательно пройденных тестов. 
    const arrayNumberTest = levelDataModel.getArrayNameButton();
    log.arrayNumberTest = arrayNumberTest;

    // Стартовое значение коэффициента
    let ticLocal=1;

    // Первый бонус должен зависеть от числа непогашенных ошибок
    // если такие ошибки есть, то коэффициент считается по формуле снизу
    let bonusOne;
    if (error > 0 || ok > 0) bonusOne = ok / (error + ok);
    if (error == 0 && ok == 0) bonusOne = 1;
    log.bonusOne = bonusOne;

    // Второй бонус, попытка настройть раздачу балов в зависимости
    // от сложности. Сложным считается последний тест.
    const bonusTwo = level / numberTest;
    log.bonusTwo = bonusTwo;

    // Третий бонус - самые малопройденные тесты дают больше баллов
    // Плюс создать массив с цифрами, сколько есть данных по числу
    // пройденных тестов
    const testsOk = []; // набить массив цифрами
    const testsError = []; // набить массив цифрами
    arrayNumberTest.forEach((element, index) => {
        
        testsOk.push(DataOk.getOkIndex(index));

        testsError.push(DataOk.getErrorIndex(index));
    });

    const maxOk = Math.max(...testsOk);
    let maxError = Math.max(...testsError);

    if (maxError === maxOk) maxError+=1;
    log.maxError = maxError;
    log.testsOk = testsOk;
    // сбор информации в статический класс
    SettingForProgram.testsOk = testsOk;
    SettingForProgram.testsError = testsError;
    //******************************
    log.maxOk = maxOk;
    log.testsError = testsError;

    let bonusThree = (1 - (ok + error)/(maxOk+maxError));
    if (isNaN(bonusThree)) bonusThree = 1;
    log.bonusThree = bonusThree;

    log.calculateMedian = calculateMedian(testsOk);
    // Бонус пробует определить на сколько равномерно пройдены все тесты
    let diferent;
    // Если число пройденных тестов 0 и медианное среднее 0, 
    // то коэф. максимальный = 1
    if (ok == 0 && calculateMedian(testsOk) == 0) diferent = 1;
    // дальше находим отношение меньшего к большему. То есть коэф.
    // тем больше, чем ближе медианная средняя и число пройденных
    // тестов в конкретном задании
    if (ok > calculateMedian(testsOk)) diferent = calculateMedian(testsOk) / ok;
    else if (ok < calculateMedian(testsOk)) diferent = ok / calculateMedian(testsOk);

    let bonusFour = diferent;
    if (isNaN(bonusFour)) bonusFour = 1;
    log.bonusFour = bonusFour;

    ticLocal = (bonusOne + bonusTwo + bonusThree + bonusFour)/4;
    log.ticLocalFull = ticLocal;

    // Цена положительного ответа при коэф.=1 для первого теста
    let koefForTypeTest = 3;

    // Если работаем с тестом word-assembly то удвоить баллы
    if (localStorage.getItem('user_select') === 'word-assembly') {
        koefForTypeTest = 6;
    }

    // Если работаем с тестом word-assembly-not-translate 
    // то умножить балы на 2,5
    if (localStorage.getItem('user_select') === 'word-assembly-not-translate') {
        koefForTypeTest = 9;
    }

    if (SettingForProgram.inputLightNormalHard == 'normal') koefForTypeTest += 1;
    if (SettingForProgram.inputLightNormalHard == 'hard') koefForTypeTest += 3;

    ticLocal *= koefForTypeTest;

    if (ticLocal < 0.4) ticLocal = 0.4;
 
    log.ticLocalRezult = ticLocal;
    
    
    if (logView) {
        console.log('---calculateBonusMultiplier---');
        console.log(log);
        console.log('***************************');
    }

    // поместить инфу в статическую переменную для использования
    // в остальной части кода.
    SettingForProgram.diamant = ticLocal.toFixed(2);

    return ticLocal;
}

function calculateMedian(array) {
    const sorted = [...array].sort((a, b) => a - b); // Сортируем массив
    const mid = Math.floor(sorted.length / 2);       // Находим середину

    if (sorted.length % 2 === 0) {
        // Если чётное количество элементов, среднее двух центральных
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        // Если нечётное, возвращаем центральный элемент
        return sorted[mid];
    }
}
