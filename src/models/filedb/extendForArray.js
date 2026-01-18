
import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { getRandomInt } from '../../services/getRandomInt.js';
import { searchIndex234 } from './extendForArray/searchIndex234.js';

export function extendForArray(array)
{
    const arrayRez = [];
    array.forEach((el, id, arrayLocal)=>{
        if (el.length < 8) {
            return;
        }

    // проверить есть ли к текущему подмассиву одинаковые правильные ответы
    // Это необходимо в тех случаях, когда правильные ответы повторяются, i have to ...
    // Цель избежать замены правильного ответа с вопроссом когда во многих тестах
    // правильный ответ повторяется.
    // То есть если в массиве подмассивов есть два одинаковых правильных ответа в индексе 1
    // то не использовать этот подмассив для расширения базы вопроссов для теста.
    let ret = 0;
    arrayLocal.forEach((el2)=>{
        if (el[1] === el2[1]) {
            ret++;
        }
    })
    if (ret>1) return;
    // console.log(ret);

        let timeArray = [];

        // Поменять элементы 1 и 0
        timeArray[0] = el[1]; 
        timeArray[1] = el[0]; 
        timeArray[5] = el[5]; 
        timeArray[6] = el[6]; 
        timeArray[7] = el[7]; 
        
        // Определяем тим конкретного теста конкретного подмассива
        // Если первое предложение - это вопрос, а второе это предложение
        // то меняем местами правильный ответ с вопросом и заполняем остальные элементы
        // вопросами их произвольных подмассивов.
        if (el && el[0].includes('?') && el[1].includes('.') && !is_notWord(el)) {

                searchIndex234(arrayLocal, 2, timeArray, '?');

                searchIndex234(arrayLocal, 3, timeArray, '?');

                searchIndex234(arrayLocal, 4, timeArray, '?');

                arrayRez.push(timeArray);

        } else if (el[1].includes('?') && el[0].includes('.') && !is_notWord(el)) {

                searchIndex234(arrayLocal, 2, timeArray, '.');

                searchIndex234(arrayLocal, 3, timeArray, '.');

                searchIndex234(arrayLocal, 4, timeArray, '.');

                arrayRez.push(timeArray);
            
        } else  if (el[0].includes('. ') && !is_notWord(el)) {

                searchIndex234(arrayLocal, 2, timeArray, '. ');

                searchIndex234(arrayLocal, 3, timeArray, '. ');

                searchIndex234(arrayLocal, 4, timeArray, '. ');

                arrayRez.push(timeArray);
        } else {
            if (is_notWord(el)) {

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


searchIndex234.help = `
Функция пробегает по каждому элементу массива и в зависимости от типа теста
пытается расширить число подмассивов заменяя правильный ответ с вопроссом и 
накидывая неправильные варианты из других подмассивов
`;