// Класс рисует поле статистики по текущему уровню

class Statistic
{
    init(ok, error)
    {
        let rez = ok/(ok+error)*100;

        document.getElementById('statisticOk').innerHTML = ok;
        document.getElementById('statisticError').innerHTML = error;
        document.getElementById('statisticRez').innerHTML = Math.floor(rez)+'%';
        const translate = new LanguageController();
        
        document.getElementById('statisticReset').innerHTML = `<button class="btn" id="button_reset" type="button">${translate.translate('Сброс')}</button>`;

        document.getElementById('button_reset').addEventListener('click', resetStatistic)
    }
}
