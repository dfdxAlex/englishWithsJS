import { getRandomNumber } from '../../../../services/setColorMenu/getRandomNumber.js';

export function randomeFontSize(array)
{
    const fontSize = `${20/getRandomNumber(10,20)}em`;

    // Создать массив с выбранными элементами
    array.forEach((el)=>{
        const selected = document.getElementById(el);
        if (selected) {
            selected.style.fontSize = fontSize;
        }
    });
    return fontSize;
}

randomeFontSize.help = `
Функция устанавливает случайный размер шрифта.
`;