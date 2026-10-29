import { ButtonErrorModel } from '../models/ButtonErrorModel.js';
import { ButtonErrorView } from '../view/ButtonErrorView.js';
import { httpAsk } from '../models/HttpClient.js';
import { AppModel } from '../models/AppModel.js';
import { LanguageController } from './LanguageController.js';


export class ButtonErrorController {

    constructor() {
        this.buttonErrorView = new ButtonErrorView();
        this.buttonErrorModel = new ButtonErrorModel();
        this.languageController = new LanguageController();

        // вернуть ссылку на кнопку search_error
        this.#elements.button = this.buttonErrorView.getButtonSearchError(); 

        // вернуть список ошибок
        this.buttonErrorModel.getErrorList();

    }

    #elements = {
        button: '',                                 // ссылка на кнопку
    }   

    #state = {
        // errorMessage: '',                            // сообщение об ошибке
        // messageOld: '',                              // сообщение из предыдущего ответа
        mapQuestionView:AppModel.mapQuestionView,    // очищенное содержимое карты вопросса из DOM
        mapQuestionModel:AppModel.mapQuestionModel,  // очищенное содержимое карты вопросса из программы
    }

    init() {
        this.prepareErrorData();
        this.setupErrorReporting();
        this.buttonErrorView.renderErrorEmoji(this.buttonErrorModel.getErrorCount.bind(this.buttonErrorModel));
        
        // событие на динамическую кнопку ошибок в динамическом меню
        // console.log(this.buttonErrorModel.getStateButtonErrorModel().errorMy)
        this.buttonErrorView.handleButtonErrorDinamic(
            this.buttonErrorModel.separateErrors.bind(this.buttonErrorModel),
            this.buttonErrorModel.getStateButtonErrorModel.bind(this.buttonErrorModel),
            this.languageController
        );
    }

    // Дорого переносить данную функцию в модели
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

setupErrorReporting() {
    // Клик по кнопке Сообщить об ошибке
    this.#elements.button.addEventListener('click', (event) => {
        const errorMessage = JSON.stringify({...AppModel.mapQuestionModel, ...AppModel.mapQuestionView});
        // создать строку из предыдущего вопросса, информация в глобальном AppModel

        // Записать текущее значение карточки с вопроссами в глобальный объект AppModel,
        // для использования на следующей итерации при необходимости
        this.syncState();

        // Если падает ящик заблокировать отправку ошибки
        const selectBoobleUp = document.getElementById('boobleUp');
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

        // продублировать запись ошибки в локальное хранилище, для разделения своя-чужая ошибка
        this.buttonErrorModel.becapError(errorMessage);

    }, {once: true});
}





}


// Функция подготавливает информацию о том, с каким словом работаем
// Информация сохраняется в кнопке "Сообщить об ошибке", в атрибуте name
// Задача функции собрать из разных мест инфу и поместить в атрибут
// Поглощена данным классом MVC