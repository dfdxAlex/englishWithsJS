import { getRandomNumber } from './getRandomNumber';

export function returnBorderRadius(x, y)
{
    return `${getRandomNumber(x,y)}% / ${getRandomNumber(x,y)}% ${getRandomNumber(x,y)}% ${getRandomNumber(x,y)}%`;
}
