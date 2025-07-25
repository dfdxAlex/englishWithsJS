class MenuHelp extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        this.nameMenu = FactoryRegistr.getObject("LanguageController").translate('Помощь');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'help';
        this.numberMenu = 3;
    }
}
