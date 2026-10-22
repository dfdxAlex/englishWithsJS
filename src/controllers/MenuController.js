// Класс управляет работой правого меню

// Делегировать все события на id = "nav"

// класс со статическими методами, выгоднее подключить здесь, без передачи инъекциями
import { LevelDataModel } from '../models/LevelDataModel.js';

import { MenuRight } from '../view/MenuRight.js';
import { MenuRight2 } from '../view/MenuRight2.js';
import { MenuRight3 } from '../view/MenuRight3.js';
import { MenuRight4 } from '../view/MenuRight4.js';
import { MenuLearnWord } from '../view/MenuLearnWord.js';
import { MenuHelp } from '../view/MenuHelp.js';
import { MenuStatictic } from '../view/MenuStatistic.js';

import { handleLevelX } from './handleLevelX.js';
import { fixModalFocus } from '../services/all/fixModalFocus.js';
// import { DataOk } from '../services/data/DataOk.js';

export class MenuController
{
    constructor ({level})
    {
        // this.levelDataModel = new LevelDataModel(DataOk.level.int);
        this.levelDataModel = new LevelDataModel(level);
    }

    init() 
    {
        // levelDataModel.getArrayNameButton() - возвращает массив с названиями кнопок
        // menu.getSeedForMenu() - выбирает нужный контейнер для кнопок

        // подпункт units 1-23
        const menu = new MenuRight(this.levelDataModel.getArrayNameButton());

        // подпункт units 24-40
        const menu5 = new MenuRight2(this.levelDataModel.getArrayNameButton());

        // подпункт units 40-
        const menu6 = new MenuRight3(this.levelDataModel.getArrayNameButton());

        // подпункт Тексты
        const menu7 = new MenuRight4(this.levelDataModel.getArrayNameButton());

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
        // console.log(point5);

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point6 = menu6.getSeedForMenu();

        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point7 = menu7.getSeedForMenu();
        
        // поместить меню на выбранное место.
        point.innerHTML = menu.menuDropdown2();

        point2.innerHTML = menu2.menuDropdown2();
        point3.innerHTML = menu3.menuDropdown2();
        point4.innerHTML = menu4.menuDropdown2();
        point5.innerHTML = menu5.menuDropdown2();
        point6.innerHTML = menu6.menuDropdown2();
        point7.innerHTML = menu7.menuDropdown2();

        
        const unit = [];
        /////////////////исключить два подменю, где не нужны события
        // при добавлении новых тестовых уровней СЮДА НЕ ЛЕЗЕМ
        for (let i=1; i<=this.levelDataModel.getTic(); i++) {
            let numberMenu = LevelDataModel.mapNameMenu(i - 1);
            if (numberMenu == 3
              || numberMenu == 4
                // || numberMenu == 3
                //   || numberMenu == 4
                    // || numberMenu == 4
                ) {
                    continue;
            } 
        ////////////////////////////////////////////////////////////
            unit[i] = document.getElementById('level'+i);
            unit[i].onclick = handleLevelX.bind(null, new LevelDataModel(i));
        }
        
        // Функция находит все элементы с атрибутом data-bs-dismiss="modal" во всех модальных окнах
        // и навешивает на них обработчик, который убирает фокус с активного элемента после закрытия модалки
        fixModalFocus();
    }
}






