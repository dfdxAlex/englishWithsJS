// Класс рисует поле статистики по текущему уровню

class Statistic
{
    init(okInput, errorInput)
    {
       let rez = 0;

       // считаются проценты только если сумма балов отлична от нуля
       // и является цифрой
       let allPunkt = (okInput+errorInput);
       if (allPunkt !== 0 && !isNaN(allPunkt)) {
           rez = okInput/(okInput+errorInput)*100;
       }

       // Проверяются значения правильных и не правильных ответов
       let ok = isNaN(parseInt(okInput, 10)) ? 0 : parseInt(okInput, 10);
       let error = isNaN(parseInt(errorInput, 10)) ? 0 : parseInt(errorInput, 10);

       document.getElementById('statisticOk').innerHTML = ok;
       document.getElementById('statisticError').innerHTML = error;
       document.getElementById('statisticRez').innerHTML = Math.floor(rez)+'%';
       const translate = FactoryRegistr.getObject("LanguageController");
        
       document.getElementById('statisticReset').innerHTML = `<button class="btn" id="button_reset" type="button">${translate.translate('Сброс')}</button>`;

       document.getElementById('button_reset').addEventListener('click', resetStatistic)
    }
}
