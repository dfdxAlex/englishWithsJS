  // Функция очищает массив toBeSentences от лишнего слова Not.
  // Данный массив изначательно построен особенным образом.
  export function clearNotToBeSentences()
  {
    // Если это другой массив, то выйти
    if (localStorage.getItem('nameArrayDb') !== 'toBeSentences') 
        return ;

    // Если в предложении есть not, то заменить на пустую строку
    if (this.question.includes('not'))
        this.question = this.question.replace(' not', '');
  }

  clearNotToBeSentences.help = `
Функция очищает массив toBeSentences от лишнего слова Not.
Данный массив изначательно построен особенным образом. 
  `;