
export function insertWord()
{
  // Функция используется там, где необходимо получить предложение
  // для разбора его на кубики, но в нем есть пропущенное слово. 
  // Необходимое слово находится в первом индексе массива с данными
  // функция заменяет пропущенное слово на необходимое слово и 
  // возвращает его.
  // 17.02.2025.Добавлена проверка на /, если он есть в первом предложении
  // то нужно взять второе для разборки на слова.
        if (this.question.includes('/')) {
            this.question = this.option1;
            this.trueSentences = false;
        }
        if (this.question.includes('...')) {
            this.question = this.question.replace('...', this.option1);
            this.trueSentences = false;
        }
        if (this.question.includes('…')) {
            this.question = this.question.replace('…', this.option1);
            this.trueSentences = false;
        }
        if (this.question.includes('___')) {
            this.question = this.question.replace('___', this.option1);
            this.trueSentences = false;
        }
        return this.question;
}

insertWord.help = `
  Функция используется там, где необходимо получить предложение
  для разбора его на кубики, но в нем есть пропущенное слово. 
  Необходимое слово находится в первом индексе массива с данными
  функция заменяет пропущенное слово на необходимое слово и 
  возвращает его.
  17.02.2025.Добавлена проверка на /, если он есть в первом предложении
  то нужно взять второе для разборки на слова.
  1.11.2025 - функция отделена и переведена на работу с контекстом.
`;