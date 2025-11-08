import indexForThoury from '../controllers/forThoury/indexForThoury.js';
import { Help } from './Help.js';
import './styles/nav.scss';
import { langView } from './naw/langView.js';

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

