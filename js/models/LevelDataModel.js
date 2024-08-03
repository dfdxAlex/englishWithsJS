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
        this.tic = 3;
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

    getArrayDB()
    {
        if (this.getLevel() == 1) {
            // Ключ для перевода задания
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            // Возврат нужного массива
            return toBeForms;
        }
        if (this.getLevel() == 2) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            return toBeSentences;
        }
        if (this.getLevel() == 3) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант ответа'));
            return questionsWithAnswers;
        }

        return false;
    }
}
