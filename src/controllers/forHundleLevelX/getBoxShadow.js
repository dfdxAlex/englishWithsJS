import { getRandomNumber } from '../../services/setColorMenu/getRandomNumber.js';

export function getBoxShadow(color = "rgb(0,0,0)")
{
    const alpha = getRandomNumber(1,9) / 10;
    // Извлекаем числа из строки "rgb(r,g,b)"
    const [r, g, b] = color.match(/\d+/g).map(Number);

    // Формируем rgba-строку с прозрачностью
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return `${getRandomNumber(0,30)}px ${getRandomNumber(0,30)}px ${getRandomNumber(0,30)}px ${rgba}`;
}