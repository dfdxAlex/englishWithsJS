// случайное число от min до max с округлением минимума в большую сторону, максимума в меньшую
// покрыта тестом

import { getRandom } from './getRandom.js';

export function getRandomInt(min, max) {
    min = Math.ceil(min);     // Округлить в большую чторону, если -7,001 то -7
    max = Math.floor(max-1);  // Округлить в меньшую сторону
    return getRandom(min, max);
}
