import './styles/thoury.scss';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { getHeaderWindow } from '../models/forThoury/getHeaderWindow.js';
import { returnInfoUnit22RU, 
         returnLevel42,
         returnLevel40,
         returnLevel39,
         returnLevel38,
         returnLevel37,
         returnLevel20,
         returnLevel36,
         returnLevel35,
         returnLevel34, 
         returnLevel33, 
         returnLevel32,
         returnLevel31,
         returnLevel23,
         returnLevel21,
         returnLevel19,
         returnLevel18,
         returnLevel17,
         returnLevel16,
         returnLevel15,
         returnLevel14,
         returnLevel10,
         returnLevel11,
         returnLevel13 } from './forThoury/indexForThoury.js';

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
      switch (this.level) {
      case 43: 
        return this.translate.translate(returnInfoUnit22RU());
      case 42: 
        return this.translate.translate(returnLevel42());
      case 40:
        return this.translate.translate(returnLevel40());
      case 39: 
        return this.translate.translate(returnLevel39());
      case 38:
        return this.translate.translate(returnLevel38());
      case 37:
        return this.translate.translate(returnLevel37());
      case 20: 
        return this.translate.translate(returnLevel20());
      case 36:
        return this.translate.translate(returnLevel36());
      case 35:
        return this.translate.translate(returnLevel35());
      case 34:
        return this.translate.translate(returnLevel34());
      case 33:
        return this.translate.translate(returnLevel33());
      case 32:
        return this.translate.translate(returnLevel32());
      case 31:
        return this.translate.translate(returnLevel31());
      case 23:
        return this.translate.translate(returnLevel23());
      case 21:
        return this.translate.translate(returnLevel21());
      case 19: 
        return this.translate.translate(returnLevel19());
      case 18:
        return this.translate.translate(returnLevel18());
      case 17:
        return this.translate.translate(returnLevel17());
      case 16:
        return this.translate.translate(returnLevel16());
      case 15: 
        return this.translate.translate(returnLevel15());
      case 14:
        return this.translate.translate(returnLevel14());
      case 9:
      case 10: 
        return this.translate.translate(returnLevel10());
      case 11:
        return this.translate.translate(returnLevel11());
      case 13:
        return this.translate.translate(returnLevel13());
      default:
        return this.translate.translate('Просто учим слова');
     }
    }
}

function cardThoury(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
}
