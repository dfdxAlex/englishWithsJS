import { instanceStatistic } from '../Statistic.js';
import { getTranslate } from '../../models/forFactoryRegistr/getTranslate.js';

export function initEventForMenuStatistic()
{
       let test = true;

       const translate = getTranslate();

       // Проверка наличия одной из кнопок ответов, если она есть,
       // значит можно событие сброса ставить
       // Добавить статистику в текст на кнопке
       const level24 = document.getElementById('level24');
       if (!level24) {
           test = false;
       } else {
           level24.innerHTML = translate.translate('Собрано алмазов:') + Math.trunc(instanceStatistic.ok);
       }

       const level25 = document.getElementById('level25');
       if (!level25) {
           test = false;
       } else {
           level25.innerHTML = translate.translate('Ошибок:') + instanceStatistic.error;
       }
       
       const level26 = document.getElementById('level26');
       if (!level26) {
           test = false;
       } else {
           level26.innerHTML = translate.translate('Успех:') + Math.floor(instanceStatistic.rez)+'%';;
       }
       
       const level27 = document.getElementById('level27');
       if (!level27) {
           test = false;
       } else {
           level27.innerHTML = translate.translate('Сброс');
           level27.addEventListener('click', () => {
           resetStatistic();
           // пересчитать статистику и записать в хранилище
       });

       const level28 = document.getElementById('level28');
       if (!level28) {
           test = false;
       } else {
           level28.innerHTML = translate.translate('Переводов:')+instanceStatistic.count;
       }
           
       }

    return test;
}