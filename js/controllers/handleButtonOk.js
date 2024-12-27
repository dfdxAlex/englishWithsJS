// Функция проверяет порядок кнопок в составленном предложении
// если они располагаются по возрастанию, значит предложение
// построено правильно
function handleButtonOk(ev)
{
    // Узнать сколько должно быть кнопок в зоне ответа.
    const buttonMax = parseInt(localStorage.getItem('indexMax'));
    // Создать массив с кнопками в зоне ответа.
    const arrayButton = document.querySelectorAll('#container-for-rezult [id*="word"]');
    // По умолчанию ответ правильный
    let rezult = true;
    let rezultString = '';
    // Пробежать массив, если не хватает элементов в массиве или 
    // значение дата атрибута не совпадает с порядковым номером 
    // индекса елемента, то ответ не правильный rezult = false;
    // параллельно собрать предложение получившееся
    for (let i=0; i<=buttonMax; i++) {
        if (!arrayButton[i] || parseInt(arrayButton[i].dataset.index) !== i) {
            rezult = false;
        }
        if (arrayButton[i])
            rezultString+=arrayButton[i].innerText + ' ';
    }

    // Накинуть на кнопку текст, который будет прочитан функцией
    // handleOkErr(). Но сразу же после этого будет обновление страницы
    // и информация вернется к дефолтной. Данного текста видно не будет.
    document.querySelector('#button-ok').innerText = rezultString;
    // Если ответ правильный
    if (rezult) {
        handleOkErr('Ok',ev);
    } else {
        handleOkErr('Error',ev);
    }
    // Если ответ не правильный
}
