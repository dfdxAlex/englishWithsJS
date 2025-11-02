import { LanguageController } from '../../controllers/LanguageController.js';


export function setButtonTranslate()
{
        const transL = new LanguageController();

        // Начальный текст для кнопки перевода вопроса
        return `<div class='row mb-2'>
                  <div class='col-12'>
                    <button 
                      class="working-field-button-translate"
                      type="button" 
                      id="translate">${transL.translate('Перевести вопрос')}
                    </button>
                  </div>
                </div>`;
}

setButtonTranslate.help = `
Функция возвращает разметку для кнопки Перевести вопрос
`;