// функция возвращает случайный подмассив из рабочего массива текущего теста 
// и забирает из него элемент перевода в зависимости от выбранного языка
// Цель: дать дополнительные варианты переводов для теста с выбором правильного перевода

import { getTranslateForTest } from './getTranslateForTest.js';
import { LevelDataModel } from '../../../models/LevelDataModel.js';

export function getRandomeTranslateForTest()
{
    const i = localStorage.getItem('level');
    const obj = new LevelDataModel(i);
    const arrayWork = obj.getArrayDB();
    const randomIndex = Math.floor(Math.random() * arrayWork.length);
    
    return getTranslateForTest(arrayWork[randomIndex]);
}

getRandomeTranslateForTest.help = `
функция возвращает случайный подмассив из рабочего массива текущего теста 
и забирает из него элемент перевода в зависимости от выбранного языка
Цель: дать дополнительные варианты переводов для теста с выбором правильного перевода
`;