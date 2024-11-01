// класс получает данные для создания рабочей формы и создает её

class WorkingField
{
    init(arrayBD)
    {
      if (arrayBD !== undefined && arrayBD.length == 8)
      [this.question, 
        this.option1,
        this.option2, 
        this.option3, 
        this.option4,
        this.translateRu,
        this.translateUa,
        this.translatePl,
       ] = arrayBD;

        let levelForStaticticOk = 'level'+localStorage.getItem('level')+'_Ok';
        let levelForStaticticError = 'level'+localStorage.getItem('level')+'_Error';

        const statistic = FactoryRegistr.getObject('Statistic');
        statistic.init(localStorage.getItem(levelForStaticticOk),localStorage.getItem(levelForStaticticError));

        // Настроить переводчик
        const transL = FactoryRegistr.getObject("LanguageController");
        let fieldsetStart = `<fieldset class="fieldSetWorkField"><legend> ${transL.translate('Вопрос с вариантами ответа')} </legend>`;
        
        let buttonOption = [];
        buttonOption[0] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option1'> ${this.option1} </button></div></div>`;
        buttonOption[1] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option2'> ${this.option2} </button></div></div>`;
        buttonOption[2] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option3'> ${this.option3} </button></div></div>`;
        buttonOption[3] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option4'> ${this.option4} </button></div></div>`;
        
        const fieldsetFinish = "</fieldset>";
        const buttonQuestion = `<br><div class='row'><div class='col-12 btn'><button class="btn btn-info" type='button' id='question'> ${this.question} </button></div></div><br>`;

        // Начальный текст для кнопки перевода вопросса
        let translateFromArray = transL.translate('Перевести вопрос');

        // Кнопка "Перевести вопрос"
        const translate = `<div class='row'><div class='col-12 btn'><button class="btn btn-info" type='button' id='translate'> ${translateFromArray} </button></div></div><br><br><br>`;
    
        buttonOption = shuffleArray(buttonOption);

        return fieldsetStart+
                 buttonQuestion+
                   translate+
                     buttonOption[0]+
                       buttonOption[1]+
                         buttonOption[2]+
                           buttonOption[3]+
                             fieldsetFinish;
    }
}
