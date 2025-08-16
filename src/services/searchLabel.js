// функция принимает строку и ищет в ней позиции неких маркером, написана для раздела помощи
// но может искать любые другие маркеры, важно чтобы они стояли в отдельной строке.
// первый параметр - это строка, второй параметр - это метка, позицию которой нужно найти

export function searchLabel(str, label)
{
    if (str == undefined) return '';
    label+='\n';
    let poz = str.indexOf(label);
    if (poz < 0) poz = str.indexOf(label.charAt(0).toUpperCase() + label.slice(1));
    if (poz < 0) str.indexOf(label.toUpperCase());

    if (poz < 0) {
        poz = 0;
        console.log('не удалось найти маркер '+label);
    }
    return poz;
}