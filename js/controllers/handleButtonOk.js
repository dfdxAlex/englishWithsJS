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
    //let rezult = true;
    let rezultString = '';
    // Пробежать массив, если не хватает элементов в массиве или 
    // значение дата атрибута не совпадает с порядковым номером 
    // индекса елемента, то ответ не правильный rezult = false;
    // параллельно собрать предложение получившееся
    // алгоритм устарел, удалить и протестировать без него
    for (let i=0; i<=buttonMax; i++) {
        if (arrayButton[i])
            rezultString+=arrayButton[i].innerText + ' ';
    }

    //************************************************************
    //Этот блок дублирует проверку. Изменение алгоритма проверки результата
    //так как алгоритм проверяющий порядок слов уязвим для предложений
    //с одинаковыми двумя словами.

    // Достать образец текущего задания в тесте из другого объекта
    let testState = FactoryRegistr.getObject('WorkingField').questionDB;
    testState = testState.replace(/\s+/g, '');
    let testForButton = rezultString.replace(/\s+/g, '');

    let testRezult = String(testState.toLowerCase()) == String(testForButton.toLowerCase());
    //************************************************************

    // Накинуть на кнопку текст, который будет прочитан функцией
    // handleOkErr(). Но сразу же после этого будет обновление страницы
    // и информация вернется к дефолтной. Данного текста видно не будет.
    document.querySelector('#button-ok').innerText = rezultString;
    // Если ответ правильный
    if (testRezult) {
        handleOkErr('Ok',ev);
        outpurTranslateForTest();
    } else {
        handleOkErr('Error',ev);
    }
}

function outpurTranslateForTest()
{
    let commentPlus = '';
    if (localStorage.getItem('randomNumber') !== "1") {
        let transL = FactoryRegistr.getObject("LanguageController");
        commentPlus = transL.translate('Речь примерно о:');
    }

    SettingForProgram.dataElevator.push(indexQuestion()[5]);
    const place = document.getElementById('clicked_element');
    if (SettingForProgram.dataElevator.length > 1)
        place.innerText = commentPlus+' '+SettingForProgram.dataElevator.shift();
}
