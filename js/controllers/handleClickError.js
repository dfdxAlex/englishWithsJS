       
function handleClickError(event)
{
        // закодировать информацию об ошибке и поместить на кнопку
        // отправки ошибки
        const button = document.getElementById('search_error');
        let dataForButtonError = button.getAttribute('name');
        dataForButtonError += '#'+localStorage.getItem('nameArrayDb');
        dataForButtonError += '#'+event.target.innerText;

        // Находим кнопку
        // var button = document.getElementById('search_error');

        // Добавляем обработчик события click
        button.addEventListener('click', function() {
            
            // Создаём объект XMLHttpRequest для создания и отправки запросса
            const xhr = new XMLHttpRequest();
            
            // инициализация нового запросса, тип Post и адресс обработчика
            xhr.open('POST', 'http://amatordd.webd.pro/amatorDed/DFDX/test.php', true); // Укажите URL вашего скрипта на сервере
            
            // установить заголовок Content-Type и тип его кодировки
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // Отправляем данные на сервер - пара имя=данные
            // data="hello";
            xhr.send('name=' + encodeURIComponent(dataForButtonError));

            // проверка ответа, необходима на этапе разработки
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Здесь мы видим результат работы echo
                    console.log('Ответ сервера:', xhr.responseText);
                } else {
                    console.error('Ошибка:', xhr.status, xhr.statusText);
                }
            };
            
        });
}
