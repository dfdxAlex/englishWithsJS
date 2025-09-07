// функция открывает помощь по диамантам
// задача функции отрендерить нужную разметку в body
// Запустится компонент с помощью средств бутстрапа
//  data-bs-toggle="modal" data-bs-target="#diamondsModal"
// бутстрап сам накидывает события на кнопку используя триггеры data-bs-

// все нужные элементы и помещает Бутстрап компонент

import  indexForThoury  from '../controllers/forThoury/indexForThoury.js';
import { getTranslate } from '../models/forFactoryRegistr/getTranslate.js';

export function daimentInfo()
{
    const translate = getTranslate();

    const result = translate.translate(indexForThoury.returnInfoForDiamant());

    // Вставить разметку для помощи по диамантам в конец body
    document.body.insertAdjacentHTML("beforeend", result);
};
