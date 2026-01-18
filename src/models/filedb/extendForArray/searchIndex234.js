import { getRandomInt } from '../../../services/getRandomInt.js';

export function searchIndex234(arrayLocal, index, timeArray, marker)
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
