// инкапсулированные классы для разбивки большого класса контролирующего кнопки: Добавить ошибку
// и кнопку-треугольник в динамическом меню списка ошибок

// import { ErrorResolverModel } from './ButtonErrorModel/ErrorResolverModel.js';

export class ButtonErrorModel {
    constructor() {
        // this.errorResolverModel = new ErrorResolverModel();

        // const stateOfErrorResolverModel = this.errorResolverModel.getStateErrorResolverModel();
        // this.#state.errorMy = stateOfErrorResolverModel.errorMy;
        // this.#state.errorCommon = stateOfErrorResolverModel.errorCommon;
    }

    // #setup = {
    //     url: 'https://amatordd.webd.pro/amatorDed/DFDX/test.php', // ссылка для запроса на сервер, список ошибок
    // }

    // #state = {
    //     getErrorList: '',                                         // массив с ошибками из БД
    //     errorMy: '',
    //     errorCommon: '',
    // }

    // возвращает ссылку на состояние этого класса
    // getStateButtonErrorModel() {
    //     return this.#state;
    // }

    // Первая часть собранной информации о текущем вопроссе для теста. 
    // Информация собрана для будущего использования при отправке ошибки на сервер
    // preloadDataModel() {
    //     // дата и время
    //     const date = new Date();
    //     date.toLocaleString('ru-RU');
    //     // имя рабочего массива
    //     const nameArrayDb = localStorage.getItem('nameArrayDb');
    //     // номер теста
    //     const level = localStorage.getItem('level');
    //     // номер вопросса
    //     const randomEl = localStorage.getItem('randomEl');
    //     // выбранный язык
    //     const EnglishWithJsLang = localStorage.getItem('EnglishWithJs_lang');
    //     // режим теста
    //     const userSelect = localStorage.getItem('user_select');
    //     // число кубиков indexMax
    //     const indexMax = localStorage.getItem('indexMax');

    //     return {
    //         date,
    //         nameArrayDb,
    //         level,
    //         randomEl,
    //         EnglishWithJsLang,
    //         userSelect,
    //         indexMax,
    //     }
    // }

    // // кеш карточки заданий, на случай нажатия в будущем на ошибку
    // // вторая часть, по новому алгоритму данные берутся непосредственно из
    // // текущего вопросса
    // preloadDataView(arrayForActualUnit) {
    //     const fieldsetLegend = localStorage.getItem('nameArrayDb');

    //     const question = arrayForActualUnit[0];
    //     const option1 = arrayForActualUnit[1];
    //     const option2 = arrayForActualUnit[2];
    //     const option3 = arrayForActualUnit[3];
    //     const option4 = arrayForActualUnit[4];

    //     return {
    //         fieldsetLegend,
    //         question,
    //         option1,
    //         option2,
    //         option3,
    //         option4,
    //     }
    // }

    // // метод возвращает обьект, в котором массив ошибок JSON.
    // async getErrorList() {

    //     const response = await fetch(this.#setup.url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: 'name=getErrorList'
    //     });

    //     return await response.json();
    // }

    // // посчитать ошибки в базе данных
    // async getErrorCount() {
    //     const response = await fetch(this.#setup.url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: 'name=getErrorCount'
    //     });
    //     const data = await response.json();
    //     // console.log('число ошибок:',data);
    //     return data;
    // }

    // // дублирование отправленных ошибок, чтобы разделить свои-чужие.
    // becapError(errorMessage) {
    //     let becapOld;
    //     // если нет хранилища то создать его
    //     const errMessage = localStorage.getItem('errorMessage');
    //     if (errMessage === null || errMessage === 'undefined') 
    //         localStorage.setItem('errorMessage', JSON.stringify([]));
    //     // получить архив ошибок из хранилища
    //     becapOld = JSON.parse(localStorage.getItem('errorMessage'));
    //     // добавить новую ошибку
    //     becapOld.push(errorMessage);
    //     // записать в архив ошибок
    //     localStorage.setItem('errorMessage', JSON.stringify(becapOld));
    // }

    // // Метод должен вернуть два массива с ошибками моими, и оставшимися общими
    // // Работает метод через State класса
    // async separateErrors() {
    //     let errorMy;
    //     const errorMessageLocal = localStorage.getItem('errorMessage');

    //     if (errorMessageLocal && errorMessageLocal!=='undefined') {
    //         errorMy = JSON.parse(errorMessageLocal);
    //     } else {
    //         errorMy = '';
    //     }

    //     const response = await this.errorResolverModel.getErrorList();

    //     const errorCommon = response.filter(
    //         error => !errorMy.includes(error)
    //     );

    //     this.#state.errorMy = errorMy;
    //     this.#state.errorCommon = errorCommon;

    // }

}