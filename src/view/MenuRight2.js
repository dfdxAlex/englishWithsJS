// класс создает меню с тестами обучения слов
import { MenuRight } from './MenuRight.js';

export class MenuRight2 extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        
        this.nameMenu = 'Units24-';
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'burger2';
        this.numberMenu = 6;
    }
}
