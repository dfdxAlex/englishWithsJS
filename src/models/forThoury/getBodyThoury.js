
import indexForThoury from '../../controllers/forThoury/indexForThoury.js';

import { returnBodyHelpForLanguage } from '../../models/thouryNew/forThouryNew/returnBodyHelpForLanguage.js';

export function getBodyThoury(thisS)
{
    switch (thisS.level) {
      case 20: 
        return thisS.translate.translate(indexForThoury.returnLevel20());
      case 35:
        return thisS.translate.translate(indexForThoury.returnLevel35());
      case 34:
        return thisS.translate.translate(indexForThoury.returnLevel34());
      case 33:
        return thisS.translate.translate(indexForThoury.returnLevel33());
      case 32:
        return thisS.translate.translate(indexForThoury.returnLevel32());
      case 31:
        return thisS.translate.translate(indexForThoury.returnLevel31());
      case 23:
        return thisS.translate.translate(indexForThoury.returnLevel23());
      case 21:
        return thisS.translate.translate(indexForThoury.returnLevel21());
      case 19: 
        return thisS.translate.translate(indexForThoury.returnLevel19());
      case 18:
        return thisS.translate.translate(indexForThoury.returnLevel18());
      case 17:
        return thisS.translate.translate(indexForThoury.returnLevel17());
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