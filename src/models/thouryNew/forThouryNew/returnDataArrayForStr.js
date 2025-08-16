// Эта функция должна вернуть конкретный элемент в виде строки
// Функция должна просмотреть весь массив с хелпами и выбрать нужный по id
// id должен работать как по цифрам добавляя слово unit, так и по произвольным ключам
// для возможного масштабирования

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

import { arrayDataThoury } from './data/arrayDataThoury.js';

export function returnDataArrayForStr(id)
{
    let numberUnit = '';
    if (Number.isFinite(id)) numberUnit = 'unit'+id;
    else numberUnit = id;

    numberUnit = arrayDataThoury.find(value => value.includes(numberUnit));

    return numberUnit;
}