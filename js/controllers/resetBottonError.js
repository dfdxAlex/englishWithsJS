function resetBottonError()
{
        // Достать из регистра объект переводчика
        const translate = FactoryRegistr.getObject('LanguageController');

        // Сброс состояния кнопки
        document.getElementById('search_error').textContent = translate.translate('Сообщить об ошибке');

        // перерисовать статус диамантов
        //diament();
}
