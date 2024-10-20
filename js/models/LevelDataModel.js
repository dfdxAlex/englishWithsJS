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
        this.tic = 22;
        this.propertyArrayNameButton = [];
        this.arrayNameButton();
        this.lang = localStorage.getItem('EnglishWithJs_lang');
    }

    // Здесь заполняется вариант надписи название теста
    // на кнопке правого меню
    arrayNameButton()
    {
        this.propertyArrayNameButton.push(this.translate.translate('100 слов о еде'));        // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('100 слов про спорт'));    // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('100 слов о путешествии'));// пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('100 слов'));              // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('300 слов'));              // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('500 слов'));              // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('50 глаголов'));           // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('300 глаголов'));          // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('To Be, краткая форма'));  // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('To Be, вопрос/ответ'));   // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('To Be, ответь на вопрос'));// пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Where/Who...'));           // пункт 2
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное')); // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее продолженное - вопрос'));  // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое'));                // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое + периодичность'));// пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое негативное'));     // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Настоящее простое вопросы'));        // пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Выбрать правильное время PS or PC'));// пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('Вторая форма неправильных глаголов'));// пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('I Have or I Have got'));// пункт 1
        this.propertyArrayNameButton.push(this.translate.translate('A1 Beginer text'));// пункт 2
        
    }

    // Это массив с набором цифр, каждая цифра - это пункт в меню.
    // Каждая цифра в массиве - это расположение соответствующего 
    // пункта. Первый элемент находится в меню 2, второй тоже и т.д.
    static mapNameMenu(test)
    {
        const arrayForButton = [2,2,2,2,2,2,2,2,1,1,1,2,1,1,1,1,1,1,1,2,1,2];
        return arrayForButton[test];
    }
    
    selectLevel(exercise, nameArray, level, lang = true)
    {
        if (level == this.level && (lang === true || lang === this.lang)) {
            this.ex.init(this.translate.translate(exercise));
            localStorage.setItem('nameArrayDb',nameArray);
            Thoury.handleThoury(level);
            this.rez = eval(nameArray);
        }
    }
    getArrayDB()
    {
        this.selectLevel('Выбрать правильный перевод','commonFood100',1,'ru');
        this.selectLevel('Выбрать правильный перевод','commonFood100ua',1,'ua');
        this.selectLevel('Выбрать правильный перевод','commonFood100pl',1,'pl');
        this.selectLevel('Выбрать правильный перевод','commonSport100',2,'ru');
        this.selectLevel('Выбрать правильный перевод','commonSport100pl',2,'pl');
        this.selectLevel('Выбрать правильный перевод','commonWalk100',3,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWords100',4,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWords300',5,'ru');
        this.selectLevel('Выбрать правильный перевод','commonWords500',6,'ru');
        this.selectLevel('Выбрать правильный перевод','verbs50',7,'ru');
        this.selectLevel('Выбрать правильный перевод','verbs50pl',7,'pl');
        this.selectLevel('Выбрать правильный перевод','verbs300',8,'ru');
        this.selectLevel('Выбрать правильный вариант сокращенной формы глагола to Be','toBeForms',9);
        this.selectLevel('Выбрать правильный вариант сокращенной формы глагола to Be','toBeSentences',10);
        this.selectLevel('Выбрать правильный вариант ответа','questionsWithAnswers',11);
        this.selectLevel('Вставить правильное слово','whereThat',12);
        this.selectLevel('Вставить правильное слово','presentContinuous',13);
        this.selectLevel('Выбрать правильный вопрос','presetnContiniusQuestion',14);
        this.selectLevel('Вставить правильное слово','presentSimple',15);
        this.selectLevel('Выберите правильно составленное предложение.','presentSimpleNever',16);
        this.selectLevel('Вставить правильное слово','presentSimpleNegative',17);
        this.selectLevel('Подобрать правильно вопрос или ответ','presentSimpleQuestions',18);
        this.selectLevel('Выбрать правильное время PS or PC','presentSimpleOrContinius',19);
        this.selectLevel('Выбери верную форму глагола','irregularVerbsPastSimple',20);
        this.selectLevel('Выбрать правильную пару.','haveAndHaveGot',21);
        this.selectLevel('Text A1 Beginer.','textA1Begginer',22);
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
