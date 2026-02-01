
import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { searchIndex234 } from './extendForArray/searchIndex234.js';
import { addElToDinamicMenu } from '../../view/addElToDinamicMenu.js';

export function extendForArray(array)
{
    
    if (localStorage.getItem('extend1') === "not") return [];

    // проверить есть ли к текущему подмассиву одинаковые правильные ответы
    // Это необходимо в тех случаях, когда правильные ответы повторяются, i have to ...
    // Цель избежать замены правильного ответа с вопроссом когда во многих тестах
    // правильный ответ повторяется.
    // То есть если в массиве подмассивов есть два одинаковых правильных ответа в индексе 1
    // то не использовать этот подмассив для расширения базы вопроссов для теста.


    const arrayNew = array;

    // searchUndefined(array);


    const arrayRez = [];
    arrayNew.forEach((el, id, arrayLocal)=>{

        // Поиск подмассивов с числом элементов меньше 8
        if (el.length < 8 && id < arrayLocal.length-1) {
            console.log("Обнаружен подмассив с длиной меньше 8 елементов:");
            console.log(el);
            console.log(el[0]);
            console.log(id);
            return;
        }

        if (el.length < 8 && id === arrayLocal.length-1) {
            console.log("Последний элемент не рабочий подмассив");
            return;
        }

    // console.log(ret);

        let timeArray = [];

        // Поменять элементы 1 и 0
        timeArray[0] = el[1]; 
        timeArray[1] = el[0]; 
        timeArray[5] = el[5]; 
        timeArray[6] = el[6]; 
        timeArray[7] = el[7]; 
        
        // Определяем тип конкретного теста конкретного подмассива
        // Если первое предложение - это вопрос, а второе это предложение
        // то меняем местами правильный ответ с вопросом и заполняем остальные элементы
        // вопросами их произвольных подмассивов.
        // console.log(el[0]);
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
        }
    
    });

    // console.log(arrayRez);
    searchUndefined(arrayRez);
    return arrayRez;
}


searchIndex234.help = `
Функция пробегает по каждому элементу массива и в зависимости от типа теста
пытается расширить число подмассивов заменяя правильный ответ с вопроссом и 
накидывая неправильные варианты из других подмассивов
`;

// function randomFirstSentences(arrayLocal)
// {
//     // Сгенерировать номер случайного подмассива
//     let randomeNomberArray = getRandomInt(0, arrayLocal.length-1);
//     return arrayLocal[randomeNomberArray][0];
// }

function searchUndefined(arrayRez)
{
    

}

function uniqueByIndex1(arr) {
  let resInt = 0;

  // Set для хранения уже встреченных значений из sub[1]
  const seen = new Set();

  // filter проходит по каждому подмассиву
  return arr.filter(sub => {

    // Берём элемент с индексом 1 (по нему проверяем уникальность)
    const key = sub[1];

    // Если такое значение уже встречалось — исключаем подмассив
    if (seen.has(key)) {
      resInt++;
      return false;
    }

    // Если ещё не встречалось — запоминаем его
    seen.add(key);

    // И оставляем текущий подмассив в результате
    return true;
  });
}
