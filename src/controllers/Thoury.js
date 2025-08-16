import './styles/thoury.scss';
import { getHeaderWindow } from '../models/forThoury/getHeaderWindow.js';
import { getBodyThoury } from '../models/forThoury/getBodyThoury.js';
import { getWorkPlace } from '../view/thoury/getWorkPlace.js';
import { renderThoury, getTranslate } from './forThoury/renderThoury.js';
import { DataSet } from '../services/data/DataSet.js';

export class Thoury
{
    static translate = getTranslate();
    static idForButtonClosed = 'button-for-get-work-place';

    // метод делает свойство класса Level, для доступа к нему из других методов имеющих контекст этого класса
    // Создает strLocal - разметку помощи, тоже как свойство класса для тех-же целей 
    // На кнопку level30 помещает обработчика renderThoury()
    static handleThoury(level)
    {
        this.level = level;    
        const thisS = this;
        // this.strLocal = getWorkPlace(this.headerThoury(), this.bodyThoury(), this.idForButtonClosed); 
        this.strLocal = getWorkPlace('', this.bodyThoury(), this.idForButtonClosed); 
        if (!DataSet.renderThoury) {
            document.getElementById('level30').addEventListener('click', function() {
                    renderThoury.call(thisS);
            });
            DataSet.renderThoury = true;
        }
    }

    // Функция помещает информацию в заголовок раздела Теория
    // Раздел предоставляющий теоретическую информацию.
    static headerThoury()
    {
        // console.log(getHeaderWindow(this));
        return getHeaderWindow(this);
    }
    // Функция помещает информацию в тело раздела Теория
    // Раздел предоставляющий теоретическую информацию.
    static bodyThoury()
    {
        return getBodyThoury(this);
    }
}

