function replaceEllipsisWithWord(id, arrayName)
{
          //функция подготавливает предложение, которое должно попасть
          //в блок предыдущих ответов, для этого все вопроссы
          //в которых есть три точки, соединяются с правильным
          //вариантом ответа.
          if (arrayName[id][0].indexOf('...') !== -1) {
              let str = arrayName[id][0];
              const rez = str.replace('...',arrayName[id][1]);
              return rez;
          } else if(arrayName[id][0].indexOf('…') !== -1) {
              let str = arrayName[id][0];
              const rez = str.replace('…',arrayName[id][1]);
              return rez;
          } else {
              return arrayName[id][1];
          }
}
