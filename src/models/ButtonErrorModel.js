
export class ButtonErrorModel {

    #setup = {
        url: 'https://amatordd.webd.pro/amatorDed/DFDX/test.php', // ссылка для запроса на сервер, список ошибок
    }

    #state = {
        getErrorList: '',                                         // массив с ошибками из БД
        errorMy: '',
        errorCommon: '',
    }

    getStateButtonErrorModel() {
        return this.#state;
    }

    // кеш карточки заданий, на случай нажатия в будущем на ошибку
    preloadDataModel() {
        // дата и время
        const date = new Date();
        date.toLocaleString('ru-RU');
        // имя рабочего массива
        const nameArrayDb = localStorage.getItem('nameArrayDb');
        // номер теста
        const level = localStorage.getItem('level');
        // номер вопросса
        const randomEl = localStorage.getItem('randomEl');
        // выбранный язык
        const EnglishWithJsLang = localStorage.getItem('EnglishWithJs_lang');
        // режим теста
        const userSelect = localStorage.getItem('user_select');
        // число кубиков indexMax
        const indexMax = localStorage.getItem('indexMax');

        return {
            date,
            nameArrayDb,
            level,
            randomEl,
            EnglishWithJsLang,
            userSelect,
            indexMax,
        }
    }

    // метод возвращает обьект, в котором массив ошибок JSON.
    async getErrorList() {

        const response = await fetch(this.#setup.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=getErrorList'
        });

        return await response.json();
    }

    // посчитать ошибки в базе данных
    async getErrorCount() {
        const response = await fetch(this.#setup.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=getErrorCount'
        });
        const data = await response.json();
        return data;
    }

    // дублирование отправленных ошибок, чтобы разделить свои-чужие.
    becapError(errorMessage) {
        let becapOld;
        // если нет хранилища то создать его
        if (localStorage.getItem('errorMessage') === null) 
            localStorage.setItem('errorMessage', JSON.stringify([]));
        // получить архив ошибок из хранилища
        becapOld = JSON.parse(localStorage.getItem('errorMessage'));
        // добавить новую ошибку
        becapOld.push(errorMessage);
        // записать в архив ошибок
        localStorage.setItem('errorMessage', JSON.stringify(becapOld));
    }

    // Метод должен вернуть два массива с ошибками моими, и оставшимися общими
    async separateErrors() {
        let errorMy;
        const errorMessageLocal = localStorage.getItem('errorMessage');

        if (errorMessageLocal) {
            errorMy = JSON.parse(errorMessageLocal);
        } else {
            errorMy = '';
        }

        const response = await this.getErrorList();

        const errorCommon = response.filter(
            error => !errorMy.includes(error)
        );

        this.#state.errorMy = errorMy;
        this.#state.errorCommon = errorCommon;

    }

}