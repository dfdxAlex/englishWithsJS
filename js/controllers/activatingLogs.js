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

    // Дальше алгоритм прятания рабочего поля либо логов
    const searchErrorButton = document.getElementById('search_error');
    const searchErrorLog = document.getElementById('log');
    const searchErrorWorkField = document.getElementById('working_field');
    const logForDiv = document.getElementById('log_for_div');
  if (regim) {
    searchErrorButton.style.display = 'none';
    searchErrorLog.style.display = 'none';
    searchErrorWorkField.style.display = 'none';
    logForDiv.style.display = 'block';
  } else {
    searchErrorButton.style.display = 'block';
    searchErrorLog.style.display = 'block';
    searchErrorWorkField.style.display = 'block';
    logForDiv.style.display = 'none';
  }
}
