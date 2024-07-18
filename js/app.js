// Основной файл приложения
// Описывается событие загрузки документа
window.addEventListener('load', () => {
    // Запуск контроллера языковых настроек
    LanguageController = new LanguageController();
    LanguageController.init();

    // homeController.init();
});
