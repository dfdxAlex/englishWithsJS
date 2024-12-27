// функция считает число верных и не верных ответов и записывает 
// их в свои переменные в локальном хранилище.
// У каждого урока будут свои переменные для хранения верных ответов
// То есть каждый запуск этого обработчика событий увеличивает 
// число верных ответов на одну единицу.
// Функция handleLevelX(); перезапускает рабочее поле 
// для обновления информации
// если использовать как функцию, то handleOkErr(Ok|Error)
// если как обработчик событий, то () => {handleOkErr(Ok|Error)}

// Данные о колличестве правильных и не правильных ответов хранятся
// в локальном хранилище, и у каждого теста есть свои два ключа в хранилище.

function handleOkErr(str, event) {
    // Переменные, в которых хранится инфа об верных и не верных 
    // ответак создается так: 
    // слово "level", к нему добавляется уровень, на котором
    // в данный момент времени работает пользователь, он хранится
    // в хранилище  localStorage.getItem('level').
    // дальше добавляется знак "_", и заканчивается имя пересенной
    // либо словом "Ok", либо "Error", эта инфа приходит через
    // входной параметр функции (str)
    const level = localStorage.getItem('level');
    const levexW = 'level'+level+'_'+str;
    let tic = +localStorage.getItem(levexW);

    // объект с разными данными для подсчёта бонусов
    const propertyForBonus = {
        tic,
        str,
        log:false, // усли true, то calculateBonusMultiplier() пишет логи
        levexW,
        level,
    };
    // Увеличить число ответов
    // функция calculateBonusMultiplier() берет число текущих балов
    // и увеличивает его. Правила смотреть внутри функции
    localStorage.setItem(levexW,tic+calculateBonusMultiplier(propertyForBonus));

    // Достать из регистра объект переводчика
    const translate = FactoryRegistr.getObject('LanguageController');

    // Сброс состояния кнопки
    resetBottonError();

    // Выбрать html тег, который покажет выбранный неправильный вариант
    // или весь правильный вопрос
    const clickedEl = document.getElementById('clicked_element');
    // если был ответ ошибочный, то поместить выбранный вариант
    // в поле clicked_element
    let rezult  = event.target.innerText;

    if (str === 'Ok') {
        // Если ответ правильный, то в поле clicked_element вывести
        // результат работы последней функции в массиве, если там 
        // есть функция, иначе вывести элемент, на который нажали
        const nameArray = localStorage.getItem('nameArrayDb');
        const workingArray = eval(nameArray);
        const indexArray = localStorage.getItem('randomEl');
        if (typeof workingArray[workingArray.length-1] === "function")
            rezult = workingArray[workingArray.length-1](indexArray);
    }
    clickedEl.innerHTML = rezult;

    // добавить объект с логами в пулл логов
    Logs.addLog = new Log(str, rezult);

    // Здесь просто прячется нажатая кнопка. Это нужно для того, 
    // чтобы не дублировать неправильные ответы.
    if (str == "Error")
        event.target.style.display = 'none';

    // Настроить событие на кнопку Сообщить об ошибке
    // Функция подготавливает информацию о том, с каким словом работаем
    handleClickError();

    // Запомнить содержимое вопросса, для того, чтобы его 
    // продублировать в поле предыдущего вопросса и ответа
    const oldElementText = document.getElementById('question');
    const clickedElementOld = document.getElementById('question_old');
    // Проверить есть ли поле с вопроссом, это поле отсутствует 
    // При втором уровне тестов, сборка предложения по словам
    if (oldElementText !== null)
        clickedElementOld.innerText = oldElementText.innerText;
    else
        // Если не было поля с вопроссом, то инфу про предыдущий ответ
        // можно поймать на этой кнопке в пределах одного цикла.
        // Данная кнопка получает текст последнего ответа, но при перерисовке
        // информация теряется, поэтому на странице её не видно.
        clickedElementOld.innerText = document.querySelector('#button-ok').innerText;

    // Поле со старым или текущим вопроссом
    const fieldsetLegend = document.getElementById('fieldset-legend');
    fieldsetLegend.innerHTML = 'Текущий вопрос/ответ';
    // Изменить вопрос только если есть правильный ответ на предыдущий
    if (str === 'Ok') {
        clickedEl.style.backgroundColor = "green";
        clickedElementOld.style.backgroundColor = "green";
        clickedEl.style.color = "white";
        clickedElementOld.style.color = "white";
        fieldsetLegend.innerHTML = translate.translate('Предыдущий вопрос/ответ');
        handleLevelX(new LevelDataModel(+localStorage.getItem('level')));
    }
    else {
        clickedEl.style.backgroundColor = "red";
        clickedElementOld.style.backgroundColor = "red";
    }
    
    // пересчитать статистику и записать в хранилище
    resetStatistic(false);
    // перерисовать статус диамантов
    diament();
}
