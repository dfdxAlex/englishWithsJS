import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { initEventForMenuStatistic } from '../view/forStatistic/initEventForMenuStatistic.js';
import { instanceStatistic } from '../view/Statistic.js';
import { hundleUpdateBurgerOrWord } from './forInitEventListeners/hundleUpdateBurgerOrWord.js';
// import { initEventForMenuStatistic } from '../view/forStatistic/initEventForMenuStatistic.js';
// Здесь функции, которые должны отработать когда загрузится статическая страница
window.addEventListener('load', () => {
    // hundleHelpPrime();
});


// интервал проверяет все элементы и накладывает на них обработчики событий.
// если за один проход удалось зарегить все обработчики, то выходим
const id = setInterval(()=>{
    let test = true;

    // Событие клик для показа инфы про алмазы
    // если функция сделает всё что должна, то вернет true
    if (!hundleHelpPrime()) test = false;

    // функция находит кнопки меню Статистики и заполняет их содержимым
    // если не удалось найти все кнопки то вернет false
    if (!initEventForMenuStatistic()) test = false;

    // Если не удалось менюшке Burger или Word - выбор теста или учить слова, добавить событие обновления 
    // статистики то вернуть false statistic
    if (!hundleUpdateBurgerOrWord('burger')) test = false;
    if (!hundleUpdateBurgerOrWord('word')) test = false;
    if (!hundleUpdateBurgerOrWord('statistic')) test = false;


    if (test) {
        console.log('Все элементы получили свои события');
        clearInterval(id);}
},100);