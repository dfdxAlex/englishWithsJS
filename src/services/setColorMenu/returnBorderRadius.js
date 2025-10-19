import { getRandomNumber } from './getRandomNumber';
import { SettingForProgram } from '../../models/SettingForProgram.js';

export function returnBorderRadius(x, y)
{
    if (SettingForProgram.borderRadius == 'false') return '0';
    return `${getRandomNumber(x,y)}% / ${getRandomNumber(x,y)}% ${getRandomNumber(x,y)}% ${getRandomNumber(x,y)}%`;
}
