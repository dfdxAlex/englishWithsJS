
// Накидывает обработчик события для изменения языка

export function handleForSelectLangauge()
{
    // вставить обработчик событий
    document.getElementById("languageSelect").onchange = function(event) {

        // получить данные о выбранном языке из формы
        const selectedValue = event.target.value;

        // запомнить выбор языка
        localStorage.setItem('EnglishWithJs_lang',selectedValue);
    };
}