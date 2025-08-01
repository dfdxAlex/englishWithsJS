import './styles/thoury.scss';
import { getHeaderWindow } from '../models/forThoury/getHeaderWindow.js';
import { getBodyThoury } from '../models/forThoury/getBodyThoury.js';
import { getWorkPlace } from '../view/thoury/getWorkPlace.js';
import { renderThoury, getTranslate } from './forThoury/renderThoury.js';

export class Thoury
{
    static translate = getTranslate();
    static idForButtonClosed = 'button-for-get-work-place';

    static handleThoury(level)
    {
        this.level = level;    
        this.strLocal = getWorkPlace(this.headerThoury(), this.bodyThoury(), this.idForButtonClosed);    
        document.getElementById('level30').onclick = renderThoury.bind(this);
    }

    // Функция помещает информацию в заголовок раздела Теория
    // Раздел предоставляющий теоретическую информацию.
    static headerThoury()
    {
        return getHeaderWindow(this);
    }
    // Функция помещает информацию в тело раздела Теория
    // Раздел предоставляющий теоретическую информацию.
    static bodyThoury()
    {
        return getBodyThoury(this);
    }
}

