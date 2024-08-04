// класс показывает правое меню

class MenuRight
{
    constructor(nameButtons)
    {
        this.unit = new LanguageController();
        this.nameButtons = nameButtons;
        this.nameMenu = this.unit.translate('Выбрать тест.');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'burger';
    }
    
    menu()
    {
        const rez = this.nameButtons.map((element, index) => {
            return `<button class="btn btn-info" type="button" id="level${index+1}">${element}</button><br></br>`;
        }).join('');

       return rez;
    }

    menuDropdown()
    {
        let rez = '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">';
        rez+='<div class="btn-group" role="group">';
        rez+='<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">';
        rez+=this.nameMenu;
        rez+='</button>';
        rez+='<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">';
        
        rez+= this.nameButtons.map((element, index) => {
            return `<li><a class="dropdown-item" id="level${index+1}">${element}</a></li>`;
        }).join('');

        rez+='</ul>';
        rez+='</div></div>';

        console.log(rez);
        return rez;
    }

    getSeedForMenu()
    {
        return document.getElementById(this.seedMenu);
    }
}

