// Класс управляет работой правого меню

import { MenuRight } from '../view/MenuRight.js';
import { MenuRight2 } from '../view/MenuRight2.js';
import { MenuLearnWord } from '../view/MenuLearnWord.js';
import { MenuHelp } from '../view/MenuHelp.js';
import { MenuStatictic } from '../view/MenuStatistic.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
import { handleLevelX } from './handleLevelX.js';
import { fixModalFocus } from '../services/all/fixModalFocus.js';
import { DataOk } from '../services/data/DataOk.js';

export class MenuController
{
    constructor ()
    {
        this.levelDataModel = new LevelDataModel(DataOk.level.int);
    }

    init() 
    {
        // levelDataModel.getArrayNameButton() - возвращает массив с названиями кнопок
        // menu.getSeedForMenu() - выбирает нужный контейнер для кнопок

        // подпункт units 1-23
        const menu = new MenuRight(this.levelDataModel.getArrayNameButton());

        // подпункт units 24-
        const menu5 = new MenuRight2(this.levelDataModel.getArrayNameButton());

        // создать объект второго правого меню
        const menu2 = new MenuLearnWord(this.levelDataModel.getArrayNameButton());

        // создать объект третьего правого меню
        const menu3 = new MenuHelp(this.levelDataModel.getArrayNameButton());

        // создать объект четвертого правого меню
        const menu4 = new MenuStatictic(this.levelDataModel.getArrayNameButton());

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuRight
        const point = menu.getSeedForMenu();

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point2 = menu2.getSeedForMenu();

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point3 = menu3.getSeedForMenu();

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point4 = menu4.getSeedForMenu();

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point5 = menu5.getSeedForMenu();
        
        // поместить меню на выбранное место.
        point.innerHTML = menu.menuDropdown2();

        point2.innerHTML = menu2.menuDropdown2();
        point3.innerHTML = menu3.menuDropdown2();
        point4.innerHTML = menu4.menuDropdown2();
        point5.innerHTML = menu5.menuDropdown2();

        const unit = [];
        for (let i=1; i<=this.levelDataModel.getTic(); i++) {
            let numberMenu = LevelDataModel.mapNameMenu(i - 1);
            if (numberMenu == 4
              || numberMenu == 3
                || numberMenu == 5) {
                    continue;
            } 
            unit[i] = document.getElementById('level'+i);
            unit[i].onclick = handleLevelX.bind(null, new LevelDataModel(i));
        }
        
        // Функция находит все элементы с атрибутом data-bs-dismiss="modal" во всех модальных окнах
        // и навешивает на них обработчик, который убирает фокус с активного элемента после закрытия модалки
        fixModalFocus();
    }
}






