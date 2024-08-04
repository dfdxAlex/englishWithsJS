// функция обрабатывает нажатие на кнопку правого меню 
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

const handleLevelX = (dataObj) =>
    {
        // Записать в хранилище что работаем на неком уровне
        localStorage.setItem('level',dataObj.getLevel());
    
        // выбрать случайную позицию из массива toBeForms
        // данный массив хранит в себе вопроссы и ответы.
        const randomEl = getRandomInt(0, dataObj.getArrayDB().length-1);
        localStorage.setItem('randomEl', randomEl);
        let mas = dataObj.getArrayDB()[randomEl];
    
        // создать рабочее поле с вопроссом и вариантами ответа
        const workingField = new WorkingField(mas);
    
        // поместить форму в соответствующий div
        document.getElementById('working_field')
                .innerHTML = workingField.init();
    
        // Объект накидывает на кнопки обработчики 
        // соответствующих событий, ответ правильный или нет
        new EventController();
        return dataObj;
    }
    
    
    