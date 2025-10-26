export function bigButton(id, koef = 1.7)
{
    let fonH = getComputedStyle(id).height;
    fonH = parseInt(fonH.match(/^\d+/)[0]);
    fonH = fonH * 1.7 + 'px';
    id.style.transition = 'height 0.3s ease';
    id.style.height = fonH;
}

bigButton.help = `HELP: bigButton(id, koef = 1.7)
Функция увеличивает объект на некоторый коэффициент. По умолчанию это 1.7.
Параметр id это уже найденный в ДОМ элемент.
`;