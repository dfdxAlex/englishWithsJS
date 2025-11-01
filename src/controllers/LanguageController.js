// Класс запускает функцию появления кнопок и обрабатывает их
// нажатие, записывает выбор пользователя в локал сторадж

// так-же в классе реализован переводчик. Для работы следует
// создать объект и запустить метод.
// const translate = new LanguageController();

// метод сам проверяет какой язык выбрал пользователь
// в качестве аргумента передается русский аналог фразы

import { exportBDTranslate } from '../models/exportBDTranslate.js';

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

}
