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
         // запоминает сообщение для ошибки
        this.prepareErrorData();

        // Записать текущее значение карточки с вопроссами в глобальный объект AppModel,
        // для использования на следующей итерации при необходимости
        this.syncState();

        // накинуть событие на кнопку "Сообщить об ошибке"
        this.setupErrorReporting();
        // рендер пиктограмки о наличии ошибок в динамическое меню
        this.buttonErrorView.renderErrorEmoji(this.buttonErrorModel.getErrorCount.bind(this.buttonErrorModel));
        
        // переделать на короткие участки, максимум работы через контроллер
        // событие на динамическую кнопку ошибок в динамическом меню
        this.buttonErrorView.handleButtonErrorDinamic(
            this.buttonErrorModel.separateErrors.bind(this.buttonErrorModel),
            this.buttonErrorModel.getStateButtonErrorModel.bind(this.buttonErrorModel)
        );
    }

    // Дорого переносить данную функцию в модели
    // Метод берет данные текущего теста и записывает в глобальный объект состояния AppModel
    // Используется эта информация при клике на кнопку Сообщении об ошибке.
    syncState() {
        // Записать текущее значение карточки с вопроссами в глобальный объект AppModel
        // для использования на следующей итерации при необходимости
        // setTimeout (() => {
            AppModel.mapQuestionModel = this.#state.mapQuestionModel;
            AppModel.mapQuestionView = this.#state.mapQuestionView;
        // }, 0);
    }

    // запоминает сообщение для ошибки
    prepareErrorData() {
            // вытянуть из рабочего массива текущий вопрос с вариантами ответов
            this.#state.mapQuestionModel = this.buttonErrorModel.preloadDataModel();

            // получить массив с текущим юнитом из LevelDataModel для передачи в preloadDataModel
            const arrayForActualUnit = this.levelDataModel.getArrayDB();
            
            // Зафиксировать текущие данные тестового вопросса после полного рендеринга.
            this.#state.mapQuestionView = this.buttonErrorModel.preloadDataView(arrayForActualUnit[this.#state.mapQuestionModel.randomEl]);
    }

// зарегить событие на кнопку "Сообщить об ошибке"
setupErrorReporting() {
    // если событие на кнопку "Сообщить об ошибке" в динамическом меню уже накидывалось, то выйти
    if (this.#state.hundleErrorReporting) return;
    // установить true флаг для события
    this.#state.hundleErrorReporting = true;

    // Накинуть новое событие
    // Клик по кнопке Сообщить об ошибке
    // this.#elements.button.addEventListener('click', this.handleErrorBind, {once: true});
    this.#elements.button.addEventListener('click', this.handleErrorBind);
}

// функция события на кнопке добавления ошибок.
hundleErrorReporting(event) {

        // Если падает ящик заблокировать отправку ошибки
        const selectBoobleUp = document.getElementById('boobleUp');
        if (selectBoobleUp !== null) {
                console.log('Ящик ещё падает');
                event.preventDefault(); // Не выполнять стандартное действие
                return;
            }

        // сбросить флаг наличия обработчика события клика по кнопке добавления ошибок
        this.#state.hundleErrorReporting = false;

        // создать строку из предыдущего вопросса, информация в глобальном AppModel
        const errorMessage = JSON.stringify({...AppModel.mapQuestionModel, ...AppModel.mapQuestionView});


        //Создать сам запрос к серверу
        const dataRequest = 'name=' + encodeURIComponent(errorMessage);
        //Запрос отправляется когда сеттеру fetchData придать значение
        //Ответ будет в геттере fetchData
        httpAsk.fetchData = dataRequest;

        // снимаем обработчик клика только после успешной отправки
        this.#elements.button.removeEventListener('click', this.handleErrorBind);

        // продублировать запись ошибки в локальное хранилище, для разделения своя-чужая ошибка
        this.buttonErrorModel.becapError(errorMessage);


    }

    // обертка для рендеринга кнопки - имодзи в динамическое меню, кнопка ошибок
    renderButtonErrorForDinamicMenu() {
        // console.log('сработала обёртка');
        this.buttonErrorView.renderErrorEmoji(this.buttonErrorModel.getErrorCount.bind(this.buttonErrorModel));
    }

}


// Функция подготавливает информацию о том, с каким словом работаем
// Информация сохраняется в кнопке "Сообщить об ошибке", в атрибуте name
// Задача функции собрать из разных мест инфу и поместить в атрибут
// Поглощена данным классом MVC