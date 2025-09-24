// Функция меняет цвет текста в зависимости от картинки.
// Данные о картинке берутся из объекта DataSet

import { DataSet } from '../../../services/data/DataSet.js';

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


    if (searchMenu) {
        searchMenu.style.background = "rgba(0,0,255,0.01)";
        if (DataSet.numberBackground>16 && DataSet.numberBackground < 21) {
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
        }
    }
}