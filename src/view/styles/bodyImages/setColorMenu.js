// функция раньше меняла цвет текста в меню.
// теперь это перескочило в стили а здесь осталась работа с границй, размером ..
import { setBorderRadiusForWorkingField } from '../../../services/setColorMenu/setBorderRadiusForWorkingField.js';
import { randomeFontSize } from './setColorMenu/randomeFontSize.js';
import { randomeLeftRightButton } from './setColorMenu/randomeLeftRightButton.js';
import { setPaddingForSimple } from './setColorMenu/setPaddingForSimple.js';

export function setColorMenu()
{
    // C Цветом текста и фона работаем для менюшек
    const searchMenu = document.getElementById('dropdownMenuburger');

    // Функция находит нужные элементы, если они есть, и изменяет для них border-radius
    // и контрастный фон и цвет шрифта делает
    setBorderRadiusForWorkingField(['question', 'translate', 'option1',
        'option2', 'option3', 'option4', 'question_old', 'clicked_element', 'search_error',
        , 'option5', 'option6', 'option7', 'option8', 'option9', 'option10', 'option11', 'option12'
    ]);

    // случайный размер шрифта
    const randomSize = randomeFontSize(['question_old', 'clicked_element', 'log', 
                                        'sound', 'search_error', 'fieldset-legend-old']);

    // дополнительный паддинг только для первого теста
    setPaddingForSimple(['question', 'translate', 'option1',
        'option2', 'option3', 'option4', 'question_old', 'clicked_element', 
        'option5', 'option6', 'option7', 'option8', 'option9', 'option10', 'option11', 'option12'
    ], randomSize);

    // смещение картинок логирования и динамика
    randomeLeftRightButton(['log', 'sound']);
}
