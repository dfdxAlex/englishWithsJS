import { getStrStart } from './getStrStart.js';
import { getStrFinish } from './getStrFinish.js';
import { DataSet } from '../../services/data/DataSet.js';
import { getTranslateForTest } from './getButtonOption/getTranslateForTest.js';
import { getRandomeTranslateForTest } from './getButtonOption/getRandomeTranslateForTest.js';

// Функция возвращает строку кнопки варианта в первом тесте.
// Функция использует контекст объекта WorkingField
export function getButtonOption(opt)
{
    getRandomeTranslateForTest();
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
        break;
        case 'option5': id=' id="option5"> ';
                        option = getTranslateForTest(DataSet.arrayBD);
        break;
        case 'option6': id=' id="option6"> ';
                        option = getRandomeTranslateForTest();
        break;
        case 'option7': id=' id="option7"> ';
                        option = getRandomeTranslateForTest();
        break;
        case 'option8': id=' id="option8"> ';
                        option = getRandomeTranslateForTest();
    } 

    return getStrStart('init')+id+option+getStrFinish();
}

getButtonOption.help = `
Функция возвращает строку кнопки варианта в первом тесте.
Функция использует контекст объекта WorkingField
`;
