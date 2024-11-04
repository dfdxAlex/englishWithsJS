// функция - обработчик события нажатия на кнопку для перевода
// вопросса.
// обработчик принимает объект события, в котором есть ссылка
// на кнопку и ссылку на объект, в котором присутствуют 
// данные для переводов

function handleTranslateQuestion(thisButton, event)
{
        // Изменяет число запрошенных подсказок непосредственно на 
        // странице
        countHints();
        
        let translateFromArray = '';
        // здесь подготавливается перевод для вопросса
        if (localStorage.getItem('EnglishWithJs_lang') === 'ru') {
            translateFromArray = thisButton.translateRu;
        }
        if (localStorage.getItem('EnglishWithJs_lang') === 'ua') {
            translateFromArray = thisButton.translateUa;
        }
        if (localStorage.getItem('EnglishWithJs_lang') === 'pl') {
            translateFromArray = thisButton.translatePl;
        }
        event.target.innerText = translateFromArray;
}
