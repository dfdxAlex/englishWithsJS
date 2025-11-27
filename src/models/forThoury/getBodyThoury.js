
import indexForThoury from '../../controllers/forThoury/indexForThoury.js';

import { returnBodyHelpForLanguage } from '../../models/thouryNew/forThouryNew/returnBodyHelpForLanguage.js';

export function getBodyThoury(thisS)
{
    switch (thisS.level) {
      case 16:
        return thisS.translate.translate(indexForThoury.returnLevel16());
      case 15: 
        return thisS.translate.translate(indexForThoury.returnLevel15());
      case 14:
        return thisS.translate.translate(indexForThoury.returnLevel14());
        // Старая часть проекта над этой строкой
      default:
        // Новая система 
        let rez = returnBodyHelpForLanguage(thisS.level);
        // Ответ для тестов с обучением слов
        if (rez == '') return thisS.translate.translate('Просто учим слова');

        return rez;
     }
}