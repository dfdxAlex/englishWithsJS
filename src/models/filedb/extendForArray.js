
import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { getRandomInt } from '../../services/getRandomInt.js';

export function extendForArray(array)
{
    const arrayRez = [];
    array.forEach((el, id, arrayLocal)=>{
        let timeArray = [];
        
        // Определяем тим конкретного теста конкретного подмассива
        // Если первое предложение - это вопрос, а второе это предложение
        // то меняем местами правильный ответ с вопросом и заполняем остальные элементы
        // вопросами их произвольных подмассивов.
        if (el[0].includes('?') && el[1].includes('.')) {
            if (!is_notWord(el)) {
                
                // Заменить местами предложение вопрос и предложение - правильный ответ
                timeArray[0] = el[1]; 
                timeArray[1] = el[0]; 
                timeArray[5] = el[5]; 
                timeArray[6] = el[6]; 
                timeArray[7] = el[7]; 

                searchIndex234(arrayLocal, 2, timeArray, '?');

                searchIndex234(arrayLocal, 3, timeArray, '?');

                searchIndex234(arrayLocal, 4, timeArray, '?');

            }
            arrayRez.push(timeArray);
        } else if (el[1].includes('?') && el[0].includes('.')) {
        } else  if (el[0].includes('. ')) {
        }
    
    });

    return arrayRez;
}


function searchIndex234(arrayLocal, index, timeArray, marker)
{
                    // Сгенерировать номер случайного подмассива
                let randomeNomberArray = getRandomInt(0, arrayLocal.length-1);
                // если нулевой элемент случайного подмассива с вопросительным знаком, то поместить
                // эту строку в позицию 2 рабочего подмассива
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
                        for(let i = randomeNomberArray; i < arrayLocal.length-1; i++) {
                            randomeNomberEl = getRandomInt(1, arrayLocal.lengthTrue - 1);
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