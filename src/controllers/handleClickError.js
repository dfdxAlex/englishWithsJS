// Функция подготавливает информацию о том, с каким словом работаем
// Информация сохраняется в кнопке "Сообщить об ошибке", в атрибуте name
// Задача функции собрать из разных мест инфу и поместить в атрибут
// Функция запускается как функция из handleOkErr()

export function handleClickError()
{
        // выбрать кнопку Сообщить об ошибке
        const button = document.getElementById('search_error');

        // создать сообщение об ошибке
        let dataForButtonError = '#'+localStorage.getItem('nameArrayDb');

        // Выбрать поле Предыдущий вопрос
        let question = document.getElementById('question_old');
        let questionOld = '';
        // Таймер на ноль секунд, чтобы вынести эту функцию отдельно
        // в работу. Необходимо для успевания рендеринга

        setTimeout (()=>{
        questionOld = question.textContent;
        // Проверить есть ли в предыдущем вопросе три точки или три подчёркивания
        // Если какой-то из этих символов есть, то выбрать предыдущий Ответ
        // Из дива с предыдущим Ответом взять ответ.
        const questionBool = questionOld.includes('...') || questionOld.includes('___');
        if (questionBool) {
            question = document.getElementById('clicked_element');
            questionOld = question.textContent;
        }
        
        dataForButtonError += '#'+questionOld;
        button.setAttribute('name', dataForButtonError);
},0);
}
