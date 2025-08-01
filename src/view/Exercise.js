// Класс помещает вопрос для урока

import { getWorkPlace } from '../view/thoury/getWorkPlace.js';
import { renderThoury, getTranslate } from '../controllers/forThoury/renderThoury.js';

export class Exercise
{
    static idForButtonClosed = 'help-for-test';

    init(str)
    {
        const transL = getTranslate();
        this.cartTitle = transL.translate('Задание для теста');
        this.strLocal = getWorkPlace(this.cartTitle, str, this.idForButtonClosed);
        document.getElementById('level29').onclick = renderThoury.bind(this);
    }
}

