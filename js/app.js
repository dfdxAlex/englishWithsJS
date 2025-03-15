// Основной файл приложения
// Описывается событие загрузки документа
window.onload = () => {
    diament();
    nav();
    htmlOldQuestions();
    daimentInfo();
    htmlHelp();
    //htmlOldQuestions();
    buttonSound();

    // Запуск контроллера языковых настроек
    FactoryRegistr.getObject("LanguageController").init();
    
    FactoryRegistr.getObject('MenuController').init();

    // событие на кнопку "Сообщить об ошибке"
    handleSearchError();

    // Достать из регистра объект переводчика
    resetBottonError();

    // нарисовать невидимое меню Сеттинг
    menuSettingView();
    // спрятать все ненужные блоки и показать меню Настроек
    document.querySelector('#setting').onclick = activationMenuSetting;
    
    // обработчил для клика по одному из вариантов выбора теста
    // присвоив свойство true принудительно обновляет вопрос
    document.getElementById('btnGroupDrop1').onclick = () => {
        FactoryRegistr.getObject('WorkingField').resetQuestion = true;
    }
    let divCreate = document.createElement("div");
    let putEl = false;
    let arrayTic = () => {
        return Math.floor(Math.random() * 3) -1 ;
    }
    let lag = 3;
    let numberRand = 0;
    let propertyTest;

    setInterval(() => {
        if (SettingForProgram.buttonCheckY > 50) {
            if (lag < 0) {
                numberRand = arrayTic();
                lag = 3;
            }
            lag--;

            SettingForProgram.buttonCheckX+=numberRand;
            divCreate.style.left = SettingForProgram.buttonCheckX + "px"; // Начальная позиция
            divCreate.style.top = SettingForProgram.buttonCheckY + "px";

            if (!putEl || propertyTest < SettingForProgram.buttonCheckY) {
                if (SettingForProgram.diamant === '-1') {
                    divCreate.style.backgroundColor = "red";
                } else if (SettingForProgram.diamant === '0') {
                    divCreate.style.backgroundColor = "#8b00ff";
                } else {
                    divCreate.style.backgroundColor = "green";
                }
                divCreate.innerText = SettingForProgram.diamant;
                divCreate.style.color = "white";
                divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
                divCreate.style.border = "1px solid black";
                divCreate.style.borderRadius = "50%";
                document.body.appendChild(divCreate);
                putEl = true;
            }

            SettingForProgram.buttonCheckY-=1;
            propertyTest = SettingForProgram.buttonCheckY;
        } else {
            divCreate.innerText = '';
            putEl = false;
        }
    }, 10);
};



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
