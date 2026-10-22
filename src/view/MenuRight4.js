// класс создает меню с тестами обучения слов
import { MenuRight } from './MenuRight.js';

export class MenuRight4 extends MenuRight
{
    constructor(nameButtons)
    {
        super(nameButtons);
        
        this.nameMenu = 'Text';
        // Это свойство содержит место, куда нужно припарковать 
        // меню. Вводится id того елемента, который примет меню.
        // используется как внутрри класса, так и за его пределами.
        this.seedMenu = 'text';
        this.numberMenu = 8;
    }
}

// новое меню, проверить и допилить