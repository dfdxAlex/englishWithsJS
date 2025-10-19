import { SettingForProgram } from '../../models/SettingForProgram.js';
// Функция сравнивает содержимое selectTypeTest в объекте настроек SettingForProgram
// с входящим параметром и если они совпадают, значит этот элемент Селекта должен быть выбран
// поэтому функция для него возвращает selected.
// Функция принимает участие в процессе воспроизведения определенной настройки в теге select
// функции menuSettingView()
export function setSelectForSimple(nameTest)
{
    if (nameTest == SettingForProgram.selectTypeTest) return 'selected';
    else return '';
}