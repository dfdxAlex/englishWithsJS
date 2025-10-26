//Функция возвращает текущий размер кнопки уровня сложности.

export function getHeightButton(id)
{
    if (!id) return false;
    let fonH = getComputedStyle(id).height;
    fonH = parseInt(fonH.match(/^\d+/)[0]);
    return fonH;
}

getHeightButton.help = `
HELP:getHeightButton(id)
Функция возвращает текущую высоту конкретной кнопки выбора сложности теста,
но может работать с другими элементами.
id - это уже выбранная кнопка или другой элемент`;