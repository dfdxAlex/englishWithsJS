// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

// объект достаточно просто создать в нужном месте
class EventController {
    init() {

        // Оригинальные обработчики для первого варианта теста
        if (SettingForProgram.selectTypeTest === "simple") {
            let optionsOne = document.getElementById('option1');
            let optionsTwo = document.getElementById('option2');
            let optionsThree = document.getElementById('option3');
            let optionsFour = document.getElementById('option4');

            // Сделать образец правильной строки без пробелов. Нужен для:
            // иногда в тестах есть два одинаковых варианта ответов, чтобы они оба сработали, на 
            // них должен быть статус "Ок". Чтобы этот статус повесить на дополнительные варианты
            // ответов нужно эти варианты ответов сравнить с заведомо правильным. Если он такой-же,
            // то дать статус Ok, если отличается то Error
            let optionsOneString = optionsOne.innerText.replaceAll(' ','');
            let optionsTwoString = optionsTwo.innerText.replaceAll(' ','');
            let optionsThreeString = optionsThree.innerText.replaceAll(' ','');
            let optionsFourString = optionsFour.innerText.replaceAll(' ','');

            // Всегда правильный вариант ответа, по определению.
            optionsOne.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsTwoString)
                optionsTwo.onclick = handleOkErr.bind(null,'Error');
            else 
                optionsTwo.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsThreeString)
                optionsThree.onclick = handleOkErr.bind(null,'Error');
            else
                optionsThree.onclick = handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsFourString)
                optionsFour.onclick = handleOkErr.bind(null,'Error');
            else
                optionsFour.onclick = handleOkErr.bind(null,'Ok');
        }

        // Оригинальные обработчики событий для второго варианта теста
        if (SettingForProgram.selectTypeTest === "word-assembly") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }
            // вернуть все кнопки обратно вниз, если был клик по любой кнопку
            let containerForRezult = document.querySelector('#container-for-rezult');
            if (containerForRezult) {
                containerForRezult.onclick = (el) => {
                    el.stopPropagation();
                    const i = localStorage.getItem('level');
                    const obj = new LevelDataModel(i);
                    // перерисовать рабочее поле.
                    // параметр true отключает генерацию нового вопросса
                    handleLevelX(obj, true);
                };
            }
        }

        // Оригинальные обработчики событий для третьего варианта теста
        // По возможности объеденить этот блок с предыдущим
        if (SettingForProgram.selectTypeTest === "word-assembly-not-translate") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }
            // вернуть все кнопки обратно вниз, если был клик по любой кнопку
            let containerForRezult = document.querySelector('#container-for-rezult');
            if (containerForRezult) {
                containerForRezult.onclick = (el) => {
                    el.stopPropagation();
                    //const i = localStorage.getItem('level');
                    const obj = new LevelDataModel(DataOk.level.int);
                    // перерисовать рабочее поле.
                    // параметр true отключает генерацию нового вопросса
                    handleLevelX(obj, true);
                };
            }
        }
        
        // Добавить обработчик события по кнопке с переводом.
        // Перевод должен появиться только после клика на кнопку
        let translate = document.getElementById('translate');
        if (translate) {
            translate.onclick = handleTranslateQuestion.bind(null, FactoryRegistr.getObject('WorkingField'));
        }

        // обработчик события клика по кнопке логов
        document.getElementById('log').onclick = handleLog;
    }
}
