//класс получает данные для создания рабочей формы и создает её

class WorkingField {
  // постоянная часть разметок кнопок с вариантами ответов
  strStart = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
  strFinish = `</button></div></div>`;
  // признак того, что правильный ответ есть предложение, а не 
  // пропущенное слово
  trueSentences = true;
  // Вызвать из регистра объект переводчика
  transL = FactoryRegistr.getObject("LanguageController");
  // Постоянная часть разметки компонента
  cardStart = `<div class="card fieldSetWorkField" style="width: 100%; margin: auto; border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 8px 16px rgba(0,0,0,0.2);"><div class="card-body">`;

  // принудительное изменение вопроса.
  // труе назначается в функции app(), событие на клик по кнопке
  // выпадающего меню выбора теста
  resetQuestion = false;

  init(arrayBD, nameLeson = false) 
  {
      if (arrayBD !== undefined && arrayBD.length == 8) {
          [this.question, 
          this.option1,
          this.option2, 
          this.option3, 
          this.option4,
          this.translateRu,
          this.translateUa,
          this.translatePl] = arrayBD;

          this.workingWihtOkAndError();

          let legend = this.cardStartAndLegend(nameLeson);

          let buttonOption = [];
          buttonOption[0] = this.strStart+' id="option1"> '+this.option1+this.strFinish;
          buttonOption[1] = this.strStart+' id="option2"> '+this.option2+this.strFinish;
          buttonOption[2] = this.strStart+' id="option3"> '+this.option3+this.strFinish;
          buttonOption[3] = this.strStart+' id="option4"> '+this.option4+this.strFinish;

          const cardFinish = "</div></div>";
          const buttonQuestion = `<br><div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='question'>${this.question}</button></div></div><br>`;

          // Начальный текст для кнопки перевода вопроса
          let translateFromArray = this.transL.translate('Перевести вопрос');

          // Кнопка "Перевести вопрос"
          const translate = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='translate'>${translateFromArray}</button></div></div><br><br><br>`;

          buttonOption = shuffleArray(buttonOption);

          return this.cardStart +
              legend +
              buttonQuestion +
              translate +
              buttonOption[0] +
              buttonOption[1] +
              buttonOption[2] +
              buttonOption[3] +
              cardFinish;
      }
  }

  // рядом будет подобная функция, будет врмя можно совместить
  // initWordAssembly() и initWordAssemblyNotTranslate()
  initWordAssembly(arrayBD, nameLeson = false) 
  {
    const strStart = `<div class='row mb-2'><div class='col-12'><button style='border-radius: 10px; margin-left: 5px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
    let question, option1;

    if (arrayBD !== undefined && arrayBD.length == 8) {
        [question, option1, ,,, this.translateRu, this.translateUa, 
         this.translatePl] = arrayBD;

        this.workingWihtOkAndError();

        let legend = this.cardStartAndLegend(nameLeson);

        // Создание кнопок
        let buttonOption = [];

        question = this.clearNotToBeSentences(question);

        question = this.insertWord(question, option1);

        // массив arrayButton должен содержать разбитые на слова предложения
        const arrayButton = question.split(' ');

        // Специальная проверка на работу с массивом toBeSentences
        // Он создан не стандартно, в нем дублируется первое слово
        if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
            arrayButton.shift();
        }

        // создание кнопок
        let indexMax = 0;
        arrayButton.forEach((element, index) => {
            buttonOption.push(strStart+`" data-index="${index}" id="word${index}"> `+element+this.strFinish);
            indexMax = index;
        });
        localStorage.setItem('indexMax', indexMax);

        const cardFinish = "</div></div>";

        // Начальный текст для кнопки перевода вопроса
        let translateFromArray = this.transL.translate('Перевести вопрос');

        // Кнопка "Перевести вопрос"
        const translate = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='translate'>${translateFromArray}</button></div></div>`;

        const containerForRezzult = `<div class='row mb-2'><div id="container-for-rezult" class='col-12'></div></div>`;

        buttonOption = shuffleArray(buttonOption);

        let rez = this.cardStart + 
                  legend + 
                  translate + 
                  containerForRezzult;
        const strButton = buttonOption.join('');
        rez+='<hr>'+strButton+this.buttonOk()+cardFinish;

        //Подменить описание Задания если собираются предложения
        //document.querySelector('#help').innerHTML = "Привет";

        return rez;
    }
    }

  // рядом будет подобная функция, будет время можно совместить
  // initWordAssembly() и initWordAssemblyNotTranslate()
  // новый параметр dataObj, объект для масштабирования функции.
  initWordAssemblyNotTranslate(arrayBD, nameLeson = false, property = false) 
  {
    const strStart = `<div class='row mb-2'><div class='col-12'><button style='border-radius: 10px; margin-left: 5px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
    let question, option1;

    if (arrayBD !== undefined && arrayBD.length == 8) {
        [question, option1, ,,, this.translateRu, this.translateUa, 
         this.translatePl] = arrayBD;

        this.workingWihtOkAndError();

        let legend = this.cardStartAndLegend(nameLeson);

        // Создание кнопок
        let buttonOption = [];

        question = this.clearNotToBeSentences(question);

        question = this.insertWord(question, option1);

        if (property && !property.constIndexArray || this.resetQuestion) {
                this.resetQuestion = false;
                // Простой алгоритм для выбора между вопроссом и правильным вариантом ответа
                // для разборки на слова - кубики
                let randomNumber = Math.random();
                if (randomNumber > 0.5) randomNumber = 1;
                else randomNumber = 2;
                // Если false, то правильный ответ - это слово, не предложение,
                // поэтому отменить результат алгоритма выбора между 
                // главным вопроссом и правильным ответом
                if (!this.trueSentences) randomNumber = 1;
                // Если алгоритм выбрал работу с правильным ответом, 
                // то взять его из переменной option1
                if (randomNumber === 2) question = option1;
                // В переменной question находится готовое для разборки предложение
                localStorage.setItem('init_word_assembly_not_translate_question', question);
        } else {
            question = localStorage.getItem('init_word_assembly_not_translate_question');
            question = this.insertWord(question, option1);
        }

        // массив arrayButton должен содержать разбитые на слова предложения
        const arrayButton = question.split(' ');

        // Специальная проверка на работу с массивом toBeSentences
        // Он создан не стандартно, в нем дублируется первое слово
        if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
            arrayButton.shift();
        }

        // создание кнопок
        let indexMax = 0;
        arrayButton.forEach((element, index) => {
            buttonOption.push(strStart+`" data-index="${index}" id="word${index}"> `+element+this.strFinish);
            indexMax = index;
        });
        localStorage.setItem('indexMax', indexMax);

        const cardFinish = "</div></div>";

        // Начальный текст для кнопки перевода вопроса
        let translateFromArray = this.transL.translate('Перевести вопрос');

        // Кнопка "Перевести вопрос"
        const translate = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='translate'>${translateFromArray}</button></div></div>`;

        const containerForRezzult = `<div class='row mb-2'><div id="container-for-rezult" class='col-12'></div></div>`;

        buttonOption = shuffleArray(buttonOption);

        let rez = this.cardStart + 
                  legend + 
                  translate + 
                  containerForRezzult;
        const strButton = buttonOption.join('');
        rez+='<hr>'+strButton+this.buttonOk()+cardFinish;

        //Подменить описание Задания если собираются предложения
        //document.querySelector('#help').innerHTML = "Привет";

        return rez;
    }
  }

  // Дальше служебные функции класса *****************************
  // *************************************************************

  // Функция очищает массив toBeSentences от лишнего слова Not.
  // Данный массив изначательно построен особенным образом.
  clearNotToBeSentences(question)
  {
    if (localStorage.getItem('nameArrayDb') !== 'toBeSentences') 
        return question;

    if (question.includes('not'))
        question = question.replace(' not', '');

    let result = false;
    result = new Error().stack.includes('initWordAssembly ');
    
    if (result) return question;

    this.trueSentences = false;
    localStorage.setItem('init_word_assembly_not_translate_question', question);

    return question;
  }

  // Функция возвращает значение Legend, которое изменяется в зависимости
  // от места использования. В первом тесте у легенды одно значение, во
  // втором и третьем другое. Функция сама определяет из какого места
  // она запускается.
  cardStartAndLegend(nameLeson)
  {
    let result = false;
    result = new Error().stack.includes('init ');
    let legend = '';
    if (!nameLeson)
        legend = `<h5 class="card-title" id="fieldset-legend">${this.transL.translate('Вопрос с вариантами ответа')}</h5>`;
    if (nameLeson && result)
        legend = `<h5 class="card-title" id="fieldset-legend">${nameLeson}</h5>`;
    else
        legend = `<h5 class="card-title" id="fieldset-legend">${nameLeson}:${this.transL.translate('(может отличаться)')}</h5>`;
    return legend;
  }

  // Функция используется там, где необходимо получить предложение
  // для разбора его на кубики, но в нем есть пропущенное слово. 
  // Необходимое слово находится в первом индексе массива с данными
  // функция заменяет пропущенное слово на необходимое слово и 
  // возвращает его.
  insertWord(question, option1) 
  {
        if (question.includes('...')) {
            question = question.replace('...', option1);
            this.trueSentences = false;
        }
        if (question.includes('…')) {
            question = question.replace('…', option1);
            this.trueSentences = false;
        }
        if (question.includes('___')) {
            question = question.replace('___', option1);
            this.trueSentences = false;
        }
        return question;
  }

  // Метод вызывает метод другого класса и передает ему данные для 
  // обработки. Данные касаются статистики правильных и не правильных 
  // ответов.
  workingWihtOkAndError()
  {
    let staticticOk = 'level' + localStorage.getItem('level') + '_Ok';
    let staticticError = 'level' + localStorage.getItem('level') + '_Error';
    const statistic = FactoryRegistr.getObject('Statistic');
    statistic.init(localStorage.getItem(staticticOk), 
                   localStorage.getItem(staticticError));
  }

  // Функция создает разметку для кнопки "Проверить" 
  // во втором и третьем тесте
  buttonOk()
  {
    return `<div class='row mb-2'>
    <div class='col-12'>
      <button 
        style='width: 100%; 
               border: 1px solid rgba(0, 0, 0, 0.2); 
               box-shadow: 0 4px 8px rgba(0,0,0,0.2);' 
        type='button' 
        id='button-ok'
        onclick = 'handleButtonOk(event)'
       >
        Проверить
      </button>
    </div>
   </div>`;
  }
}
