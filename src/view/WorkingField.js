//класс получает данные для создания рабочей формы и создает её

//предложение для разборки на слова. Создавалась переменная
//для использования другими объектами готового значения.

import './styles/WorkingField.scss';
// Не удалять
import { selectLightNormalHard } from '../controllers/selectLightNormalHard.js';
import { DataSet } from '../services/data/DataSet.js';
import { LanguageController } from '../controllers/LanguageController.js';

import { getArrayQuestions } from './WorkingField/getArrayQuestions.js';
import { cardStartAndLegend } from './WorkingField/cardStartAndLegend.js';
import { getCardStart } from './WorkingField/getCardStart.js';
import { getCardFinish } from './WorkingField/getCardFinish.js';
import { setButtonTranslate } from './WorkingField/setButtonTranslate.js';
import { getButtonOption } from './WorkingField/getButtonOption.js';
import { getButtonQuestion } from './WorkingField/getButtonQuestion.js';
import { getTranslateForTest } from './WorkingField/getButtonOption/getTranslateForTest.js';
import { shuffleArray } from './WorkingField/shuffleArray.js';
import { clearNotToBeSentences } from './WorkingField/clearNotToBeSentences.js';
import { insertWord } from './WorkingField/insertWord.js';
import { cleartoBeSentences } from './WorkingField/cleartoBeSentences.js';
import { wordToHtmlButton } from './WorkingField/wordToHtmlButton.js';
import { containerForRezzult } from './WorkingField/containerForRezzult.js';
import { generateQuestion } from './WorkingField/generateQuestion.js';
import { createButtonHardNormalLight } from './WorkingField/createButtonHardNormalLight.js';
import { buttonOk } from './WorkingField/buttonOk.js';


class WorkingFieldClass {

  // признак того, что правильный ответ есть предложение, а не 
  // пропущенное слово
  trueSentences = true;

  // принудительное изменение вопроса.
  // труе назначается в функции app(), событие на клик по кнопке
  // выпадающего меню выбора теста
  resetQuestion = false;

  constructor()
  {
        // Забинбить стороннии функции
        //Функция деструктуризирует рабочий подмассив и заполняет свойства класса
        this.getArrayQuestions = getArrayQuestions.bind(this);
        this.getButtonOption = getButtonOption.bind(this);
        this.clearNotToBeSentences = clearNotToBeSentences.bind(this);
        this.insertWord = insertWord.bind(this);
        this.generateQuestion = generateQuestion.bind(this);

        this.transL = new LanguageController();

  }

  init(arrayBD, nameLeson = false) 
  {
          // Поместить текущий подмассив в глобальный объект для использования
          // в других модулях
          DataSet.arrayBD = arrayBD;

          // Деструктуризация рабочего подмассива в свойства класса
          // this.questions, this.option1 ...
          this.getArrayQuestions(arrayBD);

          let buttonOption = [];

          // присвоить элементам массива соответствующие данные из массива с некоторой разметкой
          buttonOption[0] = this.getButtonOption("option1");
          buttonOption[1] = this.getButtonOption("option2");
          buttonOption[2] = this.getButtonOption("option3");
          buttonOption[3] = this.getButtonOption("option4");

          buttonOption = shuffleArray(buttonOption).join('');
          
          return getCardStart() +
              cardStartAndLegend(nameLeson) +
              getButtonQuestion(this.question) +
              setButtonTranslate() +
              '<hr>'+
              buttonOption +
              getCardFinish();
      }

  initTranslate(arrayBD, nameLeson = false) 
  {
          // Поместить текущий подмассив в глобальный объект для использования
          // в других модулях
          DataSet.arrayBD = arrayBD;
          this.arrayBD = arrayBD;

          // Деструктуризация рабочего подмассива в свойства класса
          this.getArrayQuestions(this.arrayBD);

          let buttonOption = [];

          // очистить массив ToBeSentences от лишнего слова not, работает с контекстом класса
          this.clearNotToBeSentences();
          // вставить правильное слово если встретилось многоточие, работает с контекстом класса
          this.insertWord();
          // Почистить подмассив toBeSentences от дублирования слов
          let arrayButton = this.question.split(' ');
          arrayButton = cleartoBeSentences(arrayButton);
          this.question = arrayButton.join(" ");

          // присвоить элементам массива соответствующие данные из массива с некоторой разметкой
          // Первая часть теста, в качестве вопросса выступает сам вопрос, индекс 0
          buttonOption[0] = this.getButtonOption("option5");
          buttonOption[1] = this.getButtonOption("option6");
          buttonOption[2] = this.getButtonOption("option7");
          buttonOption[3] = this.getButtonOption("option8");

          // функция оборачивает this.question в разметку кнопки
          let question = getButtonQuestion(this.question);

          // случйное число false или true для выбора одного из режимов для Sympl-Translate
          const randomBool = Math.random() < 0.5;

          // Вторая часть теста, в качестве вопросса выступает вариант перевода, индексы 5,6,7
          if (randomBool) { 
              question = getButtonQuestion(getTranslateForTest(arrayBD));
              buttonOption[0] = this.getButtonOption("option9");
              buttonOption[1] = this.getButtonOption("option10");
              buttonOption[2] = this.getButtonOption("option11");
              buttonOption[3] = this.getButtonOption("option12");
          }
          

          buttonOption = shuffleArray(buttonOption).join('');
          
          return getCardStart() +
              cardStartAndLegend(nameLeson) +
              question +
              setButtonTranslate() +
              '<hr>'+
              buttonOption +
              getCardFinish();
      }

  initWordAssembly(arrayBD, nameLeson = false) 
  {
    // Поместить текущий подмассив в глобальный объект для использования
    // в других модулях
    DataSet.arrayBD = arrayBD;

    // в этой функции всегда лежим light
    localStorage.setItem('light_normal_hard', 'light');

    // Деструктуризация рабочего подмассива в свойства класса
    this.getArrayQuestions(arrayBD);

        // очистить массив ToBeSentences от лишнего слова not, работает с контекстом класса
        this.clearNotToBeSentences();
        // вставить правильное слово если встретилось многоточие, работает с контекстом класса
        this.insertWord();

        // массив arrayButton должен содержать разбитые на слова предложения
        const arrayButton = this.question.split(' ');

        // Почистить подмассив toBeSentences от дублирования слов
        cleartoBeSentences(arrayButton);

        // попытка перейти от хранения данных в этов классе к специальному объекту DataSet
        DataSet.questionDB = arrayButton.join(' ');
        
        // создание кнопок
        let {buttonOption, indexMax} = wordToHtmlButton(arrayButton, 'initWordAssembly');

        localStorage.setItem('indexMax', indexMax);

        buttonOption = shuffleArray(buttonOption);

        let rez = getCardStart() + 
                  cardStartAndLegend(nameLeson) + 
                  setButtonTranslate() + 
                  containerForRezzult();
        const strButton = buttonOption.join('');
        rez+='<hr>'+
             strButton+
             buttonOk()+
             getCardFinish()+
             createButtonHardNormalLight();

        return rez;
    }

  // новый параметр dataObj, объект для масштабирования функции.
  // property = false служит для отмены создания нового теста, на случай предыдущего ошибочного ответа
  initWordAssemblyNotTranslate(arrayBD, nameLeson = false, property = false) 
  {
    // Поместить текущий подмассив в глобальный объект для использования
    // в других модулях
    // на 1.11.2025 этот уровень без перевода, то есть в этом уровне данная информация не
    // используется
    DataSet.arrayBD = arrayBD;

        this.getArrayQuestions(arrayBD);

        //специальная обработка предложения из toBeSentences
        this.clearNotToBeSentences();

        //вставка пропущенного слова, если это необходимо
        this.insertWord();

        // метод подготавливает предложение для разборки на кубики.
        // результат работы в локалсторадж и свойствах объекта
        this.generateQuestion(property);

        // массив arrayButton должен содержать разбитые на слова предложения
        const arrayButton = this.question.split(' ');

        cleartoBeSentences(arrayButton);

        // попытка перейти от хранения данных в этов классе к специальному объекту DataSet
        DataSet.questionDB = arrayButton.join(' ');

        // создание кнопок
        let {buttonOption, indexMax} = wordToHtmlButton(arrayButton, 'initWordAssemblyNotTranslate');

        localStorage.setItem('indexMax', indexMax);

        buttonOption = shuffleArray(buttonOption);

        let rez = getCardStart() + 
                  cardStartAndLegend(nameLeson) + 
                  containerForRezzult();

        const strButton = buttonOption.join('');
        rez+='<hr>'+
             strButton+
             buttonOk()+
             getCardFinish()+
             createButtonHardNormalLight();

        return rez;
    }

}

const WorkingField = new WorkingFieldClass();

export {WorkingField};

