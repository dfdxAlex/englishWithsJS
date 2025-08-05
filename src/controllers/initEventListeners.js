import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { initEventForMenuStatistic } from '../view/forStatistic/initEventForMenuStatistic.js';

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
    test = hundleHelpPrime();

    // функция находит кнопки меню Статистики и заполняет их содержимым
    // если не удалось найти все кнопки то вернет false
    test = initEventForMenuStatistic();


    if (test) {
        console.log('Все элементы получили свои события');
        clearInterval(id);}
},100);