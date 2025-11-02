import { getStrStart } from './getStrStart.js';
import { getStrFinish } from './getStrFinish.js';

// Функция возвращает строку кнопки варианта в первом тесте.
// Функция использует контекст объекта WorkingField
export function getButtonOption(opt)
{
    let id = '';
    let option = '';

    switch (opt) {
        case 'option1': id=' id="option1"> ';
                        option = this.option1;
        break;
        case 'option2': id=' id="option2"> ';
                        option = this.option2;
        break;
        case 'option3': id=' id="option3"> ';
                        option = this.option3;
        break;
        case 'option4': id=' id="option4"> ';
                        option = this.option4;
    } 

    return getStrStart('init')+id+option+getStrFinish();
}

getButtonOption.help = `
Функция возвращает строку кнопки варианта в первом тесте.
Функция использует контекст объекта WorkingField
`;