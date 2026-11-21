// класс отвечает за динамическую кнопку с списком ошибок

export class ErrorResolverModel {

    #setup = {
        url: 'https://amatordd.webd.pro/amatorDed/DFDX/test.php', // ссылка для запроса на сервер, список ошибок
    }

    #state = {
        getErrorList: '',                           // массив с ошибками из БД
        errorMy: '',                                // массив с Моими ошибками
        errorCommon: '',                            // массив с Остальными ошибками
    }

    // возвращает ссылку на состояние этого класса
    getStateErrorResolverModel() {
        return this.#state;
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

    // Метод должен вернуть два массива с ошибками моими, и оставшимися общими
    // Работает метод через State класса
    async separateErrors() {
        let errorMy;
        const errorMessageLocal = localStorage.getItem('errorMessage');

        if (errorMessageLocal && errorMessageLocal!=='undefined') {
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

}