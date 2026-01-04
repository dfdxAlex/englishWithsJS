
import { capitalizeFirst } from './capitalizeFirst.js';

// Функция расширяет массив заменяя слова синонимы
// Функция просматривает массив на наличие в определенных предложениях заданных слов
// Функция так-же создает дубликаты нужных слов с заглавными буквами и без и заменяет их.
// Получается эффект замены как слова в начале предложения, так и в любом другом месте

export function extendAnalogZeroOneTwo(array, strOld, strNew)
{
    return array.filter(el => el[0].toLowerCase().includes(strOld) 
                            && el[1].toLowerCase().includes(strOld)  
                                && el[2].toLowerCase().includes(strOld)
          ).map((el) => {
            // Создаём копию подмассива, чтобы не менять исходный
            const newEl = [...el];

            // Сделать старое слово полностью с маленьких букв
            let searchStrOne = strOld.toLowerCase();
            // Сделать старое слово с заглавной буквой
            let searchStrTwo = capitalizeFirst(strOld);
            // Сделать новое слово полностью с маленьких букв
            let searchStrNewOne = strNew.toLowerCase();
            // Сделать новое слово с заглавной буквой
            let searchStrNewTwo = capitalizeFirst(strNew);

            // Сделать регулярное выражение для старого слова с маленькими буквами
            let regexOne = new RegExp(searchStrOne, 'g');
            // Найти и заменить старое слово из маленьких букв на новое 
            newEl[0] = newEl[0].replace(regexOne, searchStrNewOne);

            // Сделать регулярное выражение для старого слова с заглавной буквой
            let regexTwo = new RegExp(searchStrTwo, 'g');
            // Найти и заменить старое слово с заглавной буквой на новое 
            newEl[0] = newEl[0].replace(regexTwo, searchStrNewTwo);

            // то же самое для второй строки
            newEl[1] = newEl[1].replace(regexOne, searchStrNewOne);
            newEl[1] = newEl[1].replace(regexTwo, searchStrNewTwo);

            // то же самое для третьей строки
            newEl[2] = newEl[2].replace(regexOne, searchStrNewOne);
            newEl[2] = newEl[2].replace(regexTwo, searchStrNewTwo);

            return newEl;
          });
}


extendAnalogZeroOneTwo.help = `
Функция расширяет массив заменяя слова синонимы
Функция просматривает массив на наличие в определенных предложениях заданных слов
Функция так-же создает дубликаты нужных слов с заглавными буквами и без и заменяет их.
Получается эффект замены как слова в начале предложения, так и в любом другом месте
`;