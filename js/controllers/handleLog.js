// функция обрабатывает нажатие кнопки Log
function handleLog()
{
    // убрать лишнее перед показом логов
    activatingLogs(true);
    // выбрать блок для логов и поместить в него логи
    const logForDiv = document.getElementById('log_for_div');
    const viewLogs = new LogField(Logs);
    logForDiv.innerHTML = viewLogs.getField();

    // Добавить обработчик кликов, используется эффект всплытия
    logForDiv.onclick = (ev) => {activatingLogs(false, ev)};
}
