
export function is_notWord(array)
{
  // Функция - дубликат только возвращает true, если в текущем подмассиве
  // работаем с пропущенным словом
  let question, option1;

  [question, option1] = array;
        if (question.includes('/')) {
            return true;
        }
        if (question.includes('...')) {
            return true;
        }
        if (question.includes('…')) {
            return true;
        }
        if (question.includes('___')) {
            return true;
        }
        return false;
}

is_notWord.help = `
Функция - дубликат только возвращает true, если в текущем подмассиве
работаем с пропущенным словом
`;