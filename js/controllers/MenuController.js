// Класс управляет работой правого меню

class MenuController
{
    constructor ()
    {
        this.levelDataModel = new LevelDataModel();
    }

    init() 
    {
        // создать объект правого меню
        const menu = new MenuRight(this.levelDataModel.getArrayNameButton());
        // создать объект второго правого меню
        const menu2 = new MenuLearnWord(this.levelDataModel.getArrayNameButton());
        // создать объект второго правого меню
        const menu3 = new MenuHelp(this.levelDataModel.getArrayNameButton());
        // создать объект третьего правого меню
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
        
        // поместить меню на выбранное место.
        point.innerHTML = menu.menuDropdown2();
        point2.innerHTML = menu2.menuDropdown2();
        point3.innerHTML = menu3.menuDropdown2();
        point4.innerHTML = menu4.menuDropdown2();

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
    }
}
