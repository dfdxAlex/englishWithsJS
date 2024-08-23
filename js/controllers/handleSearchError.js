// Функция находит кнопку "Сообщить об ошибке" и накидывает событие.
// Это событие получает данные из атрибута name этой кнопки и отправляет
// эти данные на сервер.Сервер проверяет есть ли такая запись и если нет
// то дописывает, если есть, то игнорирует.
// Функция запускается в самом начале, в файле app.js

function handleSearchError() {

    const buttonError = document.getElementById('search_error');
    
    // Добавляем обработчик события click
    buttonError.addEventListener('click', function () {
        
        const getAttrib = buttonError.getAttribute('name');
        if (getAttrib === 'englishWithsJS') return false;

        // Создаём объект XMLHttpRequest для создания и отправки запросса
        const xhr = new XMLHttpRequest();
        xhr.timeout = 160000; // 5000 миллисекунд = 5 секунд

        // инициализация нового запросса, тип Post и адресс обработчика
        xhr.open('POST', 'https://amatordd.webd.pro/amatorDed/DFDX/test.php', true); // Укажите URL вашего скрипта на сервере

        // установить заголовок Content-Type и тип его кодировки
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Отправляем данные на сервер - пара имя=данные
        xhr.send('name=' + encodeURIComponent(getAttrib));

        // проверка ответа, необходима на этапе разработки
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Здесь мы видим результат работы echo
                console.log('Ответ сервера:', xhr.responseText);
            } else {
                console.error('Ошибка:', xhr.status, xhr.statusText);
            }
        };

    });
}
