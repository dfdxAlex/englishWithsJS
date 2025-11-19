// Функция меняет цвет текста в зависимости от картинки.
// Данные о картинке берутся из объекта DataSet

// Цель функции в зависимости от фоновой картинки подобрать цвет шрифта главного меню.
// Цвет зашит жёстко и учитывает преобладающую палитру на фоновом изображении.
// На данный момент 49 разных картинок для фона, если добавлять новые то к их палитре
// нужно будет подобрать контрастный цвет для шрифта и записать в условие в этой функции.

import { DataSet } from '../../../services/data/DataSet.js';
import { setBorderRadiusForWorkingField } from '../../../services/setColorMenu/setBorderRadiusForWorkingField.js';
import { randomeFontSize } from './setColorMenu/randomeFontSize.js';
import { randomeLeftRightButton } from './setColorMenu/randomeLeftRightButton.js';
import { setColorBlackOrWhite } from './setColorMenu/setColorBlackOrWhite.js';
import { backgraundForLanguageSeect } from './setColorMenu/backgraundForLanguageSeect.js';
import { setPaddingForSimple } from './setColorMenu/setPaddingForSimple.js';

export function setColorMenu()
{
    // C Цветом текста и фона работаем для менюшек
    const searchMenu = document.getElementById('dropdownMenuburger');

    // Функция находит нужные элементы, если они есть, и изменяет для них border-radius
    // и контрастный фон и цвет шрифта делает
    setBorderRadiusForWorkingField(['question', 'translate', 'option1',
        'option2', 'option3', 'option4', 'question_old', 'clicked_element', 'search_error',
        , 'option5', 'option6', 'option7', 'option8'
    ]);

    // случайный размер шрифта
    const randomSize = randomeFontSize(['question_old', 'clicked_element', 'log', 
                                        'sound', 'search_error', 'fieldset-legend-old']);

    // дополнительный паддинг только для первого теста
    setPaddingForSimple(['question', 'translate', 'option1',
        'option2', 'option3', 'option4', 'question_old', 'clicked_element', 
        'option5', 'option6', 'option7', 'option8'
    ], randomSize);

    // смещение картинок логирования и динамика
    randomeLeftRightButton(['log', 'sound']);

    let setColorBlackOrWhiteProp = 'white';
    let backgraundForLanguageSeectProp = 'white';

    if (searchMenu) {
        if (DataSet.numberBackground>16 && DataSet.numberBackground < 21
            || (DataSet.numberBackground>24 && DataSet.numberBackground < 49)
        ) {
            setColorBlackOrWhiteProp = 'black';
            backgraundForLanguageSeectProp = 'black';
        }

        setColorBlackOrWhite(['dropdownMenuburger', 'dropdownMenuburger2', 'dropdownMenuword',
                              'dropdownMenuhelp', 'dropdownMenustatistic', 'setting', 'languageSelect',
                              'fieldset-legend-old', 'question_old', 'fieldset-legend',
                              'gamburger-menu-open', 'clicked_element'
                            ], setColorBlackOrWhiteProp);
                            
        backgraundForLanguageSeect(['selectUa', 'selectRu', 'selectPl', 'selectEn'], backgraundForLanguageSeectProp);
        
        if (setColorBlackOrWhiteProp === 'white') 
            setColorBlackOrWhiteProp = 'black';
        else 
            setColorBlackOrWhiteProp = 'white'
        setColorBlackOrWhite(['selectUa', 'selectRu', 'selectPl', 'selectEn'], setColorBlackOrWhiteProp);
    }
}

setColorMenu.help = `
Цель функции в зависимости от фоновой картинки подобрать цвет шрифта главного меню.
Цвет зашит жёстко и учитывает преобладающую палитру на фоновом изображении.
На данный момент 49 разных картинок для фона, если добавлять новые то к их палитре
нужно будет подобрать контрастный цвет для шрифта и записать в условие в этой функции.
Дополнительно:
setBorderRadiusForWorkingField() - меняет бордер-радиус, цвет фона и шрифта
randomeFontSize() - ставит случайный размер шрифта
randomeLeftRightButton() - небольшое смещение картинок логирования и динамика
setPaddingForSimple() - устанавливает дополнительный Padding на первом тесте, уначе текст выходит за пределы контейнера
`;


