// Класс рисует поле статистики по текущему уровню

class Statistic
{
    init(okInput, errorInput)
    {
       let rez = 0;
       // Проверяются значения правильных и не правильных ответов
       let ok = isNaN(parseFloat(okInput)) ? 0 : parseFloat(okInput);
       let error = isNaN(parseFloat(errorInput)) ? 0 : parseFloat(errorInput);

       // считаются проценты только если сумма балов отлична от нуля
       // и является цифрой
       let allPunkt = (+ok+error);
       if (allPunkt !== 0) {
           rez = (ok/(allPunkt))*100;
       }

       const translate = FactoryRegistr.getObject("LanguageController");
       
       const level = notNull(localStorage.getItem('level'));
       
       const count = notNull(localStorage.getItem('intTranslate_'+level));

       // Проверка наличия одной из кнопок ответов, если она есть,
       // значит можно событие сброса ставить
       // Добавить статистику в текст на кнопке
       document.getElementById('level24').innerHTML = translate.translate('Собрано алмазов:') + Math.trunc(ok);
       document.getElementById('level25').innerHTML = translate.translate('Ошибок:') + error;
       document.getElementById('level26').innerHTML = translate.translate('Успех:') + Math.floor(rez)+'%';
       document.getElementById('level27').innerHTML = translate.translate('Сброс');
       document.getElementById('level27').onclick = () => {
           resetStatistic();
           // пересчитать статистику и записать в хранилище
       }
       document.getElementById('level28').innerHTML = translate.translate('Переводов:')+count;
    }

}


