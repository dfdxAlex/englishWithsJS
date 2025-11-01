function resetBottonError()
{
        // Достать из регистра объект переводчика
        const translate = window.LanguageController;

        // Сброс состояния кнопки
        document.getElementById('search_error').textContent = translate.translate('Сообщить об ошибке');
}
