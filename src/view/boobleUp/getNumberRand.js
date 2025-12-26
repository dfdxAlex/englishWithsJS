import { SettingForProgram } from '../../models/SettingForProgram.js';
import { getRandom } from '../../services/getRandom.js';

export function getNumberRand()
{
    // если приближаемся к правой стороне то скорректировать тренд в левую
    if (window.innerWidth - SettingForProgram.buttonCheckX < 100) {
        return -1;
    }
    if (SettingForProgram.buttonCheckX < 20) {
        return 1;
    }
    return getRandom(-2,2);
}