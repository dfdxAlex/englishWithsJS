// класс создает меню со статистикой
import { MenuRight } from './MenuRight.js';

export class MenuStatictic extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        // const translate = new LanguageController();
        this.nameMenu = this.translate.translate('Статистика');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'statistic';
        this.numberMenu = 4;
    }
}
