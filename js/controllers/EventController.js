// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

// объект достаточно просто создать в нужном месте
class EventController {
    init() {
        const option1 = document.getElementById('option1');
        option1.addEventListener('click', (event) => {handleOkErr('Ok',event)});

        const option2 = document.getElementById('option2');
        option2.addEventListener('click', (event) => {handleOkErr('Error',event)});

        const option3 = document.getElementById('option3');
        option3.addEventListener('click', (event) => {handleOkErr('Error',event)});

        const option4 = document.getElementById('option4');
        option4.addEventListener('click', (event) => {handleOkErr('Error',event)});
         
        // Добавить обработчик события по кнопке с переводом.
        // Перевод должен появиться только после клика на кнопку
        const translateButton = document.getElementById('translate');
        translateButton.addEventListener('click',(event)=>{handleTranslateQuestion(event, FactoryRegistr.getObject('WorkingField'))});

        // обработчик события клика по кнопке логов
        const buttonLog = document.getElementById('log');
        buttonLog.addEventListener('click',()=>{handleLog()});

    }
}
