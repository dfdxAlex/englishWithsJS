// конструктор создает объект для работы с запросами к серверу

// Пример использования
// const httpAsk = new HttpClient();
// const urlRequest = 'https://amatordd.webd.pro/amatorDed/DFDX/test.php';
// const dataRequest = Тело запроса;
// httpAsk.fetchData = dataRequest;

function HttpClient(link = '') {
    this.link = link;
    this._response = null; // Внутренняя переменная для хранения ответа
    this._isLoading = false; // Флаг загрузки, чтобы отслеживать выполнение запроса
    this.request = '';
    // Достать из регистра объект переводчика
    this.translate = new LanguageController();

    Object.defineProperty(this, 'fetchData', {
        get: function() {
            return this._response; // Возвращаем текущий ответ
        },
        set: function(newRequest) {
            this.request = newRequest.replace(/'/g, '\\\'');
            this._fetchData(); // Выполняем запрос при установке нового значения
        }
    });

    Object.defineProperty(this, 'isLoading', {
        get: function() {
            return this._isLoading; // Возвращаем текущий ответ
        },
        set: function(param) {
            this._isLoading = param; // меняем флаг
        }
    });
}

HttpClient.prototype._fetchData = function() {
    if (this._isLoading) return; // Если запрос уже выполняется, не начинаем новый
    this._isLoading = true; // Устанавливаем флаг загрузки

    const xhr = new XMLHttpRequest();
    xhr.timeout = 160000; // 160 секунд

    xhr.open('POST', this.link, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = () => {
        this._isLoading = false; // Сбрасываем флаг загрузки
        if (xhr.status >= 200 && xhr.status < 300) {
            this._response = xhr.responseText; // Сохраняем ответ сервера
            console.log('Ответ сервера:', this._response);
            if (this._response === 'Данные успешно получены!  saveError:Слова нет в БД') {
                document.getElementById('search_error').textContent = this.translate.translate('Ошибка зафиксирована');
            }
            if (this._response === 'Данные успешно получены!  saveError:Cлово есть в БД') {
                document.getElementById('search_error').textContent = this.translate.translate('Упс. Кто-то уже сообщил об этой ошибке.');
            }
        } else {
            console.error('Ошибка:', xhr.status, xhr.statusText);
            document.getElementById('search_error').textContent = 'Ошибка отправки данных'+xhr.statusText;
        }
    };

    xhr.onerror = () => {
        this._isLoading = false; // Сбрасываем флаг загрузки
        console.error('Ошибка сети.');
    };

    xhr.send(this.request);
};

// Объявить объект сразу
// Это нужно для доступа к данным ответа сервера в разное время
const httpAsk = new HttpClient('https://amatordd.webd.pro/amatorDed/DFDX/test.php');
