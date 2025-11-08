
import { LanguageSelectorView } from '../../view/languageSelectorView/LanguageSelectorView.js';
import { LanguageController } from '../../controllers/LanguageController.js';

export function langView()
{
          // --создать объект меню выбора языка
          const langSelector = new LanguageSelectorView();

          // Создать объект переводчика
          const translate = new LanguageController();
  
          // Вернуть разметку для менюшки выбора языка
          return langSelector.init(translate.langStr);
}
