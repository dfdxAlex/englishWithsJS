import indexForThoury from '../controllers/forThoury/indexForThoury.js';
import { Help } from './Help.js';
import './styles/nav.scss';

export function nav()
{
    setTimeout(() => {
      document.getElementById('button-help-video').addEventListener('click', (event) => { 
        event.stopPropagation();
        Help.viewhandleHelpToTranslate(indexForThoury.helpForHomeMenuRU(),'vkQYDmiTlmQ');
      });
      
    }, 0);

    document.getElementById('nav').innerHTML = `
     <nav class="navbar navbar-expand-sm">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"
              id="gamburger-menu-open">&#9776;</span>
      </button>
      <div class="collapse navbar-collapse nav-collaps-my-style" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <div class="nav-link" id="burger"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="burger2"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="word"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="help"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="statistic">Statistic</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="setting">Setting</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="button_lang_selected">${langView()}</div>
          </li>
          <li id="helpVideo">
            <button id="button-help-video" type="button" class="button-help-nav">&#10067;</button>
          </li>
        </ul>
      </div>
  </nav>`;
}

const navbar = document.getElementById('navbarNav');

if (navbar)
    navbar.addEventListener('show.bs.collapse', () => {
      console.log('📂 Меню открывается');
    });


import { LanguageSelectorView } from '../view/languageSelectorView/LanguageSelectorView.js';
import { LanguageController } from '../controllers/LanguageController.js';
function langView()
{
          // --создать объект меню выбора языка
          const langSelector = new LanguageSelectorView();

          // Создать объект переводчика
          const translate = new LanguageController();


  
          // Вернуть разметку для менюшки выбора языка
          // langSelector.init - вернуть разметку менюшки с текущим значением выбранного языка
          // translate.langStr - содержит значение выбранного языка.
          return langSelector.init(translate.langStr);


}
