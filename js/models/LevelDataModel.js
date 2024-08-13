// Класс содержит информацию о том, на каком уровне 
// используется какой массив.
// Информация добавляется в метод getArrayDB()
// Добавляется уровень здесь и в контроллере MenuController.

// Новая итерация класса, появился сеттер для уровня теста.
// Старый вариант класса остался работать, плюс уровень в конструкторе
// теперь можно не указывать, главное вовремя установить нужный.

// Чтобы добавить новый тест необходимо создать массив, пример 
// есть в предыдущих тестах.
// Сделать два перевода и добавить их в BDTranslate. Один для
// вопросса, пользователь должен знать что делать.
// Второй перевод туда же и он для названия кнопки на разных языках
// Свойство this.tic нужно увеличить на 1
// Добавить запись в arrayNameButton() по аналогии с предыдущими
// Добавить в if (this.level == 1) {
//               this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
//               return toBeForms;
//            } по аналогии. Перевод - это вопрос, а return должен
// вернуть массив для соответствующего уровня.

class LevelDataModel
{
    constructor(level = 1)
    {
        this.level = level+0;
        this.ex = new Exercise();
        this.translate = FactoryRegistr.getObject("LanguageController");
        // Число уроков, изменяется в ручную при добавлении урока
        this.tic = 11;
        this.propertyArrayNameButton = [];
        this.arrayNameButton();
    }

    // Здесь заполняется вариант надписи название теста
    // на кнопке правого меню
    arrayNameButton()
    {
        this.propertyArrayNameButton.push('100 слов еда');
        this.propertyArrayNameButton.push('100 слов спорт');
        this.propertyArrayNameButton.push('100 слов путешествия');
        this.propertyArrayNameButton.push('100 слов');
        this.propertyArrayNameButton.push('300 слов');
        this.propertyArrayNameButton.push(this.translate.translate('500 слов'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, краткая форма'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, вопрос/ответ'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, ответь на вопрос'));
        this.propertyArrayNameButton.push(this.translate.translate('Where/Who...'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное'));
    }

    getArrayDB()
    {
        if (this.level == 1) {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            return commonFood100;
        }
        if (this.level == 2) {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            return commonSport100;
        }
        if (this.level == 3) {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            return commonWalk100;
        }
        if (this.level == 4) {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            return commonWords100;
        }
        if (this.level == 5) {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            return commonWords300;
        }
        if (this.level == 6) {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            return commonWords500;
        }
        if (this.level == 7) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            return toBeForms;
        }
        if (this.level == 8) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            return toBeSentences;
        }
        if (this.level == 9) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант ответа'));
            return questionsWithAnswers;
        }

        if (this.level == 10) {
            this.ex.init(this.translate.translate('Вставить правильное слово'));
            return whereThat;
        }

        if (this.level == 11) {
            this.ex.init(this.translate.translate('Вставить правильное слово'));
            return presentContinuous;
        }

        return false;
    }

    getArrayNameButton()
    {
        return this.propertyArrayNameButton;
    }

    getLevel()
    {
        return this.level;
    }

    getTic()
    {
        return this.tic;
    }

    setLevel(level) 
    {
        this.level = level;
    }
}
