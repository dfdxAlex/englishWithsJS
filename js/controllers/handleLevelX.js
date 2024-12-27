// функция обрабатывает нажатие на кнопку правого меню 
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

const handleLevelX = (dataObj, constIndexArray = false) =>
    {
        
        // Записать в хранилище что работаем на неком уровне
        localStorage.setItem('level',dataObj.getLevel());
    
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
        //Записать в сторадж выбранный индекс
        localStorage.setItem('randomEl', randomEl);
        let mas = dataObj.getArrayDB()[randomEl];
    

        // Блок проверяет есть ли в рабочем массиве свойство nameLeson
        // Если есть, то через одноимённую переменную оно передается в WorkingField
        // Где используется для установки в заголовок теста названия теста.
        let nameLeson = false;
        //console.log(dataObj.getArrayDB());
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
        
        // Объект накидывает на кнопки обработчики 
        // соответствующих событий, ответ правильный или нет
        FactoryRegistr.getObject('EventController').init();
        return dataObj;
    }
    
    
    