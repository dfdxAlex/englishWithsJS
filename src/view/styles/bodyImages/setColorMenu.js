// Функция меняет цвет текста в зависимости от картинки.
// Данные о картинке берутся из объекта DataSet

import { DataSet } from '../../../services/data/DataSet.js';
import { setBorderRadiusForWorkingField } from '../../../services/setColorMenu/setBorderRadiusForWorkingField.js';
import { getRandomNumber } from '../../../services/setColorMenu/getRandomNumber.js';
import { returnBorderRadius } from '../../../services/setColorMenu/returnBorderRadius.js';


export function setColorMenu()
{
    // C Цветом текста и фона работаем для менюшек
    const searchMenu = document.getElementById('dropdownMenuburger');
    const searchMenuTwo = document.getElementById('dropdownMenuburger2');
    const searchMenuWord = document.getElementById('dropdownMenuword');
    const searchMenuHelp = document.getElementById('dropdownMenuhelp');
    const searchMenuStatistic = document.getElementById('dropdownMenustatistic');
    const searchMenuSetting = document.getElementById('setting');
    const buttonLangSelected = document.getElementById('languageSelect');
    const selectUa = document.getElementById('selectUa');
    const selectRu = document.getElementById('selectRu');
    const selectPl = document.getElementById('selectPl');
    const selectEn = document.getElementById('selectEn');
    const fieldsetLegendOld = document.getElementById('fieldset-legend-old');
    const questionOld = document.getElementById('question_old');
    const clickedElement = document.getElementById('clicked_element');
    const searchError = document.getElementById('search_error');
    const log = document.getElementById('log');
    const sound = document.getElementById('sound');
    const gamburgerMenuOpen = document.getElementById('gamburger-menu-open');
    const fieldsetLegend = document.getElementById('fieldset-legend');

    // Функция находит нужные элементы, если они есть, и изменяет для них border-radius
    setBorderRadiusForWorkingField(['question', 'translate', 'option1',
        'option2', 'option3', 'option4',
    ]);

    // случайный размер шрифта
    const randomeNumber = getRandomNumber(10,20);
    const fontSize = `${20/randomeNumber}em`;
    questionOld.style.fontSize = fontSize;
    clickedElement.style.fontSize = fontSize;
    log.style.fontSize = `${20/randomeNumber*2}em`;
    sound.style.fontSize = log.style.fontSize;

    // случайный радиус
    questionOld.style.borderRadius = returnBorderRadius(10, 150);  
    clickedElement.style.borderRadius = returnBorderRadius(10, 150); 
    searchError.style.borderRadius = returnBorderRadius(10, 150); 
    log.style.borderRadius = returnBorderRadius(10, 150); 

    // смещение картинок логирования и динамика
    log.style.top = `${30/randomeNumber*0.2}em`;
    log.style.right = `${30/randomeNumber*0.2}em`;
    sound.style.bottom = `${50/randomeNumber*0.2}em`;
    sound.style.right = `${50/randomeNumber*0.2}em`;
 

    if (searchMenu) {
        searchMenu.style.background = "rgba(0,0,255,0.01)";
        if (DataSet.numberBackground>16 && DataSet.numberBackground < 21
            || (DataSet.numberBackground>24 && DataSet.numberBackground < 49)
        ) {
            searchMenu.style.color = "black";
            searchMenuTwo.style.color = "black";
            searchMenuWord.style.color = "black";
            searchMenuHelp.style.color = "black";
            searchMenuStatistic.style.color = "black";
            searchMenuSetting.style.color = "black";
            buttonLangSelected.style.color = "black";
            selectUa.style.background = "white";
            selectRu.style.background = "white";
            selectPl.style.background = "white";
            selectEn.style.background = "white";
            fieldsetLegendOld.style.color = "black";
            questionOld.style.color = "black";
            if (fieldsetLegend)
                fieldsetLegend.style.color = "black";
            if (gamburgerMenuOpen)
                gamburgerMenuOpen.style.color = "black";
            clickedElement.style.color = "black";
        }
        else {
            searchMenu.style.color = "white";
            searchMenuTwo.style.color = "white";
            searchMenuWord.style.color = "white";
            searchMenuHelp.style.color = "white";
            searchMenuStatistic.style.color = "white";
            searchMenuSetting.style.color = "white";
            buttonLangSelected.style.color = "white";
            selectUa.style.background = "black";
            selectRu.style.background = "black";
            selectPl.style.background = "black";
            selectEn.style.background = "black";
            fieldsetLegendOld.style.color = "white";
            questionOld.style.color = "white";
            clickedElement.style.color = "white";
            if (fieldsetLegend)
                fieldsetLegend.style.color = "white";
            if (gamburgerMenuOpen)
                gamburgerMenuOpen.style.color = "white";
        }
    }
}




