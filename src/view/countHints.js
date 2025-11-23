// функция выводит число запрошенных подсказок с переводом задания

import { isClickTranslate } from '../models/calculateBonusMultiplier/isClickTranslate.js';
import { LevelDataModel } from '../models/LevelDataModel.js';

export function countHints()
{
    // проверить не показана ли ещё подсказка, если показана то
    // выйти из функции
    if (isClickTranslate()) {
        return false;
    }

    // Это функционал из кнопки помощи, который блокирует начисление балов
    // при изучении слов перевод равнозначен кнопке Help, поэтому проще 
    // воспользоваться уже готовым приемом.
    if (LevelDataModel.mapNameMenu(parseFloat(localStorage.getItem('level')-1)) == 2) 
        if (localStorage.getItem('nameArrayDb') !== 'whereThat') {
                localStorage.setItem('was_click_help','true');
            }
}
