// Основной файл приложения
// Описывается событие загрузки документа
window.onload = () => {
    diament();
    nav();
    htmlOldQuestions();
    //daimentInfo();
    htmlHelp();
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


    // постоянная часть для всплывающего шарика
    let divCreate = document.createElement("div");
    divCreate.innerText = '💎';
    let putEl = false;
    let arrayTic = () => {
        return Math.floor(Math.random() * 3) -1 ;
    }
    let lag = 6;
    let numberRand = 0;
    let propertyTest;

    setInterval(() => {
        if (SettingForProgram.buttonCheckY > 50) {
            // Здесь задается смещение вправо-влево
            if (lag < 0) {
                numberRand = arrayTic();
                lag = 16;
                // если приближаемся к правой стороне то скорректировать тренд в левую
                if (window.innerWidth - SettingForProgram.buttonCheckX < 100) {
                    numberRand = -1;
                }
            }
            lag--;

            SettingForProgram.buttonCheckX+=numberRand;
            divCreate.style.left = SettingForProgram.buttonCheckX + "px"; // Начальная позиция
            divCreate.style.top = SettingForProgram.buttonCheckY + "px";

            if (!putEl || propertyTest < SettingForProgram.buttonCheckY) {
                //let pre = '';
                let pre = '<span style="font-size: 50px;">💎</span>';
                let diamant = `<span class="text-for-booble">${SettingForProgram.diamant}</span>`;
                if (SettingForProgram.diamant === '-1') {
                    pre = '<span style="font-size: 50px;">💀</span>';
                    diamant = '';
                }
                if (SettingForProgram.diamant === '0') {
                    pre = '<span style="font-size: 50px;">🎓</span>';
                    diamant = '';
                }
                // раскрашивание фона
                // if (SettingForProgram.diamant === '-1') { 🎓
                //     divCreate.style.backgroundColor = "red";
                // } else if (SettingForProgram.diamant === '0') {
                //     divCreate.style.backgroundColor = "#8b00ff";
                // } else {
                //     divCreate.style.backgroundColor = "green";
                //     pre = '+';
                // }
                // постоянные настройки пузырька
                divCreate.innerHTML = pre+diamant;
                divCreate.style.color = "black";
                divCreate.style.fontSize = "20px";
                divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
                //divCreate.style.border = "1px solid black";
                //divCreate.style.borderRadius = "50%";
                document.body.appendChild(divCreate);
                putEl = true;
            }

            // Скорость всплытия
            SettingForProgram.buttonCheckY-=1;
            // Переменняя propertyTest нужна для контроля факта
            // необходимости нового пузыря до окончания всплытия старого
            // Выше в коде проверяется, если фактический Y стал снова больше
            // то прекращаем старое всплытие и начинаем новое.
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
