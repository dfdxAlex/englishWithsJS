// Функция находит кнопку "Сообщить об ошибке" и накидывает событие.
// Это событие получает данные из атрибута name этой кнопки и отправляет
// эти данные на сервер.Сервер проверяет есть ли такая запись и если нет
// то дописывает, если есть, то игнорирует.
// Функция запускается в самом начале, в файле app.js

function handleSearchError() {

    const buttonError = document.getElementById('search_error');
    
    // Клик по кнопке Сообщить об ошибке
    buttonError.addEventListener('click', function() {
        //Создать сам запрос к серверу
        const getAttrib = buttonError.getAttribute('name');
        const dataRequest = 'name=' + encodeURIComponent(getAttrib);
        //Запрос отправляется когда сеттеру fetchData придать значение
        //Ответ будет в геттере fetchData
        httpAsk.fetchData = dataRequest;
    });
}
