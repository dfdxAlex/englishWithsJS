// Класс запускает функцию появления кнопок и обрабатывает их
// нажатие, записывает выбор пользователя в локал сторадж

// так-же в классе реализован переводчик. Для работы следует
// создать объект и запустить метод.
// const translate = new LanguageController();
// Или можно использовать статическую фабрику:
// FactoryRegistr.getObject("LanguageController")

// метод сам проверяет какой язык выбрал пользователь
// в качестве аргумента передается русский аналог фразы

import { exportBDTranslate } from '../models/exportBDTranslate.js';
// import { LanguageSelectorView } from '../view/languageSelectorView/LanguageSelectorView.js';

export class LanguageController
{
    constructor() {
       // получить данные о выбранном языке
       this.langStr = localStorage.getItem('EnglishWithJs_lang') || 'ru';
    }
    translate(str) {

        // Если выбран русский язык то нет смысла тратить ресурсы на поиск перевода
        if (this.langStr === 'ru') return str;

        let returnTranslate = '';

        // получить данные о выбранном языке
        let lang=3;

        // преобразовать имя языка в готовый индекс для массива 
        // переводов
        switch(this.langStr) {
            case 'pl': lang = 2;
            break;
            case 'ua': lang = 1;
            break;
        }
        // Если не нашли перевод то вернуть исходный текст
        returnTranslate = str;

        // Поиск совпадений для перевода
        exportBDTranslate().forEach((el)=>{
            // Если нашли совпадение по русскому языку
            // то вернуть соответствующее значение выбранного языка
            if (el[0] == str) {
                returnTranslate = (el[lang]);
            }
        });
        return returnTranslate;
    }

    init() 
    {
        // Поставить кнопки выбора языка
        // --создать объект меню выбора языка
        // const langSelector = new LanguageSelectorView();
        // --выбрать место на странице, куда поместить меню
        // const rez = document.getElementById("button_lang_selected");

        // --поместить меню, в метод передается значение 
        // --по умолчанию положения меню выбора языка
        // rez.innerHTML = langSelector.init(this.langStr);
        // rez.innerHTML = '---';

        // Добавить событие изменения выбора
        // document.getElementById("languageSelect").onchange = function(event) {

        //     // получить данные о выбранном языке из формы
        //     const selectedValue = event.target.value;

        //     // запомнить выбор языка
        //     localStorage.setItem('EnglishWithJs_lang',selectedValue);
        // };
    }
}
