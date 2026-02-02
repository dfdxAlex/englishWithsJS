import { getBodyThoury } from '../models/forThoury/getBodyThoury.js';
import { getWorkPlace } from '../view/thoury/getWorkPlace.js';
import { renderThoury} from './forThoury/renderThoury.js';
import { LanguageController } from './LanguageController.js';
import { setEventAsync } from '../services/set/setEventAsynс.js';

export class Thoury
{
    static translate = new LanguageController();
    static idForButtonClosed = 'button-for-get-work-place';

    // метод делает свойство класса Level, для доступа к нему из других методов имеющих контекст этого класса
    // Создает strLocal - разметку помощи, тоже как свойство класса для тех-же целей 
    // На кнопку level30 помещает обработчика renderThoury()
    static handleThoury(level)
    {
        this.level = level;    
        this.strLocal = getWorkPlace(this.bodyThoury(), this.idForButtonClosed); 

        setEventAsync(() => {renderThoury.call(this);},'click','level30');
        return this;
    }

    // Функция помещает информацию в тело раздела Теория
    // Раздел предоставляющий теоретическую информацию.
    static bodyThoury()
    {
        return getBodyThoury(this);
    }
}

