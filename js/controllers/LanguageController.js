// Класс запускает функцию появления кнопок и обрабатывает их
// нажатие, записывает выбор пользователя в локал сторадж

class LanguageController
{
    init() 
    {
        // Поставить кнопки выбора языка
        // --создать объект меню выбора языка
        const langSelector = new LanguageSelectorView();
        // --выбрать место на странице, куда поместить меню
        const rez = document.getElementById("button_lang_selected");

        const lang = localStorage.getItem('EnglishWithJs_lang') || 'en';

        // --поместить меню, в метод передается значение 
        // --по умолчанию положения меню выбора языка
        rez.innerHTML = langSelector.init(lang);

        // Добавление события изменения выбора языка
        // выбрать меню по id
        const langEn = document.getElementById("languageSelect");
        // Добавить событие изменения выбора
        langEn.addEventListener('change', (event) => {
            // получить данные о выбранном языке из формы
            const selectedValue = event.target.value;
            // запомнить выбор языка
            localStorage.setItem('EnglishWithJs_lang',selectedValue);
        });
    }
}
