// Функция удаляет кнопку с словом внизу и помещает его вверх
// туда, где строится предложение.

function handleClickTestTwo(event)
{
    // Выбрать елемент по его Дата атрибуту
    const data = '[data-index="'+event.target.dataset.index+'"]';
    const buttonKill = document.querySelector([data]);
    if (buttonKill === null) return;

    // Сохранить этот элемент в переменную
    const buttonBuffer = buttonKill.parentElement.innerHTML;

    buttonKill.style.width = "";
    buttonKill.style.display = "inline";

    // Удалить елемент вместе с родителем
    buttonKill.parentElement.innerHTML = '';
    // Выбрать контейнер для помещения в него кнопок
    let pullButton = document.querySelector('#container-for-rezult').innerHTML;
    pullButton+=buttonBuffer;
    document.querySelector('#container-for-rezult').innerHTML = pullButton;
}
