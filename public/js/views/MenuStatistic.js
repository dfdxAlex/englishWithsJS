// класс создает меню со статистикой

class MenuStatictic extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        this.nameMenu = FactoryRegistr.getObject("LanguageController").translate('Статистика');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'statistic';
        this.numberMenu = 4;
    }
}
