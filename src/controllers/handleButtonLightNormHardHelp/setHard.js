// Для повторного использования кода
// функция вернет true если есть причины ставить кнопку Hard
import { returnWorkArray } from './returnWorkArray.js';

export function setHard()
{
    if (returnWorkArray().lengthTrue !== undefined 
        && returnWorkArray().lengthTrue > 2)
            return true;
    return false;
}

setHard.help = `HELPL:setHard()
Функция проверяет есть ли причины для установки кнопки Hard.
Условие - это наличие в массиве с тестами свойства lengthTrue > 2
`;
