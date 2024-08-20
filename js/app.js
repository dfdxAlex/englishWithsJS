// Основной файл приложения
// Описывается событие загрузки документа
window.addEventListener('load', () => {
    // Запуск контроллера языковых настроек
    FactoryRegistr.getObject("LanguageController").init();
    
    FactoryRegistr.getObject('MenuController').init();

    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();
});


