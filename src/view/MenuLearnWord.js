// класс создает меню с тестами обучения слов
import { MenuRight } from './MenuRight.js';

export class MenuLearnWord extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        
        this.nameMenu = this.translate.translate('Учить слова');
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'word';
        this.numberMenu = 2;
    }
}
