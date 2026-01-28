import { getRandomInt } from '../../../services/getRandomInt.js';
// import { is_notWord } from '../../../view/WorkingField/is_notWord.js';
import { detectPlaceholder } from '../../../view/WorkingField/detectPlaceholder.js';

export function searchIndex234(arrayLocal, index, timeArray, marker)
{
                // получить случайный подмассив
                const arrayRandome = getRandomeArray(arrayLocal);

                // получить число правильно составленных предложений
                let trueSentences = arrayLocal.lengthTrue;
                if (!trueSentences) {
                    trueSentences = 2;
                }

                // если нулевой элемент случайного подмассива с маркером, то поместить
                // эту строку в позицию index рабочего подмассива
                // Маркером может быть знак ? - значит работаем с вопросами ...
                if (arrayRandome[0].includes(marker)) {

                    // если в случайно выбранное предложение попало предложение с пропущенным словом
                    // то вставить его.
                    timeArray[index] = arrayRandome[0].replace(detectPlaceholder(arrayRandome),arrayRandome[1]);

                } else {
                    // иначе ищем вопросительные знаки в остальной части подмассива случайного
                    // придумать случайное число от 1 до числа правильных ответов в подмассиве
                    let randomeNomberEl = getRandomInt(1, trueSentences-1);

                    // если нашли предложение с вопросительным, то помещаем его в индекс 2
                    if (arrayRandome[randomeNomberEl].includes(marker)) {
                        // если в случайно выбранное предложение попало предложение с пропущенным словом
                        // то вставить его.
                        timeArray[index] = arrayRandome[randomeNomberEl].replace(detectPlaceholder(arrayRandome),arrayRandome[1]);
                        
                    } else {

                        let loop = false;
                        // Выбрать номер слуайного подмассива из всего массива
                        let randomeNomberArray = getRandomInt(0, arrayLocal.length-1);

                        for(let i = randomeNomberArray; i < arrayLocal.length; i++) {

                            let randomeNomberEl = 0;
                            
                            // Если не работаем с минитекстом, то можно просматривать случайный элемент
                            if (marker !== '. ') {
                                randomeNomberEl = getRandomInt(1, trueSentences - 1);
                            }

                            // Если вышли за пределы массива то вернуться обратно 
                            if (arrayLocal.length <= i) i = arrayLocal.length - 1;

                            // здесь выбранный случайно подмассив проверяется на маркер и 
                            // если маркер есть, то взять предложение выбранного из 
                            // подмассива
                            if (arrayLocal[i][randomeNomberEl].includes(marker)) {
                                timeArray[index] = arrayLocal[i][randomeNomberEl];
                                timeArray[index] = timeArray[index].replace(detectPlaceholder(arrayLocal[i]),arrayLocal[i][1]);
                                break;
                            }

                            // Дальше есть проверка, если добежали до конца массива от случайно-выбранного элемента
                            // и не нашли нужное число предложений, то начать с нулевого индекса
                            // такая акция происходит только однажды, потому что второй раз loop уже будет true
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


function getRandomeArray(arrayR)
{
    const arrayTime = arrayR;
    // Сгенерировать номер случайного подмассива
    return arrayTime[getRandomInt(0, arrayTime.length-1)];
}