import './styles/thoury.scss';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { getHeaderWindow } from '../models/forThoury/getHeaderWindow.js';
import { getBodyThoury } from '../models/forThoury/getBodyThoury.js';
import { getWorkPlace } from '../view/thoury/getWorkPlace.js';

export class Thoury
{
    static translate = FactoryRegistr.getObject("LanguageController");

    static handleThoury(level)
    {
        this.level = level;    

        this.strLocal = getWorkPlace(this.headerThoury(), this.bodyThoury());    

        document.getElementById('level30').onclick = cardThoury.bind(null, this);
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

function cardThoury(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
    document.getElementById('button-for-get-work-place').addEventListener('click', ()=>{
        document.getElementById('exercise').style.display='none';
    });
}
