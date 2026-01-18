import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { detectPlaceholder } from '../../view/WorkingField/detectPlaceholder.js';
import { getRandomInt } from '../../services/getRandomInt.js';

export function extendForArray2(array)
{
    const arrayToReturn = [];
    array.forEach((el, id, arrayOld)=>{

        // весь if работает с тестами, где есть предложение с пропущенным словом
        if (is_notWord(el)) {

            // создать результирующий массив и присвоить ему стартовый
            const arrayRez = el;

            // получить целое предложение, с вставленным словом
            let str = el[0].replace(detectPlaceholder(el),el[1]);
            // console.log(str);
            // получить массив из нового целого предложения, из его слов
            let arrayTime = str.split(" ");

            // выбрать случайный элемент массива и передать его в новый массив в 
            // первую ячейку как правильный ответ
            let randomWord = getRandomInt(0, arrayTime.length);
            arrayRez[1] = arrayTime[randomWord];
            // Вместо слова, которое будет новым пропущенным, вставить многоточие 
            arrayTime[randomWord] = '...';
            // Собрать новое стартовое предложение
            arrayRez[0] = arrayTime.join(" ");

            let i = 2;
            while(i < 5) {
                // Дальше работаем со случайными словами для альтернативных вариантов
                // Выбрать случайный подмассив
                let randomString = arrayOld[getRandomInt(0, arrayOld.length)][0];
                // очистить предложение от муссора
                randomString = randomString.replace(detectPlaceholder(el), '');
                // разбить предложение на массив
                const randomStringArray = randomString.split(" ");
                
                // взять из нового массива случайное слово, поместить его в один из неверных вариантов
                let randomeWord = randomStringArray[getRandomInt(0, randomStringArray.length)];
                // процесс добавления. Переменная i настроена так, чтобы она совпадала с 
                // добавляемым индексом
                arrayRez[i] = randomeWord;

                if (arrayRez[i] !== arrayRez[1]) {
                    i++;
                }
            }
            arrayToReturn.push(arrayRez);
        }
        
    });
    return arrayToReturn;
}