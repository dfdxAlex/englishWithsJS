// функция обрабатывает нажатие кнопки Log
function handleLog()
{
    // убрать лишнее перед показом логов
    activatingLogs(true);
    // выбрать блок для логов и поместить в него логи
    const logForDiv = document.getElementById('log_for_div');
    const viewLogs = new LogField(Logs);
    logForDiv.innerHTML = viewLogs.getField();

    let buttonReturnLog;
    Logs.logs.forEach((el, index) => {
        buttonReturnLog = document.getElementById('button_return_log'+index);
        buttonReturnLog.addEventListener('click',()=>{activatingLogs()});
    })
}
