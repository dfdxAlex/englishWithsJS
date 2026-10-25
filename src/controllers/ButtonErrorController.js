import { ButtonErrorModel } from '../models/ButtonErrorModel.js';
import { ButtonErrorView } from '../view/ButtonErrorView.js';
import { httpAsk } from '../models/HttpClient.js';
import { AppModel } from '../models/AppModel.js';

export class ButtonErrorController {

    constructor() {
        this.buttonErrorView = new ButtonErrorView();
        this.buttonErrorModel = new ButtonErrorModel();


        // вернуть ссылку на кнопку search_error
        this.#elements.button = this.buttonErrorView.getButtonSearchError(); 

        // первая часть сообщения об ошибке
        this.#state.errorMessage = this.buttonErrorModel.getMessageError();
        // вернуть содержимое из question_old
        this.#state.messageOld = this.buttonErrorView.getQuestionOld();
    }

    #elements = {
        button: '',                                 // ссылка на кнопку
    }   

    #state = {
        errorMessage: '',                            // сообщение об ошибке
        messageOld: '',                              // сообщение из предыдущего ответа
        mapQuestionView:AppModel.mapQuestionView,    // очищенное содержимое карты вопросса из DOM
        mapQuestionModel:AppModel.mapQuestionModel,  // очищенное содержимое карты вопросса из программы
    }

    init() {
        this.prepareErrorData();
        this.handleSearchError();
    }

    syncState() {
        // Записать текущее значение карточки с вопроссами в глобальный объект AppModel
        // для использования на следующей итерации при необходимости
        setTimeout (() => {
            AppModel.mapQuestionModel = this.#state.mapQuestionModel;
            AppModel.mapQuestionView = this.#state.mapQuestionView;
        }, 0);

    }

    // запоминает сообщение для ошибки
    prepareErrorData() {
        setTimeout (() => {
            // Зафиксировать текущие данные тестового вопросса после полного рендеринга.
            // очистить от пустых полей и запомнить в #state
            this.#state.mapQuestionView = Object.fromEntries(
            Object.entries(this.buttonErrorView.preloadDataView()).filter(([, value]) => value !== undefined)
            );

            this.#state.mapQuestionModel = Object.fromEntries(
            Object.entries(this.buttonErrorModel.preloadDataModel()).filter(([, value]) => value != null)
            );
        },0);
    }


handleSearchError() {

    // Клик по кнопке Сообщить об ошибке
    this.#elements.button.addEventListener('click', (event) => {
        const errorMessage = JSON.stringify({...AppModel.mapQuestionModel, ...AppModel.mapQuestionView});
        // создать строку из предыдущего вопросса, информация в глобальном AppModel
        console.log(errorMessage);

        // Записать текущее значение карточки с вопроссами в глобальный объект AppModel,
        // для использования на следующей итерации при необходимости
        this.syncState();

        // Поискать пузырь, если он есть, то не отправляем ошибку
        // Если падает ящик заблокировать отправку ошибки
        // чтобы не попасть случайно в отправку ошибок
        
        const selectBoobleUp = document.getElementById('boobleUp');
        // console.log('клац',selectBoobleUp);
        if (selectBoobleUp !== null) {
                console.log('Ящик ещё падает');
                event.preventDefault(); // Не выполнять стандартное действие
                return;
            }

        //Создать сам запрос к серверу
        const dataRequest = 'name=' + encodeURIComponent(errorMessage);
        //Запрос отправляется когда сеттеру fetchData придать значение
        //Ответ будет в геттере fetchData
        httpAsk.fetchData = dataRequest;
    }, {once: true});

}


}


// Функция подготавливает информацию о том, с каким словом работаем
// Информация сохраняется в кнопке "Сообщить об ошибке", в атрибуте name
// Задача функции собрать из разных мест инфу и поместить в атрибут
// Поглощена данным классом MVC