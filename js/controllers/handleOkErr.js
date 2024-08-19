// функция считает число верных и не верных ответов и записывает 
// их в свои переменные в локальном хранилище.
// У каждого урока будут свои переменные для хранения верных ответов
// То есть каждый запуск этого обработчика событий увеличивает 
// число верных ответов на одну единицу.
// Функция handleLevelX(); перезапускает рабочее поле 
// для обновления информации
// если использовать как функцию, то handleOkErr(Ok|Error)
// если как обработчик событий, то () => {handleOkErr(Ok|Error)}

function handleOkErr(str, event) {
    let tic = 0;
    // Переменные, в которых хранится инфа об верных и не верных 
    // ответак создается так:
    // слово "level", к нему добавляется уровень, на котором
    // в данный момент времени работает пользователь, он хранится
    // в хранилище  localStorage.getItem('level').
    // дальше добавляется знак "_", и заканчивается имя пересенной
    // либо словом "Ok", либо "Error", эта инфа приходит через
    // входной параметр функции (str)
    const levexW = 'level'+localStorage.getItem('level')+'_'+str;
    tic = +localStorage.getItem(levexW);
    localStorage.setItem(levexW,tic+1);

    // Получить текстовое содержимое елемента
    // на который кликнули и поместить его в поле 
    // с id=clicked_element
    const clickedEl = document.getElementById('clicked_element');
    clickedEl.innerHTML = event.target.innerText;

    // Здесь просто прячется нажатая кнопка. Это нужно для того, 
    // чтобы не дублировать неправильные ответы.
    if (str == "Error")
        event.target.style.display = 'none';


    // Настроить событие на кнопку Сообщить об ошибке
    handleClickError(event);

    // Поместить информацию о том правильный ответ или нет
    const errorOrOk = document.getElementById('error_form');
    errorOrOk.innerHTML = str;

    // Запомнить содержимое вопросса, для того, чтобы его 
    // продублировать в поле предыдущего вопросса и ответа
    const oldElementText = document.getElementById('question');
    const clickedElementOld = document.getElementById('question_old');
    clickedElementOld.innerText = oldElementText.innerText;

    // Поле со старым или текущим вопроссом
    const fieldsetLegend = document.getElementById('fieldset-legend');
    fieldsetLegend.innerHTML = 'Текущий вопрос/ответ';
    // Изменить вопрос только если есть правильный ответ на предыдущий
    if (str === 'Ok') {
        errorOrOk.style.backgroundColor = "green";
        clickedEl.style.backgroundColor = "green";
        clickedElementOld.style.backgroundColor = "green";
        errorOrOk.style.color = "white";
        clickedEl.style.color = "white";
        clickedElementOld.style.color = "white";
        fieldsetLegend.innerHTML = FactoryRegistr.getObject('LanguageController').translate('Предыдущий вопрос/ответ');
        handleLevelX(new LevelDataModel(+localStorage.getItem('level')));
    }
    else {
        errorOrOk.style.backgroundColor = "red";
        clickedEl.style.backgroundColor = "red";
        clickedElementOld.style.backgroundColor = "red";
    }
}
