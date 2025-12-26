  // Функция возвращает значение Legend, которое попадает в название текущего теста

import { LanguageController } from '../../controllers/LanguageController.js';
import '../styles/cardStartAndLegend.scss';

export function cardStartAndLegend(nameLeson)
  {
    const transL = new LanguageController();

    let rezult = `${nameLeson}`;

    if (!nameLeson)
        rezult = `${transL.translate('Вопрос с вариантами ответа')}`;

    return `
        <h5 class="card-title" id="fieldset-legend">
          ${rezult}
        </h5>
        <div class="dinamic-menu" id="dinamic-menu">
        </div>
    `;

  }

cardStartAndLegend.help = `
Функция возвращает значение Legend, которое попадает в название текущего теста
`;