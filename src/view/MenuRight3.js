// класс создает меню с тестами обучения слов
import { MenuRight } from './MenuRight.js';

export class MenuRight3 extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        
        this.nameMenu = 'Units41-';
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'burger3';
        this.numberMenu = 7;
    }
}

// новое меню, проверить и допилить