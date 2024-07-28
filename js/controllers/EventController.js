// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

// объект достаточно просто создать в нужном месте
class EventController {
    constructor ()
    {
        this.initEventHandlers();
    }
    initEventHandlers() {
        const option1 = document.getElementById('option1');
        option1.addEventListener('click', handleOk);

        const option2 = document.getElementById('option2');
        option2.addEventListener('click', handleError);

        const option3 = document.getElementById('option3');
        option3.addEventListener('click', handleError);

        const option4 = document.getElementById('option4');
        option4.addEventListener('click', handleError);
    }
}
