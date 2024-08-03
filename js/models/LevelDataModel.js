// Класс содержит информацию о том, на каком уровне 
// используется какой массив.
// Информация добавляется в метод getArrayDB()
// Добавляется уровень здесь и в контроллере MenuController.

// Новая итерация класса, появился сеттер для уровня теста.
// Старый вариант класса остался работать, плюс уровень в конструкторе
// теперь можно не указывать, главное вовремя установить нужный. 

class LevelDataModel
{
    constructor(level = 1)
    {
        this.level = level+0;
        this.ex = new Exercise();
        this.translate = new LanguageController();
        // Число уроков, изменяется в ручную при добавлении урока
        this.tic = 4;
        this.propertyArrayNameButton = [];
        this.arrayNameButton();
    }

    // Здесь заполняется вариант надписи название теста
    // на кнопке правого меню
    arrayNameButton()
    {
        this.propertyArrayNameButton.push(this.translate.translate('To Be, краткая форма'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, вопрос/ответ'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, ответь на вопрос'));
        this.propertyArrayNameButton.push(this.translate.translate('Where/Who...'));
    }

    getArrayDB()
    {
        if (this.level == 1) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            return toBeForms;
        }
        if (this.level == 2) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            return toBeSentences;
        }
        if (this.level == 3) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант ответа'));
            return questionsWithAnswers;
        }

        if (this.level == 4) {
            this.ex.init(this.translate.translate('Вставить правильное слово'));
            return whereThat;
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
