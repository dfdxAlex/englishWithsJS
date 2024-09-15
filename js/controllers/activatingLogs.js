// функция переключает блоки между работой и показом логов
function activatingLogs(regim = false)
{
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
