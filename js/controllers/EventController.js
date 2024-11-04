// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

// объект достаточно просто создать в нужном месте
class EventController {
    init() {
        document.getElementById('option1').onclick = handleOkErr.bind(null,'Ok');

        document.getElementById('option2').onclick = handleOkErr.bind(null,'Error');

        document.getElementById('option3').onclick = handleOkErr.bind(null,'Error');

        document.getElementById('option4').onclick = handleOkErr.bind(null,'Error');
         
        // Добавить обработчик события по кнопке с переводом.
        // Перевод должен появиться только после клика на кнопку
        document.getElementById('translate').onclick = handleTranslateQuestion.bind(null, FactoryRegistr.getObject('WorkingField'));
        
        // обработчик события клика по кнопке логов
        document.getElementById('log').onclick = handleLog;
    }
}
