// Основной файл приложения
// Описывается событие загрузки документа
window.addEventListener('load', () => {
    // Запуск контроллера языковых настроек
    let languageController = new LanguageController();
    languageController.init();

    // homeController.init();
});
