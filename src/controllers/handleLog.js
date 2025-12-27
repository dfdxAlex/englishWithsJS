import { activatingLogs } from './activatingLogs.js';
import { Logs } from '../models/Logs.js';

// функция обрабатывает нажатие кнопки Log
export function handleLog()
{
    // выйти из функции если падает бонусный ящик
    if (document.getElementById('scarb')) {
        return;
    }
    // убрать лишнее перед показом логов
    activatingLogs(true);
    // выбрать блок для логов и поместить в него логи
    const logForDiv = document.getElementById('log_for_div');
    const viewLogs = new LogField(Logs);
    logForDiv.innerHTML = viewLogs.getField();

    // Добавить обработчик кликов, используется эффект всплытия
    logForDiv.onclick = (ev) => {activatingLogs(false, ev)};
}
