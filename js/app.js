// Основной файл приложения
// Описывается событие загрузки документа

window.addEventListener('load', () => {
    window.nav;
    htmlHelp();
    buttonSound();
   
    const menuC = new window.MenuController();
    menuC.init();

    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();

    // Достать из регистра объект переводчика
    resetBottonError();

    // // нарисовать невидимое меню Сеттинг
    // menuSettingView();
    // // спрятать все ненужные блоки и показать меню Настроек
    // document.querySelector('#setting').onclick = activationMenuSetting;
   
    // функция отслеживает инфу по ответам и запускает процесс
    // всплытия кристала, шапки или черепа
    boobleUp();
});


// инициализация переменных, хранящихся в классе данных
SettingForProgram.initializeToProperty();

// Что можно узнать из локального хранилища localStorage.getItem
// nameArrayDb - имя массива, который используется в текущем тесте
// level - номер текущего уровня - теста.
// randomEl - индекс текущего вопросса из массива.
// EnglishWithJs_lang - выбранный язык ru, en, pl, eu
// 'intTranslate_'+level - число заказанных подсказок на каждом уровне
// 'user_select' - информация о том, какой режим теста выбран
// 'indexMax' - число кнопок, которое получилось при разбитии предложения на отдельные слова

// sk_a0c451bdcbb8b32e659dca5f6fd1b3d5ff33e432e4d57b34
