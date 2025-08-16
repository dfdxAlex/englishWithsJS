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
         returnLevel13 } from '../../controllers/forThoury/indexForThoury.js';

import { returnBodyHelpForLanguage } from '../../models/thouryNew/forThouryNew/returnBodyHelpForLanguage.js';

export function getBodyThoury(thisS)
{
    switch (thisS.level) {
      case 43: 
        return thisS.translate.translate(returnInfoUnit22RU());
      case 42: 
        return thisS.translate.translate(returnLevel42());
      case 40:
        return thisS.translate.translate(returnLevel40());
      case 39: 
        return thisS.translate.translate(returnLevel39());
      case 38:
        return thisS.translate.translate(returnLevel38());
      case 37:
        return thisS.translate.translate(returnLevel37());
      case 20: 
        return thisS.translate.translate(returnLevel20());
      case 36:
        return thisS.translate.translate(returnLevel36());
      case 35:
        return thisS.translate.translate(returnLevel35());
      case 34:
        return thisS.translate.translate(returnLevel34());
      case 33:
        return thisS.translate.translate(returnLevel33());
      case 32:
        return thisS.translate.translate(returnLevel32());
      case 31:
        return thisS.translate.translate(returnLevel31());
      case 23:
        return thisS.translate.translate(returnLevel23());
      case 21:
        return thisS.translate.translate(returnLevel21());
      case 19: 
        return thisS.translate.translate(returnLevel19());
      case 18:
        return thisS.translate.translate(returnLevel18());
      case 17:
        return thisS.translate.translate(returnLevel17());
      case 16:
        return thisS.translate.translate(returnLevel16());
      case 15: 
        return thisS.translate.translate(returnLevel15());
      case 14:
        return thisS.translate.translate(returnLevel14());
      // case 9:
      // case 10: 
      //   return thisS.translate.translate(returnLevel10());
      case 11:
        return thisS.translate.translate(returnLevel11());
      case 13:
        return thisS.translate.translate(returnLevel13());
      default:
        let rez = returnBodyHelpForLanguage(thisS.level-8);
        if (rez == undefined) return thisS.translate.translate('Просто учим слова');

        return rez;
     }
}