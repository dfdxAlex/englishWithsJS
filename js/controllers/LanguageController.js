// Класс запускает функцию появления кнопок и обрабатывает их
// нажатие, записывает выбор пользователя в локал сторадж

class LanguageController
{
    init() 
    {
        const LangSelector = new LanguageSelectorView();
        const rez = document.getElementById("button_lang_selected");
        rez.innerHTML = LangSelector.init('en');
    }
}
