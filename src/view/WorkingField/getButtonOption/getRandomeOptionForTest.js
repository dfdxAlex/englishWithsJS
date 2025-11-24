// функция возвращает случайный подмассив из рабочего массива текущего теста 
// и забирает из него элемент [0]

import { LevelDataModel } from '../../../models/LevelDataModel.js';
import { cleartoBeSentences } from '../cleartoBeSentences.js';

export function getRandomeOptionForTest()
{
    const i = localStorage.getItem('level');
    const obj = new LevelDataModel(i);
    const arrayWork = obj.getArrayDB();
    const randomIndex = Math.floor(Math.random() * arrayWork.length);

    this.arrayBD = arrayWork[randomIndex];
    this.getArrayQuestions(this.arrayBD);

    // очистить массив ToBeSentences от лишнего слова not, работает с контекстом класса
    this.clearNotToBeSentences();
    // вставить правильное слово если встретилось многоточие, работает с контекстом класса
    this.insertWord();
    // Почистить подмассив toBeSentences от дублирования слов
    let arrayButton = this.question.split(' ');
    arrayButton = cleartoBeSentences(arrayButton);
    this.question = arrayButton.join(" ");

    return this.question;
}

getRandomeOptionForTest.help = `
функция возвращает случайный подмассив из рабочего массива текущего теста 
и забирает из него элемент [0]
`;