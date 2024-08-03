// класс показывает правое меню

class MenuRight
{
    constructor(nameButtons)
    {
        this.unit = new LanguageController();
        this.nameButtons = nameButtons;
    }
    
    menu()
    {
        const rez = this.nameButtons.map((element, index) => {
            return `<button class="btn btn-info" type="button" id="level${index+1}">${element}</button><br></br>`;
        }).join('');

       return rez;
    }
}
