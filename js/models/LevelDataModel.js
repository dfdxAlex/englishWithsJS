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
        this.rez = false;
        this.level = level+0;
        this.ex = new Exercise();
        this.translate = FactoryRegistr.getObject("LanguageController");
        // Число уроков, изменяется в ручную при добавлении урока
        this.tic = 16;
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
        this.propertyArrayNameButton.push(this.translate.translate('50 глаголов'));
        this.propertyArrayNameButton.push(this.translate.translate('300 глаголов'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, краткая форма'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, вопрос/ответ'));
        this.propertyArrayNameButton.push(this.translate.translate('To Be, ответь на вопрос'));
        this.propertyArrayNameButton.push(this.translate.translate('Where/Who...'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное - вопрос'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое'));
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое + периодичность'));
    }
    
    selectLevel(exercise, nameArray, level, lang = true)
    {
        if (level == this.level && (lang === true || lang === this.lang)) {
            this.ex.init(this.translate.translate(exercise));
            localStorage.setItem('nameArrayDb',nameArray);
            this.rez = eval(nameArray);
        }
    }
    getArrayDB()
    {
        this.selectLevel('Выбрать правильный перевод','commonFood100',1,'ru');
        this.selectLevel('Выбрать правильный перевод','commonFood100ua',1,'ua');
        this.selectLevel('Выбрать правильный перевод','commonFood100pl',1,'pl');
        this.selectLevel('Выбрать правильный перевод','commonSport100',2,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWalk100',3,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWords100',4,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWords300',5,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWords500',6,'ru');
        this.selectLevel('Выбрать правильный перевод','verbs50',7,'ru');
        this.selectLevel('Выбрать правильный перевод','verbs300',8,'ru');
        this.selectLevel('Выбрать правильный вариант сокращенной формы глагола to Be','toBeForms',9);
        this.selectLevel('Выбрать правильный вариант сокращенной формы глагола to Be','toBeSentences',10);
        this.selectLevel('Выбрать правильный вариант ответа','questionsWithAnswers',11);
        this.selectLevel('Вставить правильное слово','whereThat',12);
        this.selectLevel('Вставить правильное слово','presentContinuous',13);
        this.selectLevel('Выбрать правильный вопрос','presetnContiniusQuestion',14);
        this.selectLevel('Вставить правильное слово','presentSimple',15);
        this.selectLevel('Выберите правильно составленное предложение.','presentSimpleNever',16);

        return this.rez;
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
}
