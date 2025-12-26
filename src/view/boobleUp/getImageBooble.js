// Запускается при ответе на тест
// удаляет картинку бонусного ящика, если она есть
// возвращает одну из картинок в зависимости от результата ответа

import { SettingForProgram } from '../../models/SettingForProgram.js';

export function getImageBooble()
{
    // если функция запущена, то удалить картинку бонусного ящика, 
    const isBonusBox = document.getElementById('box-for-info-bonus');
    if (isBonusBox) {
        isBonusBox.remove();
    }
   
    if (SettingForProgram.diamant === '-1') {
        return '<span class="diamond">💀</span>';
    }
    
    if (SettingForProgram.diamant === '0') {
        return '<span class="diamond">🎓</span>';
    }

    return '<span class="diamond">💎</span>';
}

getImageBooble.help = `
Запускается при ответе на тест
удаляет картинку бонусного ящика, если она есть
возвращает одну из картинок в зависимости от результата ответа
`;