// Основной файл приложения
// Описывается событие загрузки документа
window.addEventListener('load', () => {
    // Запуск контроллера языковых настроек
    FactoryRegistr.getObject("LanguageController").init();
    
    FactoryRegistr.getObject('MenuController').init();

    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();


});



// Что можно узнать из локального хранилища localStorage.getItem
// nameArrayDb - имя массива, который используется в текущем тесте
// level - номер текущего уровня - теста.
// randomEl - индекс текущего вопросса из массива.
// EnglishWithJs_lang - выбранный язык ru, en, pl, eu
// 'intTranslate_'+level - число заказанных подсказок на каждом уровне
