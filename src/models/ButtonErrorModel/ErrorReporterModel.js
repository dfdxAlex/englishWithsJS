// класс отвечает за кнопку отправки ошибки на сервер

export class ErrorReporterModel {

    // Первая часть собранной информации о текущем вопроссе для теста. 
    // Информация собрана для будущего использования при отправке ошибки на сервер
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

    // кеш карточки заданий, на случай нажатия в будущем на ошибку
    // вторая часть, по новому алгоритму данные берутся непосредственно из
    // текущего вопросса
    preloadDataView(arrayForActualUnit) {
        const fieldsetLegend = localStorage.getItem('nameArrayDb');

        const question = arrayForActualUnit[0];
        const option1 = arrayForActualUnit[1];
        const option2 = arrayForActualUnit[2];
        const option3 = arrayForActualUnit[3];
        const option4 = arrayForActualUnit[4];

        return {
            fieldsetLegend,
            question,
            option1,
            option2,
            option3,
            option4,
        }
    }

    // дублирование отправленных ошибок, чтобы разделить свои-чужие.
    becapError(errorMessage) {
        let becapOld;
        // если нет хранилища то создать его
        const errMessage = localStorage.getItem('errorMessage');
        if (errMessage === null || errMessage === 'undefined') 
            localStorage.setItem('errorMessage', JSON.stringify([]));
        // получить архив ошибок из хранилища
        becapOld = JSON.parse(localStorage.getItem('errorMessage'));
        // добавить новую ошибку
        becapOld.push(errorMessage);
        // записать в архив ошибок
        localStorage.setItem('errorMessage', JSON.stringify(becapOld));
    }
}