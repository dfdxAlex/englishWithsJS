import { instanceStatistic } from '../Statistic.js';
import { getTranslate } from '../../models/forFactoryRegistr/getTranslate.js';

export function initEventForMenuStatistic()
{
       let test = true;

       const translate = getTranslate();

       // Проверка наличия одной из кнопок ответов, если она есть,
       // значит можно событие сброса ставить
       // Добавить статистику в текст на кнопке
       document.getElementById('level24').innerHTML = translate.translate('Собрано алмазов:') + Math.trunc(instanceStatistic.ok);
       document.getElementById('level25').innerHTML = translate.translate('Ошибок:') + instanceStatistic.error;
       document.getElementById('level26').innerHTML = translate.translate('Успех:') + Math.floor(instanceStatistic.rez)+'%';
       document.getElementById('level27').innerHTML = translate.translate('Сброс');
       document.getElementById('level27').onclick = () => {
           resetStatistic();
           // пересчитать статистику и записать в хранилище
       }
       document.getElementById('level28').innerHTML = translate.translate('Переводов:')+instanceStatistic.count;

    return test;
}