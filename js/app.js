// Основной файл приложения
// Описывается событие загрузки документа
window.onload = () => {
    diament();
    nav();
    htmlHelp();
    htmlOldQuestions();
    buttonSound();

    // Запуск контроллера языковых настроек
    FactoryRegistr.getObject("LanguageController").init();
    
    FactoryRegistr.getObject('MenuController').init();

    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();

    // Достать из регистра объект переводчика
    resetBottonError();
};

// Что можно узнать из локального хранилища localStorage.getItem
// nameArrayDb - имя массива, который используется в текущем тесте
// level - номер текущего уровня - теста.
// randomEl - индекс текущего вопросса из массива.
// EnglishWithJs_lang - выбранный язык ru, en, pl, eu
// 'intTranslate_'+level - число заказанных подсказок на каждом уровне
// sk_a0c451bdcbb8b32e659dca5f6fd1b3d5ff33e432e4d57b34
