//класс получает данные для создания рабочей формы и создает её

class WorkingField {
  // постоянная часть разметок кнопок с вариантами ответов
  strStart = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
  strFinish = `</button></div></div>`;

  init(arrayBD, nameLeson = false) {
      if (arrayBD !== undefined && arrayBD.length == 8) {
          [this.question, 
          this.option1,
          this.option2, 
          this.option3, 
          this.option4,
          this.translateRu,
          this.translateUa,
          this.translatePl] = arrayBD;

          let levelForStaticticOk = 'level' + localStorage.getItem('level') + '_Ok';
          let levelForStaticticError = 'level' + localStorage.getItem('level') + '_Error';

          const statistic = FactoryRegistr.getObject('Statistic');
          statistic.init(localStorage.getItem(levelForStaticticOk), localStorage.getItem(levelForStaticticError));

          // Настроить переводчик
          const transL = FactoryRegistr.getObject("LanguageController");

          // Используем Card вместо fieldset
          let cardStart = `<div class="card fieldSetWorkField" style="width: 100%; margin: auto; border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 8px 16px rgba(0,0,0,0.2);"><div class="card-body">`;
          let legend = '';

          if (!nameLeson)
              legend = `<h5 class="card-title" id="fieldset-legend">${transL.translate('Вопрос с вариантами ответа')}</h5>`;
          if (nameLeson)
              legend = `<h5 class="card-title" id="fieldset-legend">${nameLeson}</h5>`;
          
          let buttonOption = [];
          buttonOption[0] = this.strStart+' id="option1"> '+this.option1+this.strFinish;
          buttonOption[1] = this.strStart+' id="option2"> '+this.option2+this.strFinish;
          buttonOption[2] = this.strStart+' id="option3"> '+this.option3+this.strFinish;
          buttonOption[3] = this.strStart+' id="option4"> '+this.option4+this.strFinish;

          const cardFinish = "</div></div>";
          const buttonQuestion = `<br><div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='question'>${this.question}</button></div></div><br>`;

          // Начальный текст для кнопки перевода вопроса
          let translateFromArray = transL.translate('Перевести вопрос');

          // Кнопка "Перевести вопрос"
          const translate = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='translate'>${translateFromArray}</button></div></div><br><br><br>`;

          buttonOption = shuffleArray(buttonOption);

          return cardStart +
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
  initWordAssembly(arrayBD, nameLeson = false) {
    const strStart = `<div class='row mb-2'><div class='col-12'><button style='border-radius: 10px; margin-left: 5px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
    let question, option1, option2, option3, option4;

    if (arrayBD !== undefined && arrayBD.length == 8) {
        [question, option1, option2, option3, option4,
        this.translateRu, this.translateUa, this.translatePl] = arrayBD;

        let levelForStaticticOk = 'level' + localStorage.getItem('level') + '_Ok';
        let levelForStaticticError = 'level' + localStorage.getItem('level') + '_Error';

        const statistic = FactoryRegistr.getObject('Statistic');
        statistic.init(localStorage.getItem(levelForStaticticOk), localStorage.getItem(levelForStaticticError));

        // Настроить переводчик
        const transL = FactoryRegistr.getObject("LanguageController");

        //////////////////////////////////////////////////////////
        let cardStart = `<div class="card fieldSetWorkField" style="width: 100%; margin: auto; border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 8px 16px rgba(0,0,0,0.2);"><div class="card-body">`;
        let legend = '';

        if (!nameLeson)
            legend = `<h5 class="card-title" id="fieldset-legend">${transL.translate('Вопрос с вариантами ответа')}</h5>`;
        if (nameLeson)
            legend = `<h5 class="card-title" id="fieldset-legend">${nameLeson}:${transL.translate('(может отличаться)')}</h5>`;
        
        // Создание кнопок
        let buttonOption = [];

        // Специальная проверка на работу с массивом toBeSentences
        // Он создан не стандартно, в нем дублируется первое слово
        // и слово Not
        if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
            if (question.includes('not')) {
                question = question.replace(' not', '');
            }
        }

        // Замена троеточия на правильное слово
        if (question.includes('...')) {
            question = question.replace('...', option1);
        }
        if (question.includes('…')) {
            question = question.replace('…', option1);
        }
        if (question.includes('___')) {
            question = question.replace('___', option1);
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

        const buttonOk = `<div class='row mb-2'>
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

        const cardFinish = "</div></div>";

        // Начальный текст для кнопки перевода вопроса
        let translateFromArray = transL.translate('Перевести вопрос');

        // Кнопка "Перевести вопрос"
        const translate = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='translate'>${translateFromArray}</button></div></div>`;

        const containerForRezzult = `<div class='row mb-2'><div id="container-for-rezult" class='col-12'></div></div>`;

        buttonOption = shuffleArray(buttonOption);

        let rez = cardStart + legend + translate + containerForRezzult;
        const strButton = buttonOption.join('');
        rez+='<hr>'+strButton+buttonOk+cardFinish;

        //Подменить описание Задания если собираются предложения
        //document.querySelector('#help').innerHTML = "Привет";

        return rez;
    }
    }

// рядом будет подобная функция, будет врмя можно совместить
  // initWordAssembly() и initWordAssemblyNotTranslate()
  initWordAssemblyNotTranslate(arrayBD, nameLeson = false) {
    const strStart = `<div class='row mb-2'><div class='col-12'><button style='border-radius: 10px; margin-left: 5px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button'`;
    let question, option1, option2, option3, option4;

    if (arrayBD !== undefined && arrayBD.length == 8) {
        [question, option1, option2, option3, option4,
        this.translateRu, this.translateUa, this.translatePl] = arrayBD;

        let levelForStaticticOk = 'level' + localStorage.getItem('level') + '_Ok';
        let levelForStaticticError = 'level' + localStorage.getItem('level') + '_Error';

        const statistic = FactoryRegistr.getObject('Statistic');
        statistic.init(localStorage.getItem(levelForStaticticOk), localStorage.getItem(levelForStaticticError));

        // Настроить переводчик
        const transL = FactoryRegistr.getObject("LanguageController");

        //////////////////////////////////////////////////////////
        let cardStart = `<div class="card fieldSetWorkField" style="width: 100%; margin: auto; border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 8px 16px rgba(0,0,0,0.2);"><div class="card-body">`;
        let legend = '';

        if (!nameLeson)
            legend = `<h5 class="card-title" id="fieldset-legend">${transL.translate('Вопрос с вариантами ответа')}</h5>`;
        if (nameLeson)
            legend = `<h5 class="card-title" id="fieldset-legend">${nameLeson}:${transL.translate('(может отличаться)')}</h5>`;
        
        // Создание кнопок
        let buttonOption = [];

        // признак того, что правильный ответ есть предложение а не 
        // пропущенное слово
        let trueSentences = true;

        // Специальная проверка на работу с массивом toBeSentences
        // Он создан не стандартно, в нем дублируется первое слово
        // и слово Not
        if (localStorage.getItem('nameArrayDb') === 'toBeSentences') {
            if (question.includes('not')) {
                question = question.replace(' not', '');
                trueSentences = false;
            }
        }

        // Замена троеточия на правильное слово
        if (question.includes('...')) {
            question = question.replace('...', option1);
            trueSentences = false;
        }
        if (question.includes('…')) {
            question = question.replace('…', option1);
            trueSentences = false;
        }
        if (question.includes('___')) {
            question = question.replace('___', option1);
            trueSentences = false;
        }

        // Если признак того, что правильный ответ - это готовое предложение
        // сохранился как Труе, то выбрать случайно в качестве вопросса
        // либо сам вопрос, либо правильный ответ на него
        if (trueSentences) {
            let randomNumber = Math.random();
            if (randomNumber > 0.5) randomNumber = 1;
            else randomNumber = 2;
            if (randomNumber === 2) question = option1;
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

        const buttonOk = `<div class='row mb-2'>
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

        const cardFinish = "</div></div>";

        // Начальный текст для кнопки перевода вопроса
        let translateFromArray = transL.translate('Перевести вопрос');

        // Кнопка "Перевести вопрос"
        const translate = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='translate'>${translateFromArray}</button></div></div>`;

        const containerForRezzult = `<div class='row mb-2'><div id="container-for-rezult" class='col-12'></div></div>`;

        buttonOption = shuffleArray(buttonOption);

        let rez = cardStart + legend + translate + containerForRezzult;
        const strButton = buttonOption.join('');
        rez+='<hr>'+strButton+buttonOk+cardFinish;

        //Подменить описание Задания если собираются предложения
        //document.querySelector('#help').innerHTML = "Привет";

        return rez;
    }
  }
}
