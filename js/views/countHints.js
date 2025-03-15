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
    // Это функционал из кнопки помощи, который блокирует начисление балов
    // при изучении слов перевод равнозначен кнопке Help, поэтому проще 
    // воспользоваться уже готовым приемом.
    if (LevelDataModel.mapNameMenu(parseFloat(localStorage.getItem('level')-1)) == 2) {
        localStorage.setItem('was_click_help','true');
    }

    // получить информацию о текущем тесте - уровне
    const level = localStorage.getItem('level');
    // получить текущее число подсказок, добавить 1 и записать
    let intTranslate = +localStorage.getItem('intTranslate_'+level) | 0;
    intTranslate++;
    localStorage.setItem('intTranslate_'+level, intTranslate);
}
