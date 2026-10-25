import { AppModel } from '../models/AppModel.js';

export class ButtonErrorModel {

    #setup = {
        url: 'https://amatordd.webd.pro/amatorDed/DFDX/test.php', // ссылка для запроса на сервер, список ошибок
    }

    getMessageError() {
        // создать сообщение об ошибке
        return '#'+localStorage.getItem('nameArrayDb');
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

    // метод возвращает json, в котором массив ошибок JSON. (2 раза закодирован JSON в BD)
    async getErrorList() {

        const response = await fetch(this.#setup.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'name=getErrorList'
        });

        const errors = await response.json();
        // Массив errors - это список всех ошибок
        console.log(errors);
    }

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