// Основной файл приложения
// Описывается событие загрузки документа
window.addEventListener('load', () => {
    // Запуск контроллера языковых настроек
    FactoryRegistr.getObject("LanguageController").init();
    
    let menuController = new MenuController();
    menuController.init();
});


