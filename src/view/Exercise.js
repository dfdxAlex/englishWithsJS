// Класс помещает вопрос для урока

import { getWorkPlace } from '../view/thoury/getWorkPlace.js';
import { renderThoury } from '../controllers/forThoury/renderThoury.js';

export class Exercise
{
    static idForButtonClosed = 'help-for-test';

    init(str)
    {
        this.strLocal = getWorkPlace(str, this.idForButtonClosed);
        document.getElementById('level29').onclick = renderThoury.bind(this);
    }
}

