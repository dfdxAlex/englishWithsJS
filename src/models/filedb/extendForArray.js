
import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { getRandomInt } from '../../services/getRandomInt.js';

export function extendForArray(array)
{
    const arrayRez = [];
    array.forEach((el, id, arrayLocal)=>{
        if (el.length < 8) {
            return;
        }
        let timeArray = [];
        
        // Определяем тим конкретного теста конкретного подмассива
        // Если первое предложение - это вопрос, а второе это предложение
        // то меняем местами правильный ответ с вопросом и заполняем остальные элементы
        // вопросами их произвольных подмассивов.
        if (el && el[0].includes('?') && el[1].includes('.') && !is_notWord(el)) {
                // Заменить местами предложение вопрос и предложение - правильный ответ
                timeArray[0] = el[1]; 
                timeArray[1] = el[0]; 
                timeArray[5] = el[5]; 
                timeArray[6] = el[6]; 
                timeArray[7] = el[7]; 

                searchIndex234(arrayLocal, 2, timeArray, '?');

                searchIndex234(arrayLocal, 3, timeArray, '?');

                searchIndex234(arrayLocal, 4, timeArray, '?');

                arrayRez.push(timeArray);

        } else if (el[1].includes('?') && el[0].includes('.') && !is_notWord(el)) {
                timeArray[0] = el[1]; 
                timeArray[1] = el[0]; 
                timeArray[5] = el[5]; 
                timeArray[6] = el[6]; 
                timeArray[7] = el[7]; 

                searchIndex234(arrayLocal, 2, timeArray, '.');

                searchIndex234(arrayLocal, 3, timeArray, '.');

                searchIndex234(arrayLocal, 4, timeArray, '.');

                arrayRez.push(timeArray);
            
        } else  if (el[0].includes('. ') && !is_notWord(el)) {
                timeArray[0] = el[1]; 
                timeArray[1] = el[0]; 
                timeArray[5] = el[5]; 
                timeArray[6] = el[6]; 
                timeArray[7] = el[7]; 

                searchIndex234(arrayLocal, 2, timeArray, '. ');

                searchIndex234(arrayLocal, 3, timeArray, '. ');

                searchIndex234(arrayLocal, 4, timeArray, '. ');

                arrayRez.push(timeArray);
        } else {
            if (is_notWord(el)) {
                timeArray[0] = el[1]; 
                timeArray[1] = el[0]; 
                timeArray[5] = el[5]; 
                timeArray[6] = el[6]; 
                timeArray[7] = el[7]; 

                // Сгенерировать номер случайного подмассива
                let randomeNomberArray = getRandomInt(0, arrayLocal.length-1);

                timeArray[2] = arrayLocal[randomeNomberArray][0];
                // Сгенерировать номер случайного подмассива
                randomeNomberArray = getRandomInt(0, arrayLocal.length-1);
                   timeArray[3] = arrayLocal[randomeNomberArray][0];
                // Сгенерировать номер случайного подмассива
                randomeNomberArray = getRandomInt(0, arrayLocal.length-1);
                   timeArray[4] = arrayLocal[randomeNomberArray][0];
            arrayRez.push(timeArray);
        }
    }
    
    });

    return arrayRez;
}

function searchIndex234(arrayLocal, index, timeArray, marker)
{
                // Сгенерировать номер случайного подмассива
                let randomeNomberArray = getRandomInt(0, arrayLocal.length-1);
                // если нулевой элемент случайного подмассива с маркером, то поместить
                // эту строку в позицию index рабочего подмассива
                if (arrayLocal[randomeNomberArray][0].includes(marker)) {
                    timeArray[index] = arrayLocal[randomeNomberArray][0];
                } else {
                    // иначе ищем вопросительные знаки в остальной части подмассива случайного
                    // придумать случайное число от 1 до числа правильных ответов в подмассиве
                    let randomeNomberEl = getRandomInt(1, arrayLocal.lengthTrue-1);

                    // если нашли предложение с вопросительным, то помещаем его в индекс 2
                    if (arrayLocal[randomeNomberArray][randomeNomberEl].includes(marker)) {
                        timeArray[index] = arrayLocal[randomeNomberArray][randomeNomberEl];
                        
                    } else {
                        let loop = false;
                        for(let i = randomeNomberArray; i < arrayLocal.length; i++) {
                            randomeNomberEl = getRandomInt(1, arrayLocal.lengthTrue - 1);
                            // Если работаем с минитекстом, то всегда просматривать только в нулевом элементе
                            if (marker === '. ') {
                                randomeNomberEl = 0;
                                i += 7;
                                
                            }
                            // Если вышли за пределы массива то вернуться обратно 
                            if (arrayLocal.length <= i) i = arrayLocal.length - 1;
                            if (arrayLocal[i][randomeNomberEl].includes(marker)) {
                                timeArray[index] = arrayLocal[i][randomeNomberEl];
                                break;
                            }
                            if (i === arrayLocal.length-2 && !loop) {
                                i=0;
                                loop = true;
                            }
                            if (i === arrayLocal.length-2 && loop) {
                                break;
                            }
                        }
                    }
                }
}

searchIndex234.help = `
Функция пробегает по каждому элементу массива и в зависимости от типа теста
пытается расширить число подмассивов заменяя правильный ответ с вопроссом и 
накидывая неправильные варианты из других подмассивов
`;