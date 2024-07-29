// класс показывает правое меню

class MenuRight
{
    constructor()
    {
        this.unit = new LanguageController();
        
    }
    menu()
    {
        this.unit1 = this.unit.translate('To Be, краткая форма');
        this.unit2 = this.unit.translate('To Be, вопрос/ответ');
        this.unit3 = this.unit.translate('To Be, ответь на вопрос');
        return `<button class="btn" type="button" id="level1">${this.unit1}</button><br>`+
               `<button class="btn" type="button" id="level2">${this.unit2}</button><br>`+
               `<button class="btn" type="button" id="level3">${this.unit2}</button><br>`+
               '<button class="btn" type="button" id="level4">Unit 4</button><br>'+
               '<button class="btn" type="button" id="level5">Unit 5</button><br>';
    }
}
