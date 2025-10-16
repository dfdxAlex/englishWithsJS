// Выбрать все кнопки и накинуть события правильного и 
// неправильного клика. Первый вариант всегда правильный
// остальные три не правильные.

// объект достаточно просто создать в нужном месте
class EventController {
    init() {

        // Оригинальные обработчики для первого варианта теста
        if (window.SettingForProgram.selectTypeTest === "simple") {
            let optionsOne = document.getElementById('option1');
            let optionsTwo = document.getElementById('option2');
            let optionsThree = document.getElementById('option3');
            let optionsFour = document.getElementById('option4');

            // Сделать образец правильной строки без пробелов. Нужен для:
            // иногда в тестах есть два одинаковых варианта ответов, чтобы они оба сработали, на 
            // них должен быть статус "Ок". Чтобы этот статус повесить на дополнительные варианты
            // ответов нужно эти варианты ответов сравнить с заведомо правильным. Если он такой-же,
            // то дать статус Ok, если отличается то Error
            let optionsOneString = optionsOne.innerText.replaceAll(' ','');
            let optionsTwoString = optionsTwo.innerText.replaceAll(' ','');
            let optionsThreeString = optionsThree.innerText.replaceAll(' ','');
            let optionsFourString = optionsFour.innerText.replaceAll(' ','');


            // Всегда правильный вариант ответа, по определению.
            optionsOne.onclick = window.handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsTwoString)
                optionsTwo.onclick = window.handleOkErr.bind(null,'Error');
            else 
                optionsTwo.onclick = window.handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsThreeString)
                optionsThree.onclick = window.handleOkErr.bind(null,'Error');
            else
                optionsThree.onclick = window.handleOkErr.bind(null,'Ok');

            if (optionsOneString !== optionsFourString)
                optionsFour.onclick = window.handleOkErr.bind(null,'Error');
            else
                optionsFour.onclick = window.handleOkErr.bind(null,'Ok');
        }

        // Оригинальные обработчики событий для второго варианта теста
        if (window.SettingForProgram.selectTypeTest === "word-assembly") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }
            // вернуть все кнопки обратно вниз, если был клик по любой кнопку
            let containerForRezult = document.querySelector('#container-for-rezult');
            if (containerForRezult) {
                containerForRezult.onclick = (el) => {
                    el.stopPropagation();
                    const i = localStorage.getItem('level');
                    const obj = new window.LevelDataModel(i);
                    // перерисовать рабочее поле.
                    // параметр true отключает генерацию нового вопросса
                    window.handleLevelX(obj, true);
                };
            }
        }

        // Оригинальные обработчики событий для третьего варианта теста
        // По возможности объеденить этот блок с предыдущим
        if (window.SettingForProgram.selectTypeTest === "word-assembly-not-translate") {
            let setWorkField = document.querySelector('.fieldSetWorkField');
            if (setWorkField) {
                setWorkField.onclick = handleClickTestTwo;
            }
            // вернуть все кнопки обратно вниз, если был клик по любой кнопку
            let containerForRezult = document.querySelector('#container-for-rezult');
            if (containerForRezult) {
                containerForRezult.onclick = (el) => {
                    el.stopPropagation();
                    const obj = new window.LevelDataModel(DataOk.level.int);
                    // перерисовать рабочее поле.
                    // параметр true отключает генерацию нового вопросса
                    window.handleLevelX(obj, true);
                };
            }
        }
        
        // обработчик события клика по кнопке логов
        document.getElementById('log').onclick = window.handleLog;
    }
}
