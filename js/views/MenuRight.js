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
        
        rez+='<button class="btn btn-light" id="btnGroupDrop1" type="button" data-bs-toggle="dropdown" aria-expanded="false">';
        rez+=this.nameMenu;
        rez+='</button>';

        rez+='<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">';
        
        rez+= this.nameButtons.map((element, index) => {
            // статический метод mapNameMenu(index) содержит инфу
            // о том, конкретный перебираемый пункт в каким меню 
            // должен находиться
            let numberMenuLocal = LevelDataModel.mapNameMenu(index);
            if (numberMenuLocal !== this.numberMenu) return;
            return `<li><a class="dropdown-item" id="level${index+1}">${element}</a></li>`;
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

