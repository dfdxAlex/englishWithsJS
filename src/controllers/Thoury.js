import './styles/thoury.scss';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { getHeaderWindow } from '../models/forThoury/getHeaderWindow.js';
import { getBodyThoury } from '../models/forThoury/getBodyThoury.js';

export class Thoury
{

static handleThoury(level)
{
    this.level = level;
    this.translate = FactoryRegistr.getObject("LanguageController");

    this.strLocal = `
    <div class="card shadow-lg rounded-3" style="width: 80vw;  position: relative;">
     <button type="button" class="btn-close" aria-label="Close" style="position: absolute; top: 10px; right: 10px;"  onclick="document.getElementById('exercise').style.display='none'"></button>
      <div class="card-body">
        <h5 class="card-title">${this.headerThoury()}</h5>
        <p class="card-text">${this.bodyThoury()}</p>
      </div>
    </div>
    `;
    document.getElementById('level30').onclick = cardThoury.bind(null, this);
    }

    // Функция помещает информацию в заголовок раздела Теория
    static addStyleForH1 = '<h1 class="add-style-for-H1">';
    static headerThoury()
    {
        return getHeaderWindow(this);
    }
    // Функция помещает информацию в тело раздела Теория
    static bodyThoury()
    {
        return getBodyThoury(this);
    }
}

function cardThoury(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
}
