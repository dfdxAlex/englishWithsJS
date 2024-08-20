// Функция подготавливает информацию о том, с каким словом работаем
// Информация сохраняется в кнопке "Сообщить об ошибке", в атрибуте name
// Задача функции собрать из разных мест инфу и поместить в атрибут

function handleClickError()
{
        // закодировать информацию об ошибке и поместить на кнопку
        // отправки ошибки
        const button = document.getElementById('search_error');
        let dataForButtonError = 'englishWithsJS';
        dataForButtonError += '#'+localStorage.getItem('nameArrayDb');
        const question = document.getElementById('question');
        dataForButtonError += '#'+question.innerText;
        button.setAttribute('name', dataForButtonError);
        // console.log(dataForButtonError);
}
