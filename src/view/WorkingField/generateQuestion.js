import { getRandom } from '../../services/getRandom.js';
import { countValidOptions } from './countValidOptions.js';
import { insertWord } from './insertWord.js';
import { DataSet } from '../../services/data/DataSet.js';

// Функция помещает с локальное хранилище и свойства класса
// предложение, которое будет разобрано на кубики
export function generateQuestion()
  {
        let [property] = arguments;
            // Если есть объект с дополнительными данными и свойство
            // property.constIndexArray не блокирует создание нового
            // тестового вопроса. Либо была смена теста-в меню выбора теста

        if (property && !property.constIndexArray || DataSet.resetQuestion) {
              DataSet.resetQuestion = false;

              // проверить число точек в строке. Если 2 или больше не разберать его на кубики
              // в этом уровне
              const count = (this.question.match(/\./g) || []).length;
              let randomeStart = 1;
              if (count>1) randomeStart = 2;
             
              // если выбрана сложность light, то работаем только с индексом 0
              let randomNumber = 1;
              // Если уровень Hard то рандов всех вариантов
              if (localStorage.getItem('light_normal_hard') === 'hard') {
                  randomNumber = getRandom(randomeStart,countValidOptions());
              }   
              // Если уровень Normal то рандом между первым и вторым предложением
              if (localStorage.getItem('light_normal_hard') === 'normal') {
                  randomNumber = getRandom(randomeStart,2);
              } 
              // Если уровень light но первое предложение из двух, то взять второе
              if (localStorage.getItem('light_normal_hard') === 'light' && count>1) {
                  randomNumber = 2;
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
              insertWord.bind(this)();
              localStorage.setItem('init_word_assembly_not_translate_question', this.question);
      } else {
          this.question = localStorage.getItem('init_word_assembly_not_translate_question');
      }
  }