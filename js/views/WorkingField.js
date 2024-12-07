//класс получает данные для создания рабочей формы и создает её

class WorkingField {
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
          buttonOption[0] = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='option1'>${this.option1}</button></div></div>`;
          buttonOption[1] = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='option2'>${this.option2}</button></div></div>`;
          buttonOption[2] = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='option3'>${this.option3}</button></div></div>`;
          buttonOption[3] = `<div class='row mb-2'><div class='col-12'><button style='width: 100%; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.2);' type='button' id='option4'>${this.option4}</button></div></div>`;

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
}
