// функция переключает блоки между работой и показом логов
function activatingLogs(regim = false, ev = null)
{
    // Так как используется еффект всплытия для события возврата из логов
    // то контроллируется объект события
    // Если нажатие произошло по кривой стрелке возврата из логов,
    // то в функцию будет перетан объект события с параметром 
    // класса class="button_return_log"
    // Если нажатие произошло по аккордиону, то класс будет другим и 
    // поэтому выходим из функции.
    if (ev !== null) {
        if (ev.target.className !== "button_return_log") {
            return null;
        }
    }

    // Пробую заменить жёсткую логику промисами. Не ради эффективности
    // а для тренировки

   // Функция возвращает массив с выбранными элементами из ДОМА
   const sellect = ()=>{
     return [document.getElementById('search_error'), 
             document.getElementById('log'), 
             document.getElementById('working_field'), 
             document.getElementById('log_for_div')];
        }

   // создать простой промис
   const workingForLogPromise = new Promise((logSee, logDontSee)=>{
     if (regim) logSee();
     else logDontSee();
   });

       workingForLogPromise.then(()=>{
          props = sellect();
          if (props.every(p => p !== null)) {
          props[0].style.display = 'none';
          props[1].style.display = 'none';
          props[2].style.display = 'none';
          props[3].style.display = 'block';
          }
        },
        ()=>{
          props = sellect();
          if (props.every(p => p !== null)) {
          props[0].style.display = 'block';
          props[1].style.display = 'block';
          props[2].style.display = 'block';
          props[3].style.display = 'none';
          }
        }
      );


    // Дальше алгоритм прятания рабочего поля либо логов
  //   const searchErrorButton = document.getElementById('search_error');
  //   const searchErrorLog = document.getElementById('log');
  //   const searchErrorWorkField = document.getElementById('working_field');
  //   const logForDiv = document.getElementById('log_for_div');
  // if (regim) {
  //   searchErrorButton.style.display = 'none';
  //   searchErrorLog.style.display = 'none';
  //   searchErrorWorkField.style.display = 'none';
  //   logForDiv.style.display = 'block';
  // } else {
  //   searchErrorButton.style.display = 'block';
  //   searchErrorLog.style.display = 'block';
  //   searchErrorWorkField.style.display = 'block';
  //   logForDiv.style.display = 'none';
  // }
}
