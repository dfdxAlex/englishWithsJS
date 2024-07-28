// функция обрабатывает нажатие на кнопку меню Unit1
// При нажатии на кнопку первого урока рисуется поле 
// первого урока, запоминается состояние первого урока,
// и на активные элементы накидываются обработчики событий.
// данная функция так-же является обработчиком событий.

const handleLevel1 = () =>
{
    // Записать в хранилище что работаем на уровне 1
    localStorage.setItem('level','1');

    // выбрать случайную позицию из массива toBeForms
    // данный массив хранит в себе вопроссы и ответы.
    let mas = toBeForms[getRandomInt(0, toBeForms.length-1)];

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


