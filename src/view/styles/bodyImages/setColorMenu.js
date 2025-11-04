// Функция меняет цвет текста в зависимости от картинки.
// Данные о картинке берутся из объекта DataSet

import { DataSet } from '../../../services/data/DataSet.js';
import { setBorderRadiusForWorkingField } from '../../../services/setColorMenu/setBorderRadiusForWorkingField.js';
import { randomeFontSize } from './setColorMenu/randomeFontSize.js';
import { randomeRadius } from './setColorMenu/randomeRadius.js';
import { randomeLeftRightButton } from './setColorMenu/randomeLeftRightButton.js';
import { setColorBlackOrWhite } from './setColorMenu/setColorBlackOrWhite.js';
import { backgraundForLanguageSeect } from './setColorMenu/backgraundForLanguageSeect.js';


export function setColorMenu()
{
    // C Цветом текста и фона работаем для менюшек
    const searchMenu = document.getElementById('dropdownMenuburger');
    const languageSelect = document.getElementById('languageSelect');
    const searchMenuTwo = document.getElementById('dropdownMenuburger2');
    const searchMenuWord = document.getElementById('dropdownMenuword');
    const searchMenuHelp = document.getElementById('dropdownMenuhelp');
    const searchMenuStatistic = document.getElementById('dropdownMenustatistic');
    const searchMenuSetting = document.getElementById('setting');
    const buttonLangSelected = document.getElementById('languageSelect');
    const fieldsetLegendOld = document.getElementById('fieldset-legend-old');
    const questionOld = document.getElementById('question_old');
    const clickedElement = document.getElementById('clicked_element');
    const gamburgerMenuOpen = document.getElementById('gamburger-menu-open');
    const fieldsetLegend = document.getElementById('fieldset-legend');
    

    // Функция находит нужные элементы, если они есть, и изменяет для них border-radius
    setBorderRadiusForWorkingField(['question', 'translate', 'option1',
        'option2', 'option3', 'option4',
    ]);

    // случайный размер шрифта
    randomeFontSize(['question_old', 'clicked_element', 'log', 
                     'sound', 'search_error', 'fieldset-legend-old']);

    // случайный радиус
    randomeRadius(['question_old', 'clicked_element', 'log', 'search_error']);

    // смещение картинок логирования и динамика
    randomeLeftRightButton(['log', 'sound']);

 

    if (searchMenu) {
        // searchMenu.style.background = "rgba(0,0,255,0.01)";
        if (DataSet.numberBackground>16 && DataSet.numberBackground < 21
            || (DataSet.numberBackground>24 && DataSet.numberBackground < 49)
        ) {
            // languageSelect.style.background = 'black';
            setColorBlackOrWhite(['dropdownMenuburger', 'dropdownMenuburger2', 'dropdownMenuword',
                                  'dropdownMenuhelp', 'dropdownMenustatistic', 'setting', 'languageSelect',
                                  'fieldset-legend-old', 'question_old', 'fieldset-legend',
                                  'gamburger-menu-open', 'clicked_element'
                                ], 'black');
            setColorBlackOrWhite(['selectUa', 'selectRu', 'selectPl', 'selectEn'], 'white');
            backgraundForLanguageSeect(['selectUa', 'selectRu', 'selectPl', 'selectEn'], 'black');
        }
        else {
            // languageSelect.style.background = 'white';
            backgraundForLanguageSeect(['selectUa', 'selectRu', 'selectPl', 'selectEn'], 'white');
            setColorBlackOrWhite(['dropdownMenuburger', 'dropdownMenuburger2', 'dropdownMenuword',
                                  'dropdownMenuhelp', 'dropdownMenustatistic', 'setting', 'languageSelect',
                                  'fieldset-legend-old', 'question_old', 'fieldset-legend',
                                  'gamburger-menu-open', 'clicked_element'
                                ], 'white');
            // searchMenu.style.color = "white";
            // searchMenuTwo.style.color = "white";
            // searchMenuWord.style.color = "white";
            // searchMenuHelp.style.color = "white";
            // searchMenuStatistic.style.color = "white";
            // searchMenuSetting.style.color = "white";
            // buttonLangSelected.style.color = "white";
            setColorBlackOrWhite(['selectUa', 'selectRu', 'selectPl', 'selectEn'], 'black');
            // fieldsetLegendOld.style.color = "white";
            // questionOld.style.color = "white";
            // clickedElement.style.color = "white";
            // if (fieldsetLegend)
            //     fieldsetLegend.style.color = "white";
            // if (gamburgerMenuOpen)
            //     gamburgerMenuOpen.style.color = "white";
        }
    }
}




