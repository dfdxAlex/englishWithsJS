import { is_notWord } from '../../view/WorkingField/is_notWord.js';
import { detectPlaceholder } from '../../view/WorkingField/detectPlaceholder.js';
import { getRandomInt } from '../../services/getRandomInt.js';

export function extendForArray2(array)
{
    if (localStorage.getItem('extend2') === "not") return [];

    let arrayForString = [];
    const arrayToReturn = [];
    array.forEach((el, id, arrayOld)=>{

        // весь if работает с тестами, где есть предложение с пропущенным словом
        if (is_notWord(el)) {

            // создать результирующий массив и присвоить ему стартовый
            const arrayRez = el;

            // получить целое предложение, с вставленным словом
            let str = el[0].replace(detectPlaceholder(el),el[1]);
             
            // получить массив из нового целого предложения, из его слов
            let arrayTime = str.split(" ");

            // выбрать случайный элемент массива и передать его в новый массив в 
            // первую ячейку как правильный ответ
            let randomWord = getRandomInt(0, arrayTime.length-1);
            arrayRez[1] = arrayTime[randomWord];
            // Вместо слова, которое будет новым пропущенным, вставить многоточие 
            arrayTime[randomWord] = '...';
            // Собрать новое стартовое предложение
            arrayRez[0] = arrayTime.join(" ");

            let i = 2;
            while(i < 5) {
                // Дальше работаем со случайными словами для альтернативных вариантов
                // Выбрать случайный подмассив
                // console.log(arrayOld);
                let randomString = arrayOld[getRandomInt(0, arrayOld.length-1)][0];

                // защита от undefaned
                if (!randomString) continue;

                // очистить предложение от муссора
                randomString = randomString.replace(detectPlaceholder(el), '');
                randomString = randomString.replace(/\s+/g, ' ').trim();

                // разбить предложение на массив
                const randomStringArray = randomString.split(" ");
                
                // взять из нового массива случайное слово, поместить его в один из неверных вариантов
                let randomeWord = randomStringArray[getRandomInt(0, randomStringArray.length-1)];
                // процесс добавления. Переменная i настроена так, чтобы она совпадала с 
                // добавляемым индексом
                arrayRez[i] = randomeWord;

                if (arrayRez[i] !== arrayRez[1]) {
                    i++;
                }
            }
            arrayToReturn.push(arrayRez);
        } else {
            for (let i=0; i<arrayOld.lengthTrue; i++) {
                arrayForString.push(el[i]);
            } 
        }
        
    });
    
    const arrayRez = [];
    // Очистить массив с предложениями от дубликатов.
    if (arrayForString && arrayForString.length > 0)
        arrayForString = [...new Set(arrayForString)];

    for (let i=0; i<arrayForString.length; i++) {
       
        if (arrayForString[i] == undefined) continue;

        // получить массив из нового целого предложения, из его слов
        // console.log(arrayForString[i]);
        let arrayTime = arrayForString[i].split(" ");

        // выбрать случайный элемент массива и передать его в новый массив в 
        // первую ячейку как правильный ответ
        let randomWord = getRandomInt(0, arrayTime.length-1);
        arrayRez[1] = arrayTime[randomWord];
        // Вместо слова, которое будет новым пропущенным, вставить многоточие 
        arrayTime[randomWord] = '...';
        // Собрать новое стартовое предложение
        arrayRez[0] = arrayTime.join(" ");

        

            let ii = 2;
            while(ii < 5) {
                // Дальше работаем со случайными словами для альтернативных вариантов
                // Выбрать случайный подмассив
                // console.log(arrayOld);
                let randomString = array[getRandomInt(0, array.length-1)][0];

                // защита от undefaned
                if (!randomString) continue;

                // очистить предложение от муссора
                randomString = randomString.replace(detectPlaceholder(randomString), '');
                randomString = randomString.replace(/\s+/g, ' ').trim();

                // разбить предложение на массив
                const randomStringArray = randomString.split(" ");
                
                // взять из нового массива случайное слово, поместить его в один из неверных вариантов
                let randomeWord = randomStringArray[getRandomInt(0, randomStringArray.length-1)];
                // процесс добавления. Переменная i настроена так, чтобы она совпадала с 
                // добавляемым индексом
                arrayRez[ii] = randomeWord;

                if (arrayRez[ii] !== arrayRez[1]) {
                    ii++;
                }
            }
            // console.log(arrayRez);
            arrayToReturn.push(arrayRez);

    }
        

    return arrayToReturn;
}