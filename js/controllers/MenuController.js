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
        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuRight
        const point = menu.getSeedForMenu();
        // найти точку для публикации правого меню
        // само место парковки задаётся внутри класса MenuLearnWord
        const point2 = menu2.getSeedForMenu();
        
        // поместить меню на выбранное место.
        point.innerHTML = menu.menuDropdown2();
        point2.innerHTML = menu2.menuDropdown2();

        let unit = [];
        for (let i=1; i<=this.levelDataModel.getTic(); i++) {
            unit[i] = document.getElementById('level'+i);
            unit[i].addEventListener('click', () => {handleLevelX(new LevelDataModel(i))});
        }

    }
}
