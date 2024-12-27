// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

// объект достаточно просто создать в нужном месте
class EventController {
    init() {
        // Оригинальные обработчики для первого варианта теста
        if (SettingForProgram.selectTypeTest === "simple") {
            document.getElementById('option1').onclick = handleOkErr.bind(null,'Ok');
            document.getElementById('option2').onclick = handleOkErr.bind(null,'Error');
            document.getElementById('option3').onclick = handleOkErr.bind(null,'Error');
            document.getElementById('option4').onclick = handleOkErr.bind(null,'Error');
        }


        // Оригинальные обработчики событий для второго варианта теста
        if (SettingForProgram.selectTypeTest === "word-assembly") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }

            // вернуть все кнопки обратно вниз.
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
