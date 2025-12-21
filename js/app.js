// Основной файл приложения
// Описывается событие загрузки документа

window.addEventListener('load', () => {
    htmlHelp();
    buttonSound();
   
    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();

    // Достать из регистра объект переводчика
    resetBottonError();

});


// // инициализация переменных, хранящихся в классе данных
// window.SettingForProgram.initializeToProperty();

// Что можно узнать из локального хранилища localStorage.getItem
// nameArrayDb - имя массива, который используется в текущем тесте
// level - номер текущего уровня - теста.
// randomEl - индекс текущего вопросса из массива.
// EnglishWithJs_lang - выбранный язык ru, en, pl, eu
// 'intTranslate_'+level - число заказанных подсказок на каждом уровне
// 'user_select' - информация о том, какой режим теста выбран
// 'indexMax' - число кнопок, которое получилось при разбитии предложения на отдельные слова

// sk_a0c451bdcbb8b32e659dca5f6fd1b3d5ff33e432e4d57b34
