import { outputTranslateForTest } from './handleButtonOk/outputTranslateForTest.js';
import { handleOkErr } from './handleOkErr.js';
import { DataSet } from '../services/data/DataSet.js';
import { LanguageController } from './LanguageController.js';
import { buttonOkBlockNoon } from './handleButtonOk/buttonOkBlockNoon.js';

// Функция проверяет правильность составленного предложения
export function handleButtonOk(ev)
{
    const translate = new LanguageController();

    // Узнать сколько должно быть кнопок в зоне ответа.
    const buttonMax = parseInt(localStorage.getItem('indexMax'));
    // Создать массив с кнопками в зоне ответа.
    const arrayButton = document.querySelectorAll('#container-for-rezult [id*="word"]');
    // По умолчанию ответ правильный
    let rezultString = '';
    // Пробежать массив, если не хватает элементов в массиве или 
    // значение дата атрибута не совпадает с порядковым номером 
    // индекса елемента, то ответ не правильный rezult = false;
    // параллельно собрать предложение получившееся
    for (let i=0; i<=buttonMax; i++) {
        if (arrayButton[i])
            rezultString+=arrayButton[i].innerText + ' ';
    }

    //************************************************************
    //Этот блок дублирует проверку. Изменение алгоритма проверки результата
    //так как алгоритм проверяющий порядок слов уязвим для предложений
    //с одинаковыми двумя словами.

    // Достать образец текущего задания в тесте из другого объекта
    let testState = DataSet.questionDB;
    testState = testState.replace(/\s+/g, '');
    let testForButton = rezultString.replace(/\s+/g, '');

    let testRezult = String(testState.toLowerCase()) == String(testForButton.toLowerCase());
    //************************************************************

    // Блок сработает если ни одного камня не было выбрано перед нажатием кнопки Проверить
    if (rezultString.trim().length === 0) {
        // Изменить надпись на кнопке Проверить и остановить всплытие события клика
        document.querySelector('#button-ok').innerText = translate.translate('Ответ не введён!');
        ev.stopPropagation();
        // Выбрать контейнер с нижними кнопками и накинуть на него событие, которое сработает 1 раз
        // Событие накидывается если была введена пустая строка, то есть нет ни одного скинутого вверх камня
        // Срабатывает один раз потому, что при неправильном вводе комбинации такое же событие 
        // наложится в другом месте уже на многоразовую отработку
        buttonOkBlockNoon();
        return;
    }

    // Накинуть на кнопку текст, который будет прочитан функцией
    // handleOkErr(). Но сразу же после этого будет обновление страницы
    // и информация вернется к дефолтной. Данного текста видно не будет.
    document.querySelector('#button-ok').innerText = rezultString;
    // Если ответ правильный
    if (testRezult) {
        handleOkErr('Ok',ev);
        outputTranslateForTest();
    } else {
        handleOkErr('Error',ev);
    }
}


