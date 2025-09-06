import { helpForHomeMenuRU } from './help/helpForHomeMenuRU.js';
import { Help } from './Help.js';
import './styles/nav.scss';

export function nav()
{
    setTimeout(() => {
      document.getElementById('button-help-video').addEventListener('click', (event) => { 
        event.stopPropagation();
        Help.viewhandleHelpToTranslate(helpForHomeMenuRU(),'vkQYDmiTlmQ');
      });
      
    }, 0);

    document.getElementById('nav').innerHTML = `
     <nav class="navbar navbar-expand-sm navbar-light bg-light" id="first-teg-nav-for-nav">
    <div class="container-fluid" id="nav-first-div">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li id="helpVideo">
            <button id="button-help-video" type="button" class="fs-6 text-primary mb-3 button-help">&#10067;</button>
          </li>

          <!--Потестировать первый вложенный пункт меню-->
          <li class="nav-item dropdown">
              <button class="dropbtn bg-light">Units</button>
              <div class="dropdown-content">
                <div class="nav-link" id="burger"></div>
              </div>
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
            <div class="nav-link" id="button_lang_selected"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
}
