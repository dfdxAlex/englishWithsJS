

// export function replaceEllipsisWithWord(id, arrayName)
// {
//           //функция подготавливает предложение, которое должно попасть
//           //в блок предыдущих ответов, для этого все вопроссы
//           //в которых есть три точки, соединяются с правильным
//           //вариантом ответа.
//           if (arrayName[id][0].indexOf('...') !== -1) {
//               let str = arrayName[id][0];
//               const rez = str.replace('...',arrayName[id][1]);
//               return rez;
//           } else if(arrayName[id][0].indexOf('…') !== -1) {
//               let str = arrayName[id][0];
//               const rez = str.replace('…',arrayName[id][1]);
//               return rez;
//           } else {
//               return arrayName[id][1];
//           }
// }

export function replaceEllipsisWithWord(id, arrayName) {
  // Функция формирует предложение для блока предыдущих ответов.
  // Если в вопросе есть "..." или "…", они заменяются правильным ответом.

  const question = arrayName[id][0]; // текст вопроса
  const answer = arrayName[id][1];   // правильный ответ

  // Регулярка ищет либо три точки "...", либо символ многоточия "…"
  const ellipsisRegex = /\.{3}|…/;

  // Если многоточие найдено — заменяем на ответ
  if (ellipsisRegex.test(question)) {
    return question.replace(ellipsisRegex, answer);
  }

  // Иначе просто возвращаем ответ
  return answer;
}
