export class ButtonErrorModel {

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
}