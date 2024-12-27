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
            document.querySelector('.fieldSetWorkField').onclick = handleClickTestTwo;
            
            // которое возвращает ее обратно
            // должен был вернуть кнопку обратно вниз
            document.querySelector('#container-for-rezult').onclick = (el) => {
                el.stopPropagation();
                const i = localStorage.getItem('level');
                const obj = new LevelDataModel(i);
                // перерисовать рабочее поле.
                // параметр true отключает генерацию нового вопросса
                handleLevelX(obj, true);
            };
        }
        
        // Добавить обработчик события по кнопке с переводом.
        // Перевод должен появиться только после клика на кнопку
        document.getElementById('translate').onclick = handleTranslateQuestion.bind(null, FactoryRegistr.getObject('WorkingField'));
        
        // обработчик события клика по кнопке логов
        document.getElementById('log').onclick = handleLog;
    }
}
