import { getHeightButton } from '../get/getHeightButton.js';

export function returnNormButton(id, height = 39)
{
    if (!id) return false;
    let fonH = getHeightButton(id);
    if (fonH > height) {
    id.style.transition = 'height 0.3s ease';
    id.style.height = `${height}px`;
    }
}

returnNormButton.help = `
HELP:returnNormButton(id)
Функция проверяет является ли объект выше заданного параметра height, если выше то возвращает 
высоту к этому параметру.
`;