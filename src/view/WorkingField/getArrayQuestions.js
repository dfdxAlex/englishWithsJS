  // Функция деструктуризирует - подготавливает данные из входного
  // массива. Данные принадлежат классу, поэтому обновляются через this.
  export function getArrayQuestions(arrayBD)
  {
    if (arrayBD !== undefined) {
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

 getArrayQuestions.help = `
Функция деструктуризирует рабочий подмассив и передает свойства в класс WorkingField.
 `; 