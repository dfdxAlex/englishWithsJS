// функция увеличивает нажатую кнопку из трёх, остальные две возвращает наза
import { getHeightButton } from '../../services/get/getHeightButton.js';
import { returnNormButton } from '../../services/set/returnNormButton.js';
import { bigButton } from '../../services/set/bigButton.js';

export function selectButton(light, normal, hard)
{
        if (localStorage.getItem('light_normal_hard') === 'light') {
            if (getHeightButton(light) > 39) return false;
            bigButton(light);
            returnNormButton(normal);
            returnNormButton(hard);
        }
        if (localStorage.getItem('light_normal_hard') === 'normal') {
            if (getHeightButton(normal) > 39) return false;
            bigButton(normal);
            returnNormButton(light);
            returnNormButton(hard);
        }
        if (localStorage.getItem('light_normal_hard') === 'hard') {
            if (getHeightButton(hard) > 39) return false;
            bigButton(hard);
            returnNormButton(light);
            returnNormButton(normal);
        }
}

selectButton.help = `HELP: selectButton(light, normal, hard)
Функция управляет размером кнопок Light, Normal и Hard.
Входящие параметры - это уже выбранные из ДОМ кнопки
`;