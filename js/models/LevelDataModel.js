// Класс содержит информацию о том, на каком уровне 
// используется какой массив.
// Информация добавляется в метод getArrayDB()
// Добавляется уровень здесь и в контроллере MenuController.

class LevelDataModel
{
    constructor(level)
    {
        this.level = level+0;
        this.ex = new Exercise();
        this.translate = new LanguageController();
    }

    getLevel()
    {
        return this.level;
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
    }
}
