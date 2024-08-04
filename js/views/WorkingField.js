// класс получает данные для создания рабочей формы и создает её

class WorkingField
{
    constructor(arrayBD)
    {
        [this.question, 
         this.option1,
         this.option2, 
         this.option3, 
         this.option4,
         this.translateRu,
         this.translateUa,
         this.translatePl,
        ] = arrayBD;
        // получить номер вопросса
        this.numberOfElement = +localStorage.getItem('randomEl');
    }

    init()
    {
        // Показать номер вопросса
        document.getElementById('numberEl').innerHTML ='№' + this.numberOfElement;

        const levelForStaticticOk = 'level'+localStorage.getItem('level')+'_Ok';
        const levelForStaticticError = 'level'+localStorage.getItem('level')+'_Error';
        const statistic = new Statistic();
        statistic.init(localStorage.getItem(levelForStaticticOk),localStorage.getItem(levelForStaticticError));

        let buttonOption = [];
        buttonOption[0] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option1'> ${this.option1} </button></div></div>`;
        buttonOption[1] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option2'> ${this.option2} </button></div></div>`;
        buttonOption[2] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option3'> ${this.option3} </button></div></div>`;
        buttonOption[3] = `<div class='row'><div class='col-12 btn'><button class="btn btn-secondary" type='button' id='option4'> ${this.option4} </button></div></div>`;
        
        const buttonQuestion = `<br><div class='row'><div class='col-12 btn'><button class="btn btn-info" type='button' id='question'> ${this.question} </button></div></div><br>`;

        let translateFromArray = '';
        if (localStorage.getItem('EnglishWithJs_lang') === 'ru') {
            translateFromArray = this.translateRu;
        } else if (localStorage.getItem('EnglishWithJs_lang') === 'ua') {
            translateFromArray = this.translateUa;
        } else {
            translateFromArray = this.translatePl;
        }

        const translate = `<div class='row'><div class='col-12 btn'><button class="btn btn-info" type='button' id='translate'> ${translateFromArray} </button></div></div><br><br><br>`;
    
        buttonOption = shuffleArray(buttonOption);

        return buttonQuestion+translate+buttonOption[0]+buttonOption[1]+buttonOption[2]+buttonOption[3];
    }
}
