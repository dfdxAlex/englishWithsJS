// функция обрабатывает нажатие на кнопку правого меню 
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

// параметр dataObj - это екземпляр LevelDataModel(i)
// c входящим парамером определяющим масив с данными.(масив теста)

const handleLevelX = (dataObj, constIndexArray = false) =>
    {
        // Сменили тест
        if (parseFloat(localStorage.getItem('level')) !== dataObj.getLevel()) {
            // Записать в хранилище что работаем на неком уровне
            localStorage.setItem('level',dataObj.getLevel());
            SettingForProgram.dataElevator.shift();
        }

        // Блокировка работы с форматом word-assembly если 
        // выбрано изучение слов, там нет предложений, 
        // которые можно собирать по словам
        if (LevelDataModel.mapNameMenu(dataObj.getLevel()-1) === 2) {
            localStorage.setItem('user_select','simple');
        }
    
        // Взять значение индекса из локального хранилища
        // Используется как дефолтное значение
        let randomEl = localStorage.getItem('randomEl');
        
        // Если работает цикл с новым вопросом, то сгенерировать
        // новый номер вопроса
        // Если нужно использовать старый вопрос, то останется
        // дефолтное значение
        if (constIndexArray === false)
            // выбрать случайную позицию из массива вопроссов
            // данный массив хранит в себе вопроссы и ответы.
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);

        // Нужно проверить дополнительно входит ли старый
        // значение вопроса в рабочий массив. Если не входит, то пользователь
        // переключил тесты и можно спокойно сгенерировать новый вопрос.
        if (parseInt(randomEl) > dataObj.getArrayDB().length-1) {
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);
        }

        if (randomEl == null) {
            randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);
        }

        //Записать в сторадж выбранный индекс
        localStorage.setItem('randomEl', randomEl);
        let mas = dataObj.getArrayDB()[randomEl];

        // Блок проверяет есть ли в рабочем массиве свойство nameLeson
        // Если есть, то через одноимённую переменную оно передается в WorkingField
        // Где используется для установки в заголовок теста названия теста.
        let nameLeson = false;
        if ('nameLeson' in dataObj.getArrayDB())
            nameLeson = dataObj.getArrayDB().nameLeson;

        // Тест уровня Simple
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (SettingForProgram.selectTypeTest === 'simple') {
            document.getElementById('working_field')
                    .innerHTML = FactoryRegistr.getObject('WorkingField').init(mas, nameLeson);
        }
        
        // Тест уровня Word-assembly
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        if (SettingForProgram.selectTypeTest === 'word-assembly') {
            document.getElementById('working_field')
                    .innerHTML = FactoryRegistr.getObject('WorkingField').initWordAssembly(mas, nameLeson);
        }

        // Тест уровня Word-assembly-not-translate
        // создать рабочее поле с вопроссом и вариантами ответа
        // поместить форму в соответствующий div
        const property = {
            constIndexArray
        };
        if (SettingForProgram.selectTypeTest === 'word-assembly-not-translate') {
            document.getElementById('working_field')
                    .innerHTML = FactoryRegistr.getObject('WorkingField').initWordAssemblyNotTranslate(mas, nameLeson, property);
        selectLightNormalHard();
        }
        
        // Объект накидывает на кнопки обработчики 
        // соответствующих событий, ответ правильный или нет
        FactoryRegistr.getObject('EventController').init();
    };
