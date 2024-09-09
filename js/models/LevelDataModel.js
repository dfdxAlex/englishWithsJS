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
        this.tic = 14;
        this.propertyArrayNameButton = [];
        this.arrayNameButton();
        this.lang = localStorage.getItem('EnglishWithJs_lang');
    }

    // Здесь заполняется вариант надписи название теста
    // на кнопке правого меню
    arrayNameButton()
    {
        this.propertyArrayNameButton.push(this.translate.translate('100 слов о еде'));
        this.propertyArrayNameButton.push(this.translate.translate('100 слов про спорт'));
        this.propertyArrayNameButton.push(this.translate.translate('100 слов о путешествии'));
        this.propertyArrayNameButton.push(this.translate.translate('100 слов'));
        this.propertyArrayNameButton.push(this.translate.translate('300 слов'));
        this.propertyArrayNameButton.push(this.translate.translate('500 слов'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, краткая форма'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, вопрос/ответ'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, ответь на вопрос'));
        this.propertyArrayNameButton.push(this.translate.translate('Where/Who...'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное - вопрос'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое + периодичность'));
    }

    getArrayDB()
    {
        if (this.level == 1 && this.lang == "ru") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonFood100');
            return commonFood100;
        }
        if (this.level == 1 && this.lang == "ua") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonFood100ua');
            return commonFood100ua;
        }
        if (this.level == 1 && this.lang == "pl") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonFood100pl');
            return commonFood100pl;
        }
        if (this.level == 2 && this.lang == "ru") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonSport100');
            return commonSport100;
        }
        if (this.level == 3 && this.lang == "ru") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonWalk100');
            return commonWalk100;
        }
        if (this.level == 4 && this.lang == "ru") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonWords100');
            return commonWords100;
        }
        if (this.level == 5 && this.lang == "ru") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonWords300');
            return commonWords300;
        }
        if (this.level == 6 && this.lang == "ru") {
            this.ex.init(this.translate.translate('Выбрать правильный перевод'));
            localStorage.setItem('nameArrayDb','commonWords500');
            return commonWords500;
        }
        if (this.level == 7) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            localStorage.setItem('nameArrayDb','toBeForms');
            return toBeForms;
        }
        if (this.level == 8) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант сокращенной формы глагола to Be'));
            localStorage.setItem('nameArrayDb','toBeSentences');
            return toBeSentences;
        }
        if (this.level == 9) {
            this.ex.init(this.translate.translate('Выбрать правильный вариант ответа'));
            localStorage.setItem('nameArrayDb','questionsWithAnswers');
            return questionsWithAnswers;
        }

        if (this.level == 10) {
            this.ex.init(this.translate.translate('Вставить правильное слово'));
            localStorage.setItem('nameArrayDb','whereThat');
            return whereThat;
        }

        if (this.level == 11) {
            this.ex.init(this.translate.translate('Вставить правильное слово'));
            localStorage.setItem('nameArrayDb','presentContinuous');
            return presentContinuous;
        }

        if (this.level == 12) {
            this.ex.init(this.translate.translate('Выбрать правильный вопрос'));
            localStorage.setItem('nameArrayDb','presetnContiniusQuestion');
            return presetnContiniusQuestion;
        }

        if (this.level == 13) {
            this.ex.init(this.translate.translate('Вставить правильное слово'));
            localStorage.setItem('nameArrayDb','presentSimple');
            return presentSimple;
        }

        if (this.level == 14) {
            this.ex.init(this.translate.translate('Выберите правильно составленное предложение.'));
            localStorage.setItem('nameArrayDb','presentSimpleNever');
            return presentSimpleNever;
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
