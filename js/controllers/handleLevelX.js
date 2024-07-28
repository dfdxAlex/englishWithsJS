// функция обрабатывает нажатие на кнопку правого меню 
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

const handleLevelX = (arrayDB, level = 1) =>
    {
        // Записать в хранилище что работаем на уровне 2
        localStorage.setItem('level',level);
    
        // выбрать случайную позицию из массива toBeForms
        // данный массив хранит в себе вопроссы и ответы.
        let mas = arrayDB[getRandomInt(0, arrayDB.length-1)];
    
        // создать рабочее поле с вопроссом и вариантами ответа
        const workingField = new WorkingField(mas);
    
        // поместить форму в соответствующий div
        document.getElementById('working_field')
                .innerHTML = workingField.init();
    
        // Объект накидывает на кнопки обработчики 
        // соответствующих событий, ответ правильный или нет
        new EventController();
    
        // поставить вопрос
        const ex = new Exercise();
        const translate = new LanguageController();
        ex.init(translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
    }
    
    
    