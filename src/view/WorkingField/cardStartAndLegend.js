  // Функция возвращает значение Legend, которое попадает в название текущего теста

import { LanguageController } from '../../controllers/LanguageController.js';

export function cardStartAndLegend(nameLeson)
  {
    const transL = new LanguageController();

    if (!nameLeson)
        return `<h5 class="card-title" id="fieldset-legend">${transL.translate('Вопрос с вариантами ответа')}</h5>
                <div id="dinamic-menu"></div>`;
    if (nameLeson)
        return `<h5 class="card-title" id="fieldset-legend">${nameLeson}</h5>
                <div id="dinamic-menu"></div>`;
  }

cardStartAndLegend.help = `
Функция возвращает значение Legend, которое попадает в название текущего теста
`;