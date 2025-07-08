// класс показывает правое меню

class MenuRight
{
    constructor(nameButtons)
    {
        // Массив со всеми пунктами меню
        this.nameButtons = nameButtons;

        this.nameMenu = FactoryRegistr.getObject("LanguageController").translate('Выбрать тест.');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'burger';
        this.numberMenu = 1;
    }
    
    menuDropdown2()
    {
        let rez = '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">';
        rez+='<div class="btn-group" role="group">';
        
        // Here the main menu buttons are formed, Select test, Edit words...
        rez+='<button class="btn btn-light" id="btnGroupDrop1" type="button" data-bs-toggle="dropdown" aria-expanded="false">';
        rez+=this.nameMenu;
        rez+='</button>';

        rez+='<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">';
        
        // menu-specific parity counters
        let countItemOne=0;
        let countItemTwo=0;

        rez+= this.nameButtons.map((element, index) => {
            // The method returns the location of a specific item. LevelDataModel.mapNameMenu()
            let numberMenuLocal = LevelDataModel.mapNameMenu(index);
            if (numberMenuLocal !== this.numberMenu) {
                return;
            }


            // Add one of the classes to a specific test item.
            let addClass = "";
            let id = index+1;

            if (numberMenuLocal === 1) {
                countItemOne++;
                if (countItemOne % 2 == 1) 
                {
                    addClass = "style-for-item-one";
                } else {
                    addClass = "style-for-item-two";
                }
            }
            if (numberMenuLocal === 2) {
                countItemTwo++;
                if (countItemTwo % 2 == 1) 
                {
                    addClass = "style-for-item-one";
                } else {
                    addClass = "style-for-item-two";
                }
            }     

            addClass = " style-for-item-start " + addClass;

            return `<li><a class="dropdown-item ${addClass}" id="level${id}">${element}</a></li>`;
        }).join('');

        rez+='</ul>';
        rez+='</div></div>';

        return rez;
    }

    getSeedForMenu()
    {
        return document.getElementById(this.seedMenu);
    }
}

