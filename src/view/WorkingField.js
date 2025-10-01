//класс получает данные для создания рабочей формы и создает её

//this.questionDB - содержит переработанное и готовое для использования
//предложение для разборки на слова. Создавалась переменная
//для использования другими объектами готового значения.

import './styles/WorkingField.scss';

export class WorkingField {
  // постоянная часть разметок кнопок с вариантами ответов
  strStart = `<div class='row mb-2'>
                <div class='col-12'>
                  <button class="working-field" type='button'`;
  strFinish = `</button></div></div>`;
  // признак того, что правильный ответ есть предложение, а не 
  // пропущенное слово
  trueSentences = true;

  // Вызвать из регистра объект переводчика
  transL = window.getTranslate;

  // Постоянная часть разметки компонента
  cardStart = `<div class="card fieldSetWorkField" 
               >
               <div class="card-body">`;

  // принудительное изменение вопроса.
  // труе назначается в функции app(), событие на клик по кнопке
  // выпадающего меню выбора теста
  resetQuestion = false;

  constructor()
  {
    
        // Начальный текст для кнопки перевода вопроса
        const translateFromArray = this.transL.translate('Перевести вопрос');
        this.translate = `<div class='row mb-2'>
                            <div class='col-12'>
                              <button 
                                style="
                                  width: 100%; 
                                  border: 1px solid rgba(0, 0, 0, 0.2); 
                                  box-shadow: 0 4px 8px rgba(0,0,0,0.2);" 
                                type="button" 
                                id="translate">${translateFromArray}
                              </button>
                            </div>
                          </div>`;

        this.cardFinish = "</div></div>";


  }

  init(arrayBD, nameLeson = false) 
  {
          this.getArrayQuestions(arrayBD);
          let legend = this.cardStartAndLegend(nameLeson);
          let buttonOption = [];

          buttonOption[0] = this.strStart+' id="option1"> '+this.option1+this.strFinish;
          buttonOption[1] = this.strStart+' id="option2"> '+this.option2+this.strFinish;
          buttonOption[2] = this.strStart+' id="option3"> '+this.option3+this.strFinish;
          buttonOption[3] = this.strStart+' id="option4"> '+this.option4+this.strFinish;
          const buttonQuestion = `<br><div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='question'>${this.question}</button></div></div><br>`;
          buttonOption = shuffleArray(buttonOption);
          
          return this.cardStart +
              legend +
              buttonQuestion +
              this.translate +
              '<hr>'+
              buttonOption[0] +
              buttonOption[1] +
              buttonOption[2] +
              buttonOption[3] +
              this.cardFinish;
      }

  initWordAssembly(arrayBD, nameLeson = false) 
  {
    // в этой функции всегда лежим light
    localStorage.setItem('light_normal_hard', 'light');
    const strStart = `<div class='row mb-2'><div class='col-12'><button style='border-radius: 10px; margin-left: 5px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
        this.getArrayQuestions(arrayBD);
        let legend = this.cardStartAndLegend(nameLeson);

        // Создание кнопок
        let buttonOption = [];
        this.question = this.clearNotToBeSentences(this.question);
        this.question = this.insertWord(this.question, this.option1);

        // массив arrayButton должен содержать разбитые на слова предложения
        const arrayButton = this.question.split(' ');

        this.cleartoBeSentences(arrayButton);

        // Для внешнего использования. Переменная хранит предложение-вопрос
        this.questionDB = arrayButton.join(' ');
        
        // создание кнопок
        let indexMax = 0;
        arrayButton.forEach((element, index) => {
            buttonOption.push(strStart+`" data-index="${index}" id="word${index}"> `+element+this.strFinish);
            indexMax = index;
        });
        localStorage.setItem('indexMax', indexMax);

        const containerForRezzult = `<div class='row mb-2'><div id="container-for-rezult" class='col-12'></div></div>`;

        buttonOption = shuffleArray(buttonOption);

        let rez = this.cardStart + 
                  legend + 
                  this.translate + 
                  containerForRezzult;
        const strButton = buttonOption.join('');
        rez+='<hr>'+strButton+this.buttonOk()+this.cardFinish+this.createButtonHardNormalLight();

        return rez;
    }

  // новый параметр dataObj, объект для масштабирования функции.
  // property = false служит для отмены создания нового теста, на случай предыдущего ошибочного ответа
  initWordAssemblyNotTranslate(arrayBD, nameLeson = false, property = false) 
  {
    const strStart = `<div class='row mb-2'><div class='col-12'><button style='border-radius: 10px; margin-left: 5px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
        this.getArrayQuestions(arrayBD);
        let legend = this.cardStartAndLegend(nameLeson);

        // Создание кнопок
        let buttonOption = [];

        //специальная обработка предложения из toBeSentences
        this.question = this.clearNotToBeSentences(this.question);

        //вставка пропущенного слова, если это необходимо
        this.question = this.insertWord(this.question, this.option1);

        // метод подготавливает предложение для разборки на кубики.
        // результат работы в локалсторадж и свойствах объекта
        this.generateQuestion(property);

        // массив arrayButton должен содержать разбитые на слова предложения
        const arrayButton = this.question.split(' ');

        this.cleartoBeSentences(arrayButton);

        // Для внешнего использования. Переменная хранит предложение-вопрос
        this.questionDB = arrayButton.join(' ');

        // создание кнопок
        let indexMax = 0;
        arrayButton.forEach((element, index) => {
            buttonOption.push(strStart+`" data-index="${index}" id="word${index}"> `+element+this.strFinish);
            indexMax = index;
        });
        localStorage.setItem('indexMax', indexMax);

        const containerForRezzult = `<div class='row mb-2'><div id="container-for-rezult" class='col-12'></div></div>`;

        buttonOption = shuffleArray(buttonOption);

        let rez = this.cardStart + 
                  legend + 
                  containerForRezzult;

        const strButton = buttonOption.join('');
        rez+='<hr>'+strButton+this.buttonOk()
           +this.cardFinish+this.createButtonHardNormalLight();

        return rez;
    }

  // Дальше служебные функции класса *****************************
  // *************************************************************

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция помещает с локальное хранилище и свойства класса
  // предложение, которое будет разобрано на кубики
  generateQuestion()
  {
        let [property] = arguments;
            // Если есть объект с дополнительными данными и свойство
            // property.constIndexArray не блокирует создание нового
            // тестового вопроса. Либо была смена теста-в меню выбора теста
            
            
            if (property && !property.constIndexArray || this.resetQuestion) {
              this.resetQuestion = false;

             
              // если выбрана сложность light, то работаем только с индексом 0
              let randomNumber = 1;
              if (localStorage.getItem('light_normal_hard') === 'hard') {
                  randomNumber = getRandomInt(1,this.countValidOptions());
              }   
              if (localStorage.getItem('light_normal_hard') === 'normal') {
                  randomNumber = this.getRandomInt(1,2);
              }   
              
              // Если false, то правильный ответ - это слово, не предложение,
              // поэтому отменить результат алгоритма выбора между 
              // главным вопроссом и правильным ответом
              if (!this.trueSentences) randomNumber = 1;

              // Если алгоритм выбрал работу с правильным ответом, 
              // то взять его из переменной option1
              if (randomNumber === 2) this.question = this.option1;
              if (randomNumber === 3) this.question = this.option2;
              if (randomNumber === 4) this.question = this.option3;
              if (randomNumber === 5) this.question = this.option4;
              // запомнить рандомный номер для того, чтобы корректно
              // выбрать из массива правильный вариант исходного
              // предложения.
              localStorage.setItem('randomNumber',randomNumber);

              // В переменной question находится готовое для разборки предложение
              this.question = this.insertWord(this.question, this.option1);
              localStorage.setItem('init_word_assembly_not_translate_question', this.question);
      } else {
          this.question = localStorage.getItem('init_word_assembly_not_translate_question');
      }
  }

  createButtonHardNormalLight()
  {
    let button =`<div class="container text-center mt-5">
                       <button id="button-light" class="btn btn-custom-yellow mx-2" onclick="selectLightNormalHard('light')">Light</button>
                       <button id="button-normal" class="btn btn-custom-blue mx-2" onclick="selectLightNormalHard('normal')">Normal</button>`;
    if (this.countValidOptions() > 2) button += `<button id="button-hard" class="btn btn-custom-white mx-2" onclick="selectLightNormalHard('hard')">Hard</button>`;
    button += `<button id="button-help" class="btn btn-custom-help mx-2" onclick="handleHelp()">Help</button></div>`;

       if (SettingForProgram.selectTypeTest === "word-assembly") {
           button =`<div class="container text-center mt-5">
                        <button id="button-help" class="btn btn-custom-help-big mx-2" onclick="handleHelp()">Help</button>
                    </div>`;
       }
       return button;
  }

  // функция возвращает число определяющее сколько в массиве правильно
  // созданных предложений
  countValidOptions()
  {
    const nameArray = 'window.fileDB.'+localStorage.getItem('nameArrayDb');
    const workingArray = eval(nameArray);

    if (workingArray.lengthTrue === undefined) {
        return 1;
    } else {
        return workingArray.lengthTrue;
    }
  }

  cleartoBeSentences(arrayButton)
  {
        // Специальная проверка на работу с массивом toBeSentences
        // Он создан не стандартно, в нем дублируется первое слово
        if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
            arrayButton.shift();
        }
        return arrayButton;
  }
  // Функция деструктуризирует - подготавливает данные из входного
  // массива. Данные принадлежат классу, поэтому обновляются через this.
  getArrayQuestions(arrayBD)
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
    }
  }
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
  // 17.02.2025.Добавлена проверка на /, если он есть в первом предложении
  // то нужно взять второе для разборки на слова.
  insertWord(question, option1) 
  {
        if (question.includes('/')) {
            question = option1;
            this.trueSentences = false;
        }
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

