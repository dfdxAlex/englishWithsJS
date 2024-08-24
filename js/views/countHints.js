// функция выводит число запрошенных подсказок с переводом задания

function countHints()
{
    // проверить не показана ли ещё подсказка, если показана то
    // выйти из функции
    const search = document.getElementById('translate');
    if (search.innerText !== "Перевести вопрос" 
        && search.innerText !== "Перекласти питання"
          && search.innerText !== "Przetłumacz pytanie"
            && search.innerText !== "Translate question"
    )
        return false;

    // получить информацию о текущем тесте - уровне
    const level = localStorage.getItem('level');
    // получить текущее число подсказок, добавить 1 и записать
    let intTranslate = +localStorage.getItem('intTranslate_'+level) | 0;
    intTranslate++;
    localStorage.setItem('intTranslate_'+level, intTranslate);

    const linkTeg = document.getElementById('count-hints');
    const nameLevel = 'intTranslate_'+localStorage.getItem('level');
    linkTeg.innerText = localStorage.getItem(nameLevel);
}
