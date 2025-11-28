

import { returnBodyHelpForLanguage } from '../../models/thouryNew/forThouryNew/returnBodyHelpForLanguage.js';

export function getBodyThoury(thisS)
{
        // Новая система 
        let rez = returnBodyHelpForLanguage(thisS.level);
        // Ответ для тестов с обучением слов
        if (rez == '') return thisS.translate.translate('Просто учим слова');

        return rez;
}