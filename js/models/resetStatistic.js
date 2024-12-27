// Функция сбрасывает статистику по тому тесту, в котором 
// находитсяя пользователь.
// Сброс происходит по формуле два положительных бала нейтрализуют один отрицательный
// статистика и информация хранятся в локальном хранилище
// Две переменные resetOk и resetError создаются с использованием
// их постоянных чатей level, _Ok, _Error и уровня, который 
// хранится отдельно в хранилище.
// Соединив всё это получаются две переменные, которые используются
// как индекс, который нужно обнулить.
const resetStatistic = (reset = true) => {

    const level = parseInt(localStorage.getItem('level'));
    const resetOk = 'level'+level+'_Ok';
    const resetError = 'level'+level+'_Error';

    let numberError = parseInt(localStorage.getItem(resetError));
    let numberOk =  parseInt(localStorage.getItem(resetOk));

    // переменная станет false если не было команды на сброс, но нужно 
    // пересчитать данные.
    if (reset) {
        // Если вдруг ошибка то обнулить
        if (isNaN(localStorage.getItem(resetError))) localStorage.setItem(resetError,0);
        if (isNaN(localStorage.getItem(resetOk))) localStorage.setItem(resetOk,0);

        [numberOk, numberError] = succesP(numberOk, numberError);

        localStorage.setItem(resetError,numberError);
        localStorage.setItem(resetOk,numberOk); 
    }
    const translate = FactoryRegistr.getObject("LanguageController");
    document.getElementById('level24').innerHTML = translate.translate('Пройдено заданий:') + parseInt(localStorage.getItem(resetOk));
    document.getElementById('level25').innerHTML = translate.translate('Ошибок:') + parseInt(localStorage.getItem(resetError));
    document.getElementById('level26').innerHTML = translate.translate('Успех:') + Math.floor(numberOk/(numberOk+numberError)*100)+'%';
    //перерисовать статус диамантов
    diament();
}

// сбросс ошибок
function succesP(ok, err)
{
    // Если хватает пунктов для сбрасывания ошибок
    if (err*2 <= ok) {
        err *= 2;
        ok = ok - err;
        err = 0;
    } else  {
        err = err - Math.floor(ok / 2);
        ok = 0;
    } 

    return [ok, err];
}
