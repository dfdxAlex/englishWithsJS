import { getRandomInt } from '../../../services/getRandomInt.js';
import { is_notWord } from '../../../view/WorkingField/is_notWord.js';
import { detectPlaceholder } from '../../../view/WorkingField/detectPlaceholder.js';

export function searchIndex234(arrayLocal, index, timeArray, marker)
{
                // Сгенерировать номер случайного подмассива
                let randomeNomberArray = getRandomInt(0, arrayLocal.length-1);

                // если нулевой элемент случайного подмассива с маркером, то поместить
                // эту строку в позицию index рабочего подмассива
                if (arrayLocal[randomeNomberArray][0].includes(marker)) {
                    let arrayOne = arrayLocal[randomeNomberArray][0];
                    // если в случайно выбранное предложение попало предложение с пропущенным словом
                    // то вставить его.
                    if (is_notWord(arrayLocal[randomeNomberArray])) {
                        arrayOne.replace(detectPlaceholder(arrayLocal[randomeNomberArray]),arrayLocal[randomeNomberArray][1]);
                    }
                    timeArray[index] = arrayOne;
                } else {
                    // иначе ищем вопросительные знаки в остальной части подмассива случайного
                    // придумать случайное число от 1 до числа правильных ответов в подмассиве
                    let randomeNomberEl = getRandomInt(1, arrayLocal.lengthTrue-1);

                    // если нашли предложение с вопросительным, то помещаем его в индекс 2
                    if (arrayLocal[randomeNomberArray][randomeNomberEl].includes(marker)) {
                        let arrayOne = arrayLocal[randomeNomberArray][randomeNomberEl];
                        // если в случайно выбранное предложение попало предложение с пропущенным словом
                        // то вставить его.
                        if (is_notWord(arrayLocal[randomeNomberArray]) && randomeNomberEl === 0) {
                            arrayOne.replace(detectPlaceholder(arrayLocal[randomeNomberArray]),arrayLocal[randomeNomberArray][1]);
                        }
                        timeArray[index] = arrayOne;
                        
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
