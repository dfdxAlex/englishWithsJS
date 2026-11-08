import { ButtonErrorModel } from '../models/ButtonErrorModel.js';
import { ButtonErrorView } from '../view/ButtonErrorView.js';
import { httpAsk } from '../models/HttpClient.js';
import { AppModel } from '../models/AppModel.js';
import { LanguageController } from './LanguageController.js';

export class ButtonErrorController {
    // пришлось сделать синглтон
    static instance = null;

    constructor({levelDataModel}) {
        if (ButtonErrorController.instance) {
            return ButtonErrorController.instance;
        }

        this.levelDataModel = levelDataModel;
        this.languageController = new LanguageController();
        this.buttonErrorView = new ButtonErrorView({translate:this.languageController});
        this.buttonErrorModel = new ButtonErrorModel();
        
        // вернуть ссылку на кнопку search_error
        this.#elements.button = this.buttonErrorView.getButtonSearchError(); 

        // вернуть список ошибок
        this.buttonErrorModel.getErrorList();

        // создать независимую функцию с текущим контекстом для события нажатия на кнопку
        // добавление ошибок
        this.handleErrorBind = this.hundleErrorReporting.bind(this);

        ButtonErrorController.instance = this;
    }

    #elements = {
        button: '',                                 // ссылка на кнопку
    }   

    #state = {
        mapQuestionView:AppModel.mapQuestionView,    // очищенное содержимое карты вопросса из DOM
        mapQuestionModel:AppModel.mapQuestionModel,  // очищенное содержимое карты вопросса из программы
        hundleErrorReporting: false,                 // флаг установленного обработчика клика
    }

    init() {

        // Записать текущее значение карточки с вопроссами в глобальный объект AppModel,
        // для использования на следующей итерации при необходимости
        this.syncState();

        this.prepareErrorData();
        this.setupErrorReporting();
        this.buttonErrorView.renderErrorEmoji(this.buttonErrorModel.getErrorCount.bind(this.buttonErrorModel));
        
        // переделать на короткие участки, максимум работы через контроллер
        // событие на динамическую кнопку ошибок в динамическом меню
        this.buttonErrorView.handleButtonErrorDinamic(
            this.buttonErrorModel.separateErrors.bind(this.buttonErrorModel),
            this.buttonErrorModel.getStateButtonErrorModel.bind(this.buttonErrorModel)
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
            // загнать в this.#state.mapQuestionModel данные для работы с ошибками

            this.#state.mapQuestionModel = this.buttonErrorModel.preloadDataModel();

            // получить массив с текущим юнитом из LevelDataModel для передачи в preloadDataModel
            const arrayForActualUnit = this.levelDataModel.getArrayDB();
            // console.log(arrayForActualUnit);
            
            // Зафиксировать текущие данные тестового вопросса после полного рендеринга.
            this.#state.mapQuestionView = this.buttonErrorModel.preloadDataView(arrayForActualUnit[this.#state.mapQuestionModel.randomEl]);

                // Протолкнуть данные ...


        },0);
    }

setupErrorReporting() {


    if (this.#state.hundleErrorReporting) return;
    this.#state.hundleErrorReporting = true;

    // Накинуть новое событие
    // Клик по кнопке Сообщить об ошибке
    this.#elements.button.addEventListener('click', this.handleErrorBind, {once: true});
}

// функция события на кнопке добавления ошибок.
hundleErrorReporting(event) {
        // сбросить флаг наличия обработчика события клика по кнопке добавления ошибок
        this.#state.hundleErrorReporting = false;

        const errorMessage = JSON.stringify({...AppModel.mapQuestionModel, ...AppModel.mapQuestionView});
        // создать строку из предыдущего вопросса, информация в глобальном AppModel

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

    }

}


// Функция подготавливает информацию о том, с каким словом работаем
// Информация сохраняется в кнопке "Сообщить об ошибке", в атрибуте name
// Задача функции собрать из разных мест инфу и поместить в атрибут
// Поглощена данным классом MVC